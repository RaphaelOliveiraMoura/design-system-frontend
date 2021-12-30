import { IObjectManipulator } from './types';

import { vanillaObjectManipulator } from './vanilla';

export const {
  merge,
  getValueFromKeyPath,
  createObjectFromKeyPath
}: IObjectManipulator = vanillaObjectManipulator();
