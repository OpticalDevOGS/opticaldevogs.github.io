var firstClick = false;
var secondClick = false;

function yesClick(){
    if (firstClick != true){
        firstClick = true  
        
    } else {
      secondClick = true
        alert("2nd Click");
    }
}

function noClick(){
    if (firstClick != false){
      firstClick = true  
    } else {
        
    }
}