function starryPattern(noOfRows) {
    let stringToPrint = "";
    for(let i =0; i< noOfRows; i++) {
        stringToPrint += "**";
        console.log(stringToPrint);
    }
}

starryPattern(10)

//sum of n natural numbars
function calculateSum(startIndex, lastIndex) {
    let sum = 0;
    for(let i=startIndex; i<=lastIndex;i++) {
        sum += i;
    }
    return sum;

}
let ans = calculateSum(1,100);
console.log(ans);

// is it anagram?

function sortStr(str) {
    let array =str.split("").sort().join("");
    // array= array.sort();
    // let sortedString = array.join("");
    return array;
}

function isAnagram(str1, str2) {
    if(sortStr(str1) == sortStr(str2)){
        return true;
    }
    else{
        return false;
    }
}

let answ = isAnagram("rat", "Taar");
console.log(answ);
