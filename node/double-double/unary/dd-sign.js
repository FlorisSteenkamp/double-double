/**
 * Returns the sign of the given double-double-precision floating point number.
 * * a positive or negative double or zero is returned - not necessarily +1, 0
 * or -1
 * * prefer inlining this - it is really only here for reference
 */
function ddSign(f) {
    return f[1];
}
export { ddSign };
//# sourceMappingURL=dd-sign.js.map