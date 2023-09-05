var scr = document.getElementById("screen");

function btnclick(value){
    scr.value += value;
}

function clearscreen(){
    scr.value="";  
}

function result(){
    var result=eval(scr.value);
    scr.value=result;
}

function btncli(value){ 
    scr.value -= value;
}



