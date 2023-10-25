var btnTranslate = document.querySelector(".btn-translate");


var txtInput = document.querySelector("#txt-input");


 var output = document.querySelector("#outputdiv")

 var serverurl = "https://api.funtranslations.com/translate/minion.json"
	
 
    
     function getTranslateURL(text){
        return serverurl + "?" + "text=" + text
     }

     function errorHandler(error){
         console.log("error occured", error);
        alert("something wrong with server! try after sometime")

     }

 function clickHandler(){
   // output.innerHTML =  "jdjdsdjdgf " + ":"  + txtInput.value
   var inputText = txtInput.value; // taking input

   //calling server for processing
  fetch(getTranslateURL(inputText))
   .then(response => response.json())
   .then (json => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
   })
 .catch(errorHandler);


 };

btnTranslate.addEventListener("click", clickHandler)