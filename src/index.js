const MONO_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
    'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const HUNDRED = 'hundred';

function getHundreds(number) {
    if (number >= 100 && number < 1000) {
        const hundreds = Math.floor(number / 100);
        return `${MONO_NUMBERS[hundreds]} ${HUNDRED}`;
    } else {
        return '';
    }
}

function getTens(number) {
    let result;
    let isCalculationOfOnesRequired;

    let reducedNumber = number;
    if (number >= 100) {
        reducedNumber = number % 100;
    }

    if (reducedNumber >= 20) {
        const tens = Math.floor(reducedNumber / 10);
        result = TENS[tens];
        isCalculationOfOnesRequired = reducedNumber % 10 !== 0;
    } else {
        let translatedNum = MONO_NUMBERS[reducedNumber];
        result = reducedNumber === 0 && number !== 0 ? '' : translatedNum;
        isCalculationOfOnesRequired = false;
    }
    return [result, isCalculationOfOnesRequired];
}

function getOnes(number) {
    if (number >= 100) {
        number = number % 100;
    }
    number = number % 10;
    return MONO_NUMBERS[number];
}

module.exports = function toReadable(number) {
    const hundreds = getHundreds(number);
    const [tens, isCalculationOfOnesRequired] = getTens(number);
    const ones = isCalculationOfOnesRequired ? getOnes(number) : '';
    return `${hundreds} ${tens} ${ones}`.trim();
}
