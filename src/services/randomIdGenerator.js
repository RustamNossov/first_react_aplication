function getRandomIntInclusive(min=0, max=9) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

function getRandomLatinLetter(min=97, max=122) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min); //Максимум и минимум включаются
  }

function switcher(min=0, max=1) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

export default function generator(numOfSymbols=10) {
    let idKey = '';
    for (let i=1; i<=numOfSymbols; ++i) {
        if (switcher() === 1) {
            idKey += getRandomIntInclusive();
        } else {
            idKey += getRandomLatinLetter();
        }
    }
    
    return idKey;
}

