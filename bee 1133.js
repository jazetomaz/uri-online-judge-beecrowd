var input = require('fs').readFileSync('JS/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);

if (x > y){
    let temp = x;
    x = y;
    y = temp;
}

for (let i = x + 1; i < y; i++){

    if ((i % 5) === 2 || (i % 5) === 3){
        console.log(i);
    }    
}


