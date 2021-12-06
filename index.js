function sepNumber(number) {
    let reversedNumber = String(number).split("").reverse().join("");
    let resultat = "";
    for (let i = 1; i <= reversedNumber.length; i++) {
        if (i % 3 === 0 && i !== reversedNumber.length) {
            resultat += reversedNumber[i - 1] + ",";
        } else {
            resultat += reversedNumber[i - 1];
        }
    }
    return resultat.split("").reverse().join("");
}
 
let resultat = sepNumber(56551481651);