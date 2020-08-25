/**
 * A type helper that infers an union of types as an intersection of them.
 */
type UnionToIntersection<UnionOfTypes> = (
  UnionOfTypes extends unknown ? (value: UnionOfTypes) => unknown : never
) extends (value: infer IntersectionOfTypes) => unknown
  ? IntersectionOfTypes
  : never;

export default UnionToIntersection;
