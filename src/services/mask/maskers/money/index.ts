type MoneyMaskOptions = {
  precision?: number;
  delimiter?: string;
  separator?: string;
  acceptNegative?: boolean;
};

const getOptions = ({
  precision = 2,
  delimiter = ',',
  separator = '.',
  acceptNegative = true
}: MoneyMaskOptions = {}) => {
  if (precision < 0) throw new Error('Precision cannot be negative number');
  if (separator === '-') throw new Error('Separator cannot be slash');
  if (delimiter === '-') throw new Error('Delimiter cannot be slash');
  if (separator === delimiter)
    throw new Error('Separator and Delimiter cannot be equal');

  return {
    precision,
    delimiter,
    separator,
    acceptNegative
  };
};

export const parseMoney = (number: number, options: MoneyMaskOptions = {}) => {
  const { precision, separator, delimiter, acceptNegative } =
    getOptions(options);

  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: precision
  }).format(number);

  const formattedCurrency = currency.replace(/\.|,/gi, matched =>
    matched === '.' ? separator : delimiter
  );

  const isNegative = acceptNegative && number < 0;

  if (isNegative) {
    const currencyWithoutSymbol = formattedCurrency.slice(4);
    return `-${currencyWithoutSymbol}`;
  }

  const currencyWithoutSymbol = formattedCurrency.slice(3);
  return currencyWithoutSymbol;
};

export const unparseMoney = (
  currency: string,
  options: MoneyMaskOptions = {}
) => {
  const { delimiter, acceptNegative } = getOptions(options);

  const unusedCharacters = new RegExp(`[^\\d\\${delimiter}]`, 'gi');
  const sanitizedPositiveMoney = currency
    .replace(unusedCharacters, '')
    .replace(delimiter, '.');

  const numberOfSlash = currency.match(/-/gi)?.length || 0;
  const isNegative = numberOfSlash % 2 !== 0;
  const multiplier = acceptNegative && isNegative ? -1 : 1;

  return Number(sanitizedPositiveMoney) * multiplier;
};

export const moneyInputMask = (
  currency: string,
  rawOptions: MoneyMaskOptions = {}
) => {
  const opts = getOptions(rawOptions);
  const { precision, separator, delimiter, acceptNegative } = opts;

  const unusedCharacters = new RegExp(
    `[^\\d\\${separator}\\${delimiter}]`,
    'gi'
  );
  const sanitizedCurrency = currency.replace(unusedCharacters, '');

  const precisionCount =
    sanitizedCurrency.length - sanitizedCurrency.indexOf(delimiter) - 1;

  const numberOfSlash = currency.match(/-/gi)?.length || 0;
  const isNegative = numberOfSlash % 2 !== 0;
  const multiplier = acceptNegative && isNegative ? -1 : 1;

  /**
   * expect: 0,12
   * received: 0,123
   * action: move number to left
   */
  if (precisionCount > precision) {
    const offset = precisionCount - precision;
    const number = unparseMoney(sanitizedCurrency, opts);
    const movedPrecisionNumber = number * 10 ** offset;
    return parseMoney(movedPrecisionNumber * multiplier, opts);
  }

  /**
   * expect: 0,12
   * received: 0,1
   * action: move number to rigth
   */
  if (precisionCount < precision) {
    const offset = precision - precisionCount;
    const number = unparseMoney(sanitizedCurrency, opts);
    const movedPrecisionNumber = number / 10 ** offset;
    return parseMoney(movedPrecisionNumber * multiplier, opts);
  }

  return parseMoney(unparseMoney(sanitizedCurrency, opts) * multiplier, opts);
};
