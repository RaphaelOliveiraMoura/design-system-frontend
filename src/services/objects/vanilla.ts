import { MapObject, IObjectManipulator } from './types';

function merge(object1: MapObject, object2: MapObject): MapObject {
  const target = { ...object1 };
  const source = { ...object2 };

  for (const keySource in source) {
    if (typeof keySource !== 'string') {
      continue;
    }

    const targetValueFromSource = target[keySource];
    const sourceValue = source[keySource];

    if (
      typeof targetValueFromSource === 'object' &&
      typeof sourceValue === 'object'
    ) {
      target[keySource] = merge(targetValueFromSource, sourceValue);
    } else {
      target[keySource] = sourceValue;
    }
  }

  return target;
}

function createObjectFromKeyPath(keyPath: string, value?: string): MapObject {
  return keyPath
    .split('.')
    .reverse()
    .reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (acc: any, current: any) => ({ [current]: acc }),
      value || null
    ) as MapObject;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getValueFromKeyPath(keyPath: string, source: MapObject): any {
  return keyPath
    .split('.')
    .reduce((acc, current) => acc && acc[current], source);
}

export const vanillaObjectManipulator = (): IObjectManipulator => ({
  merge,
  createObjectFromKeyPath,
  getValueFromKeyPath
});
