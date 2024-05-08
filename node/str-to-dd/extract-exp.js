function extractExp(s) {
    const idx = s.indexOf('e');
    let exp = 0;
    if (idx !== -1) {
        exp = Number(s.slice(idx + 1));
        s = s.slice(0, idx);
    }
    return { s, exp };
}
export { extractExp };
//# sourceMappingURL=extract-exp.js.map