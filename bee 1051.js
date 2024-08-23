var input = require('fs').readFileSync('JS/stdin', 'utf8');
var lines = input.split('\n');

let IR = 0;

let renda = parseFloat(lines);

if (renda <= 2000){
    console.log('Isento');

} else if (renda <= 3000){
    renda -= 2000;
    IR = (renda * 0.08);
    console.log(`R$ ${IR.toFixed(2)}`);

} else if (renda <= 4500){
    renda -= 3000;
    IR = (1000 * 0.08);
    IR = IR + (renda * 0.18);

    console.log(`R$ ${IR.toFixed(2)}`);

} else{
    renda -= 4500;
    IR = (1000 * 0.08);
    IR = IR + (1500 * 0.18);
    IR = IR + (renda * 0.28);

    console.log(`R$ ${IR.toFixed(2)}`);

}