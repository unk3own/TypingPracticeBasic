// This program was written by Ehsan ul haq.
//Skeleton of This program
/*The program has hardcoaded arrays of words
* First you manually select the array to use (arrayOfRoots = anyArrayYouWant)
* It generates an array of random nos with the length same as the selectedArray (arrayOfRoots). 
* Then it populates the screen with the generated random indexes
* Also it puts the words in an array called arrayOfWords.
* Then it checks for " "(space) in the input box, which works as submit.
* It takes a word as input, compares it with the word on screen (for more info check code).
*/

const input = document.getElementById("mainInput");
const text = document.getElementById("textDiv");
const scoreStuff = document.getElementById("scoreStuff");
const totalWordsHtml = document.getElementById("twValue");
const wrongWordsHtml = document.getElementById("wwValue");
const rightWordsHtml = document.getElementById("rwValue");
const currentSelectedArray = document.getElementById("arraysOptionMenu");

middleLine = ["kal", "sad", "las", "kas", "gas", "jas", "jhk", "fass", "fash", "lash", "has;", "lhk", "glk"];
upperLine = ["ruu", "pow", "power", "riq", "rot", "top", "poq", "yet", "tup"];
lowerLine = ["mzn", "z.m", "bmc", "zxm", "cbm.", "mnb,", ",zv"]
allLinesBasic = ["ins", "tin", "bin.", "fin", "sell", "aid", "net", "bet", "wet,", "let", "set", "mill;",
    "bils", "tor", "bess", "mess", "neal", "zet", "quill", "quit", "quil", ";ash", "miq", "zer", "zeroo",
    "jill."]

let arrayOfRoots = middleLine;



var score = 0;
var scoreOutOf = 0;

const wordRepeatTimes = 5;
let arrayOfWords = []
// let j = 0;

const colorOfWrittenWords = "rgb(148, 148, 144)";
const colorOfNextWords = "white";
const colorOfCurrentWord = "yellow"
const colorOfWrongWord = "rgb(100, 100, 58)"
text.style.color = colorOfNextWords;


let collectionOfRandomNos = [];
while (collectionOfRandomNos.length < arrayOfRoots.length){
    randomNumber = Math.floor(Math.random() * middleLine.length);
    if (!collectionOfRandomNos.includes(randomNumber)){
        collectionOfRandomNos.push(randomNumber);
        console.log(arrayOfRoots[randomNumber]);
    }
}
//
//
function populate() {
    // for (let i=0; i<arrayOfRoots.length*wordRepeatTimes; i++){
    //     if (i%wordRepeatTimes === 0 && i != 0){
    //         j++
    //     }
    //     arrayOfWords.push(arrayOfRoots[j]);
    // }
    //

    // for (let i=0; i<arrayOfWords.length; i++){
    //     text.innerHTML += ("<span id='c"+i+"'> "+arrayOfWords[i]+"</span> ");
    // }
    //
    for (let i=0; i<arrayOfRoots.length; i++){
        for (let j=0; j<wordRepeatTimes; j++){
            arrayOfWords.push(arrayOfRoots[collectionOfRandomNos[i]]);
        }
    }
    for (let i=0; i<arrayOfWords.length; i++){
        text.innerHTML += ("<span id='c"+i+"'> "+arrayOfWords[i]+"</span> ");
    }
}
populate();


function changeArray() {
    switch (currentSelectedArray.value){
        case "all":
            arrayOfRoots = allLinesBasic;
            populate();
            console.log("all")
            break;
        case "top":
            arrayOfRoots = upperLine;
            populate();
            console.log("top")
            break;
        case "middle":
            arrayOfRoots = middleLine;
            populate();
            console.log("middle")
            break;
        case "bottom":
            arrayOfRoots = lowerLine;
            populate();
            console.log("bottom")
            break;
    }
}



let rightWord = true;
let index = 0;
document.getElementById('c'+(index).toString()).style.color=colorOfCurrentWord;

input.addEventListener("keyup", function() {
    let innerText = input.value;

    if (innerText.includes(" ")){
        input.value = "";

        
        if(index >= arrayOfWords.length){
            console.log("Yo index is greater")
        }else if (innerText.trim() === arrayOfWords[index].trim()){
            rightWord = true;
            console.log("right word");


            if (index+1 < arrayOfWords.length){
                let newWord = document.getElementById('c'+(index+1).toString());
                let oldWord = document.getElementById('c'+(index).toString());
                newWord.style.color=colorOfCurrentWord;
                if (rightWord){
                    score++;
                    scoreOutOf++;
                    oldWord.style.color=colorOfWrittenWords;
                }else {
                    scoreOutOf++;
                    oldWord.style.color=colorOfWrongWord;              
                }
                totalWordsHtml.innerText = scoreOutOf;
                rightWordsHtml.innerText = score;
                wrongWordsHtml.innerText = scoreOutOf - score;
                newWord.scrollIntoView();
            }
            
            index++
        }
        else {
            rightWord = false;
            console.log("wrong word");
        }

    }
});

function checkButtonClick() {
    var checkBtn = document.getElementById("checkForScoreVis");
    if (checkBtn.checked){
        scoreStuff.style.opacity = "1";
    }else {
        scoreStuff.style.opacity = "0";
    }
}
