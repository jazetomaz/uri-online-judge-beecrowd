var input = require('fs').readFileSync('JS/stdin', 'utf8');
var lines = input.split('\n');

let maiorNum = 0;
let posicao = 0;

for (let i = 0; i < lines.length; i++){
    if (parseInt(lines[i]) > maiorNum){
        maiorNum = lines[i];
        posicao = i + 1;
    }
}

console.log(maiorNum + '\n' + posicao);