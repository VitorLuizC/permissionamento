import type Nullable from "./Nullable";

/**
 * Resolves value to array. For nullable values it returns an empty array; for
 * array values return them with a new Array instance and for other just wrap
 * into array.
 * @param value
 */
export default function resolveToArray<T>(value: Nullable | T | readonly T[]): T[] {
  if (value === null || value === undefined) return [];
  if (Array.isArray(value)) return Array.from(value);
  return [value as T];
}
