import { ddMultDd } from '../binary/dd-mult-dd.js';
import { strToDd } from '../../str-to-dd/str-to-dd.js';
import { ddAddDd } from '../binary/dd-add-dd.js';
import { ddDiffDd } from '../binary/dd-diff-dd.js';
import { ddDivDd } from '../binary/dd-div-dd.js';
import { ddDivDouble } from '../../double-mixed-double-double/dd-div-double.js';
import { PIDd } from '../../constants.js';
import { ddGt } from '../binary/dd-gt.js';
import { ddMultDouble1 } from '../../double-mixed-double-double/dd-mult-double.js';


const { trunc } = Math;

// See https://gist.github.com/publik-void/067f7f2fef32dbe5c27d6e215f824c91#sin-abs-error-minimized-degree-33

// Maximum relative error: 1.64002557798425265331386526431095701e-39
// Maximum absolute error: 7.80601195686311420504782780641951757e-41


const a0 = [0,1];
const a1 = strToDd('-0.166666666666666666666666666666666667');
const a2 = strToDd('0.00833333333333333333333333333333333069');
const a3 = strToDd('-0.000198412698412698412698412698412671319');
const a4 = strToDd('2.75573192239858906525573192223995808e-6');
const a5 = strToDd('-2.50521083854417187750521077962123682e-8');
const a6 = strToDd('1.60590438368216145993922289621550506e-10');
const a7 = strToDd('-7.64716373181981647587481187300831335e-13');
const a8 = strToDd('2.81145725434552075980975905006999319e-15');
const a9 = strToDd('-8.22063524662432650297086257962703293e-18');
const aa = strToDd('1.95729410633890026175367390152305383e-20');
const ab = strToDd('-3.86817017051340241224838720319634797e-23');
const ac = strToDd('6.44695023999222092772271073593727141e-26');
const ad = strToDd('-9.1836779606017064087088551595474321e-29');
const ae = strToDd('1.13078207057779775850779192271873238e-31');
const af = strToDd('1.19290046424220296937971101373203567e-34');


const PIDd_2 = ddDivDouble(PIDd,2);
const PIDd2 = ddMultDouble1(2,PIDd);

/**
 * Returns the sine of x.
 *
 * @param θ a double-double precision floating point number
 * 
 * @example
 * ```
 * import { PIDd } from 'double-double';
 * import { ddDivDouble } from 'double-double';
 * 
 * ddSin(ddDivDouble(PIDd,6));  //=> [0,0.5]
 * ```
 */
function ddSin(θ: number[]) {
    let negate = θ[1] < 0;

    if (negate) {
        θ = [-θ[0],-θ[1]];
    }

    if (ddGt(θ, PIDd)) {
        const _c = ddDivDd(θ,PIDd2);
        const c = trunc(_c[1] + _c[0]);

        θ = ddDiffDd(θ, ddMultDouble1(c,PIDd2));
    }

    if (ddGt(θ, PIDd)) {
        // between 𝜋 and 2𝜋
        θ = ddDiffDd(θ, PIDd);
        negate = !negate;
    }

    if (ddGt(θ, PIDd_2)) {
        // between 𝜋/2 and 𝜋
        θ = ddDiffDd(PIDd,θ);
    }

    const x1 = θ;
    const x2 = ddMultDd(θ,θ);

    const r = 
        ddMultDd(x1,(ddAddDd(a0,
        ddMultDd(x2,(ddAddDd(a1,
        ddMultDd(x2,(ddAddDd(a2,
        ddMultDd(x2,(ddAddDd(a3,
        ddMultDd(x2,(ddAddDd(a4,
        ddMultDd(x2,(ddAddDd(a5,
        ddMultDd(x2,(ddAddDd(a6,
        ddMultDd(x2,(ddAddDd(a7,
        ddMultDd(x2,(ddAddDd(a8,
        ddMultDd(x2,(ddAddDd(a9,
        ddMultDd(x2,(ddAddDd(aa,
        ddMultDd(x2,(ddAddDd(ab,
        ddMultDd(x2,(ddAddDd(ac,
        ddMultDd(x2,(ddAddDd(ad,
        ddMultDd(x2,(ddDiffDd(ae,
        ddMultDd(x2,af))))))))))))))))))))))))))))))))))))))))))))));

    return negate ? [-r[0],-r[1]] : r;
}


export { ddSin }
