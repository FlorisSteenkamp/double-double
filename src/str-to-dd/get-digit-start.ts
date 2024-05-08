
function getDigitStart(s: string) {
    let i = 0;
    
    while (!/^[0-9]+$/i.test(s[i])) {
        i++;
    }

    return i;
}


export { getDigitStart }
