//sum zero

const addToZero = arr => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false
}

console.log(addToZero([1, 4, 8, 1, 2]))
// Time: O(n^2)
// Space: O(n)

//unique characters

const hasUniqueChars = str => {
    let lowerWord = str.toLowerCase()
    let newWord = new Set(lowerWord)
    newWord = Array.from(newWord)
    newWord = newWord.join('')
    if(newWord.length === str.length){
        return true
    }else{
        return false
    }
}
console.log(hasUniqueChars("cheese"))
// Time: O(n)
// Space: O(1)

const isPangram = str => {
    str = str.toLowerCase()
    return str.includes("a" && "b" && "c" && "d" && "e" && "f" && "g" && "h" && "i" && "j" && "k" && "l" && "m" && "n" && "o" && "p" && "q" && "s" && "t" && "u" && "v" && "x" && "y" && "z") 
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"))
// Time: O(n)
// Space: O(1)

const findLongestWord = arr => {
    let biggestBoi = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > biggestBoi){
            biggestBoi = arr[i].length
        }
    }
    return biggestBoi
}
console.log(findLongestWord(["bacon","poptart","waffles","pancakes","crepes"]))
//now I'm hungry
//Time: O(n)
//Space: O(n)
