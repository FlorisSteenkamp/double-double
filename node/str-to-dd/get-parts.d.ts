/**
 * Returns the following parts of the number string as an object:
 * * `Z`
 * * `seH` -> the exact high part string if interpreted as a real number
 * * `seL` -> the exact low part string if interpreted as a real number
 * * `seC` -> the exact correction part string if interpreted as a real number;
 * this is used for correctly rounding the lsb; interestingly ECMASCRIPT only
 * checks up to 20 significant figures for rounding purposes (we check 45)
 *
 * @param str
 *
 * @internal
 */
declare function getParts(str: string): {
    Z: number;
    seH: string;
    seL: string;
    seC: string;
};
export { getParts };
