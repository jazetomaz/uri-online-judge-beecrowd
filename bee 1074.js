var input = require('fs').readFileSync('JS/stdin', 'utf8');
var lines = input.split('\n');

let numCorrente = 0;

nTestes = parseInt(lines[0]);

for (let i = 1; i <= nTestes; i++){

    let numStatus = "";

    numCorrente = parseInt(lines[i]);

    if (numCorrente === 0){
        numStatus = "NULL";
    } else if ((numCorrente % 2) === 0){
        numStatus = "EVEN ";
        if (numCorrente < 0){
            numStatus = numStatus + 'NEGATIVE';
        }
        else{
            numStatus = numStatus + 'POSITIVE';
        }
    }else {
        numStatus = "ODD ";
        if (numCorrente < 0){
            numStatus = numStatus + 'NEGATIVE';
        }
        else{
            numStatus = numStatus + 'POSITIVE';
        }        
    }
    console.log(numStatus);
}