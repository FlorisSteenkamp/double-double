/**
 * * string must not contain an `'e'`, e.g. `'1e-10'` is not allowed
 *
 * @internal
 */
declare function multStrByPowOf10(s: string, pow: number): string;
export { multStrByPowOf10 };
