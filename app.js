let sourceText = document.getElementById("text");
let toText = document.getElementById("btn-bin");
let toBin = document.getElementById("btn-text");
let resultElt = document.getElementById("display");
sourceText.value = "";

function binaryToText(str){

  let binString = str.trim().split(" ");
  var convertString = [];
  
  for(let i = 0; i < binString.length; i++){
    let bin = binString[i]
    let asciiCode = parseInt(bin, 2);
    let letter = String.fromCharCode(asciiCode);
  
    convertString.push(letter);
  }

  return convertString.join("");
}

function TextToBin(str){

  function addZero(max){
    let zero = "";
    while(zero.length < max){
        zero = zero.concat("0");
    }
    return zero;
  }

  let convertString = [];
  str = str.trim();
  var result = [];
  

  for(let i = 0; i < str.length; i++){
    let bin = str.charCodeAt(i).toString(2);
    convertString.push(bin," ");
  }

  for(let i=0; i<convertString.length; i++){
    if(convertString[i] !== " " && convertString[i].length < 8){
      
      let nb = 8 - convertString[i].length;
      let item = addZero(nb) + convertString[i];
      result.push(item);

    }
  }
  return result.join(" ");
}


toText.addEventListener("click", function(){
  
  let strValue = sourceText.value;
  resultElt.innerText = TextToBin(strValue);
  console.log(TextToBin(strValue));
  
});

toBin.addEventListener("click", function(){

  let strValue = sourceText.value;
 
    resultElt.innerText = binaryToText(strValue);
    console.log(binaryToText(strValue));
});

//let isBin =/^[0-1|\s]{1,}$/;
//let isBin =/^([0-1]{7})\s{1,}/;
