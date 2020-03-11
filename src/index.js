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
    let letters = expr.match(/.{10}|\*{10}/g)
    
    let res=[]

    let decodeLetter = []

    let letter = []

    letters.forEach(function(e) {
        if (e === "**********") {
            res.push(" ")
        } else {
            decodeLetter = []
            letter = e.match(/.{2}/g)
            letter.forEach(function(e) {
                if (e === "10") {
                decodeLetter.push(".")
                } else if ( e === "11") {
                    decodeLetter.push("-")
                }
            })
            res.push(MORSE_TABLE[decodeLetter.join("")])
        }  
    })
   return res.join("")
    
}

module.exports = {
    decode
}