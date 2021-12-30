// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MapObject<T = any, Deeper = true> = Deeper extends true
  ? { [key: string]: MapObject | T }
  : { [key: string]: T };

export interface IObjectManipulator {
  merge: (object1: MapObject, object2: MapObject) => MapObject;
  createObjectFromKeyPath: (keyPath: string, value?: string) => MapObject;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValueFromKeyPath: (keyPath: string, source: MapObject) => any;
}
