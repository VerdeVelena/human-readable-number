module.exports = function toReadable(number) {
    // function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    let hundred = 0;
    let tenth = 0;
    let unity = 0;
    let result = "";
    const n = number.toString().split("");
    for (let i = n.length - 1; i >= 0; i--) {
        if (i === n.length - 1) {
            unity = parseInt(n[i]);
        } else if (i === n.length - 2) {
            tenth = parseInt(n[i]);
        } else {
            hundred = parseInt(n[i]);
        }
    }

    const unityMap = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const tenthMap = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
    };

    const twentyMap = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    // -------------------------
    if (tenth === 1) {
        result = tenthMap[unity];
    } else {
        result = unityMap[unity];
    }
    // -------------------------

    if (tenth > 1) {
        result = `${twentyMap[tenth]} ${result}`;
    }
    // --------------------------------
    if (hundred > 0) {
        result = `${unityMap[hundred]} hundred ${result}`;
    }
    // ------------------------------
    return result.trim();
};
