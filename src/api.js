const convertCharacterAInt = (roman) => {
    switch (roman) {
        case 'I' : return 1;
        case 'V' : return 5;
        case 'X' : return 10;
        case 'L' : return 50;
        case 'C' : return 100;
        case 'D' : return 500;
        case 'M' : return 1000;    
        default: return -1;
    }
}

const repeatThree = (repeat, countRoman) => {
    let indices = [];
    for (const property in repeat) {    
        if(repeat[property] > 3) {
            let idx = countRoman.lastIndexOf(property);
            while (idx != -1) {
                indices.push(idx);
                idx = (idx > 0 ? countRoman.lastIndexOf(property, idx - 1) : -1);
            }
        }
    }
    const sortIndice = indices.sort();
    let cont = 0;
    for (let r = 0; r < sortIndice.length-1; r++) {
        sortIndice[r] + 1 == sortIndice[r+1] ? cont ++  : cont;            
    }
    if (cont > 2) {
        return true;
    }
    return false;
}

const validateRepeat = (roman) => {
    const countRoman = [...roman]
    var repeat = {};
    countRoman.forEach(function(n){     
        repeat[n] = (repeat[n] || 0) + 1;
    });
    let key = Object.keys(repeat)
    let value = Object.values(repeat)
    for (let r = 0; r < key.length; r++) {
        let errMsg = 'Too many repetitions of roman numeral ';
        let errMsgStart5 = 'Invalid repetition of number starting with 5: ';
        switch (key[r]) {
            case 'I': if (repeatThree(repeat, countRoman)) { throw new TypeError(`${errMsg}${key[r]}`)} break;
            case 'V': if (value[r] > 1) { throw new TypeError(`${errMsgStart5}${key[r]} (${convertCharacterAInt(key[r])})`)} break;
            case 'X': if (repeatThree(repeat, countRoman)) { throw new TypeError(`${errMsg}${key[r]}`)} break;
            case 'L': if (value[r] > 1) { throw new TypeError(`${errMsgStart5}${key[r]} (${convertCharacterAInt(key[r])})`)} break;
            case 'C': if (repeatThree(repeat, countRoman)) { throw new TypeError(`${errMsg}${key[r]}`)} break;
            case 'D': if (value[r] > 1) { throw new TypeError(`${errMsgStart5}${key[r]} (${convertCharacterAInt(key[r])})`)} break;
            case 'M': if (repeatThree(repeat, countRoman)) { throw new TypeError(`${errMsg}${key[r]}`)} break;
            default: throw new TypeError('Unknown roman numeral');
        }
    }
}

const isValidPosition = (roman) => {
    const numRoman = ['IIV', 'IIX', 'IL', 'IC', 'ID', 'IM', 'XXL', 'XXC', 'XD', 'XM', 'IVI', 'IXI'];
    const exist = numRoman.map((e) => roman.indexOf(e));
    const valid = exist.every((n) => n < 0);
    return valid;
  };

const parse = (nRoman) => {
    if (typeof(nRoman) != 'string' || nRoman.length === 0) throw new TypeError('Not a string');
    let roman = nRoman.toUpperCase();
    if (!isValidPosition(roman)) {
        throw new Error('Invalid order');
      }
    validateRepeat(roman)

    let numero = convertCharacterAInt(roman.charAt(0))
    let current;
    let previous;

    for (let i = 1; i < roman.length; ++i) {
        current = convertCharacterAInt(roman.charAt(i));
        previous = convertCharacterAInt(roman.charAt(i-1));           
        if (current <= previous) {
            numero += current;
        } else {
            if (previous === 5 || previous === 50 || previous === 500) {
                throw new TypeError (`Invalid substraction prefix ${roman.charAt(i-1)}`);
            }             
            numero = numero - previous * 2 + current;
        }        
    }
    return numero;
}

const stringify = (numero) => {
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        throw new TypeError('Not a number');
    } else if (numero < 0 || numero > 3999){
        throw new TypeError('out of range');
    }

    const romans = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM','','X','XX','XXX','XL','L','LX','LXX','LXXX','XC','','I','II','III','IV','V','VI','VII','VIII','IX'];

    let digitos = String(numero).split('');
    let romano = '';
    let i = 3;

    while (i--) {
        romano = (romans[+digitos.pop() + (i * 10)] || '') + romano;
    }    
    return Array(+digitos.join('') + 1).join('M') + romano;
}

module.exports = {
    parse,
    stringify
}