const lettersMapping = {
    M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1,
};

/**
 * XVII -> 17
 */
export function translateRomanNumberToArabic(inputString){
    return [...inputString.toUpperCase()].reduce(
        (previousValue, currentValue, currentIndex, array) =>
            lettersMapping[array[currentIndex + 1]] > lettersMapping[currentValue]
                ? (previousValue - lettersMapping[currentValue])
                : previousValue + lettersMapping[currentValue],
        0
    );
}

/**
 * 17 -> XVII
 */
export function translateArabicNumberToRoman(inputArabicNumber){
    let numArabicNumber = Number(inputArabicNumber);
    if (!numArabicNumber){
        return null;
    }

    let translation = "";
    for (let letterNumber in lettersMapping){
        translation += letterNumber.repeat(Math.floor(numArabicNumber/lettersMapping[letterNumber]));
        numArabicNumber %= lettersMapping[letterNumber]
    }
    return translation;
}
