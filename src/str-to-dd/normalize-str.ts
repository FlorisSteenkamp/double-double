import { getNumLeadingZerosAfterPoint } from "./get-num-leading-zeros-after-point"
import { getNumLeadingZerosBeforePoint } from "./get-num-leading-zeros-before-point";
import { d } from "./num-significant-digits";


function normalizeStr(s: string) {
    if (Number(s) === 0) {
        return { str: '0', exp: 0 };
    }

    const z = getNumLeadingZerosAfterPoint(s);

    const idx = s.indexOf('e');
    let exp = 0;
    if (idx !== -1) {
        exp = Number(s.slice(idx + 1));
        s = s.slice(0, idx);
    }

    let str: string;
    if (z > 0) {
        s = s.slice(z + 1);
        str = s[0] + '.' + s.slice(1);
        exp = exp -z;
    } else {
        const Z = getNumLeadingZerosBeforePoint(s);

        s = s.split('').filter(s => s !== '.').join('');
    
        str = s[0] + '.' + s.slice(1);
        exp = exp + Z - 1;
    }

    str = str.slice(0, 3*d + 1);

    if (str.length < 3*d + 1) {
        const zeros = new Array(3*d + 1 - str.length).join('0');
        str += zeros;
    }

    return { str, exp };
}


export { normalizeStr }


// Quokka tests
// normalizeStr('0');           //?
// const lStr = '0.00001232938472139471239487129304871293487129834712903847123908470923108921382134098324';
// normalizeStr(lStr);          //?

// normalizeStr('0.123');       //?
// normalizeStr('0.0123');      //?
// normalizeStr('1.23');        //?
// normalizeStr('12.3');        //?
// normalizeStr('123.45');      //?
// normalizeStr('1234');        //?

// normalizeStr('0.123e+10');   //?
// normalizeStr('0.0123e+11');  //?
// normalizeStr('1.23e+12');    //?
// normalizeStr('12.3e+13');    //?
// normalizeStr('123.45e+14');  //?
// normalizeStr('1234e+15');    //?

// normalizeStr('0.123e-11');   //?
// normalizeStr('0.0123e-12');  //?
// normalizeStr('1.23e-13');    //?
// normalizeStr('12.3e-14');    //?
// normalizeStr('123.45e-15');  //?
// normalizeStr('1234e-16');    //?
