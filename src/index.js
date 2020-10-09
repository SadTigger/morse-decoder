const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const PATTERN_TABLE = {
        '10' : '.',
        '11' : '-',
        '00' : '',
        '**': ' '
    }
    // write your solution here
    let ex = expr.match(/.{1,10}/g)

    ex = ex.map(string => {
        let temp = string.match(/.{1,2}/g);
        return temp.map(el => PATTERN_TABLE[el]).join('');
    });

    return ex.map(el => {return MORSE_TABLE[el] == undefined ? ' ' : MORSE_TABLE[el]}).join('');
}

module.exports = {
    decode
}