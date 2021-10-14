export type MapObject<T = unknown, Deeper = true> = Deeper extends true
  ? { [key: string]: MapObject | T }
  : { [key: string]: T };
