import { ddAddDd } from './node/double-double/binary/dd-add-dd.js';

const dd1 = [-4.357806199228875e-10, 11638607.274152497];
const dd2 = [4.511949494578893e-11, -2797357.2918064594];

const [a,b] = ddAddDd(dd1,dd2);
const [c,d] = [-3.906611249770986e-10, 8841249.982346037];

if (a === c && b === d) {
    console.log('success! 😁');
} else {
    console.log('failure! 😥');
}