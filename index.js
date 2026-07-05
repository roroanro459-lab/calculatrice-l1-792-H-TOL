const Display = document.getElementById("Display");

function appendToDisplay(input){
   Display.value += input;
}

function clearDisplay(){
   Display.value = "";
}

function calculate(){
   try{
    Display.value = eval(Display.value);
   }
   catch(error){
    Display.value = "Syntax Error"
   }
}
function deleteLast() {
   Display.value = Display.value.slice(0, -1);
}

function percent() {
   Display.value = Display.value / 100;
}