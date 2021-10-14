import { MapObject } from '../../types/mapObject';

export type Validator = (
  value: unknown,
  context?: unknown
) => (string | null) | Promise<string | null>;

export type ValidationResult = {
  isValid: boolean;
  errors: MapObject<string | null>;
};

export type ValidationSchema = MapObject<Validator>;
