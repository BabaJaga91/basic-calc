var outputNumber = document.querySelector('.input-number');
outputNumber.value = "0";

var calcContainer = document.querySelector('.calc-container');

calcContainer.addEventListener('click', function(event) {
    var clicked = event.target;
    if (clicked.matches('.number')) {
        if(outputNumber.value == '0'){
            outputNumber.value = ''; };
        outputNumber.value += clicked.value;
    } 
    else if (clicked.matches('.mat-sign')) {
        var lastChar =outputNumber.value.slice(-1);
        if (lastChar =='+' || lastChar =='-' || lastChar =='*' || lastChar =='/' || lastChar =='.'){
            outputNumber.value = outputNumber.value.substr(0, outputNumber.value.lentgh - 1);
        };
        outputNumber.value += clicked.value;
    }
    else if(clicked.matches('.delete')){
        outputNumber.value ='0';
    }
    else if (clicked.matches('.delete-last')){
        outputNumber.value = outputNumber.value.slice(0, - 1);
    } 
    else if (clicked.matches('.equals')){
        var result = eval(outputNumber.value);
        outputNumber.value = parseFloat(result.toFixed(4));}
    
    else {
        return(0);
    }  
       
});
 


    


