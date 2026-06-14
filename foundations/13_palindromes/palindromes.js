const palindromes = function (str) {
    let newStr = str.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,"")
    let reverseStr = newStr.split("").reverse().join("");

    return (newStr === reverseStr)
};

// Do not edit below this line
module.exports = palindromes;
