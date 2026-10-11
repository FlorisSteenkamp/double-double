import { ddMultDd } from '../binary/dd-mult-dd.js';
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
const a0 = [0, 1];
// The coefficients below are the correctly rounded double-doubles of the 
// given decimal strings (as given by `strToDd`), precomputed to avoid the cost 
// of string conversion at module load.
const a1 = [-9.25185853854297e-18, -0.16666666666666666]; // -0.166666666666666666666666666666666667
const a2 = [1.1564823173178714e-19, 0.008333333333333333]; // 0.00833333333333333333333333333333333069
const a3 = [-1.7209558293417997e-22, -0.0001984126984126984]; // -0.000198412698412698412698412698412671319
const a4 = [-1.8583932740480583e-22, 0.0000027557319223985893]; // 2.75573192239858906525573192223995808e-6
const a5 = [1.4488140715251414e-24, -2.505210838544172e-8]; // -2.50521083854417187750521077962123682e-8
const a6 = [1.2585293106672098e-26, 1.6059043836821613e-10]; // 1.60590438368216145993922289621550506e-10
const a7 = [-7.036096766056555e-30, -7.647163731819816e-13]; // -7.64716373181981647587481187300831335e-13
const a8 = [1.61699240775674e-31, 2.8114572543455206e-15]; // 2.81145725434552075980975905006999319e-15
const a9 = [-8.892173355837475e-35, -8.220635246624326e-18]; // -8.22063524662432650297086257962703293e-18
const aa = [-1.9242101469994406e-38, 1.9572941063389003e-20]; // 1.95729410633890026175367390152305383e-20
const ab = [2.9153006001390485e-39, -3.8681701705134027e-23]; // -3.86817017051340241224838720319634797e-23
const ac = [-8.067279870395944e-43, 6.446950239992221e-26]; // 6.44695023999222092772271073593727141e-26
const ad = [-4.2307674290181006e-45, -9.183677960601706e-29]; // -9.1836779606017064087088551595474321e-29
const ae = [3.210442311866782e-48, 1.1307820705777977e-31]; // 1.13078207057779775850779192271873238e-31
const af = [6.77241689956236e-51, 1.192900464242203e-34]; // 1.19290046424220296937971101373203567e-34
const PIDd_2 = ddDivDouble(PIDd, 2);
const PIDd2 = ddMultDouble1(2, PIDd);
/**
 * Returns the sine of the given double-double precision floating point number.
 *
 * * the polynomial approximation used has a maximum relative error of
 * 1.64e-39 (see the link in the source file); additional round-off occurs
 * during its evaluation
 * * the argument reduction (for |θ| > π/2) uses `PIDd` (π as a double-double)
 * and is therefore not exact, i.e. the absolute error grows with |θ|
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
function ddSin(θ) {
    let negate = θ[1] < 0;
    if (negate) {
        θ = [-θ[0], -θ[1]];
    }
    if (ddGt(θ, PIDd)) {
        const _c = ddDivDd(θ, PIDd2);
        const c = trunc(_c[1] + _c[0]);
        θ = ddDiffDd(θ, ddMultDouble1(c, PIDd2));
    }
    if (ddGt(θ, PIDd)) {
        // between 𝜋 and 2𝜋
        θ = ddDiffDd(θ, PIDd);
        negate = !negate;
    }
    if (ddGt(θ, PIDd_2)) {
        // between 𝜋/2 and 𝜋
        θ = ddDiffDd(PIDd, θ);
    }
    const x1 = θ;
    const x2 = ddMultDd(θ, θ);
    const r = ddMultDd(x1, (ddAddDd(a0, ddMultDd(x2, (ddAddDd(a1, ddMultDd(x2, (ddAddDd(a2, ddMultDd(x2, (ddAddDd(a3, ddMultDd(x2, (ddAddDd(a4, ddMultDd(x2, (ddAddDd(a5, ddMultDd(x2, (ddAddDd(a6, ddMultDd(x2, (ddAddDd(a7, ddMultDd(x2, (ddAddDd(a8, ddMultDd(x2, (ddAddDd(a9, ddMultDd(x2, (ddAddDd(aa, ddMultDd(x2, (ddAddDd(ab, ddMultDd(x2, (ddAddDd(ac, ddMultDd(x2, (ddAddDd(ad, ddMultDd(x2, (ddDiffDd(ae, ddMultDd(x2, af))))))))))))))))))))))))))))))))))))))))))))));
    return negate ? [-r[0], -r[1]] : r;
}
export { ddSin };
//# sourceMappingURL=dd-sin.js.map