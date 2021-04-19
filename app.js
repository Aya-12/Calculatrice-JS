

do {
    var userInput= Number (prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n\n"));
console.log("hi");
   
} while (userInput != 1 && userInput != 2 && userInput != 3 && userInput != 4 )





do {
    var number1= Number (prompt("veuillez entrer votre premier nombre"));
    var number2= Number (prompt("veuillez entrer votre second nombre"));
       
    
} while (isNaN(number1) || isNaN(number2) );


/////fonction////////


function Addition(nbr1, nbr2) {
   let add= nbr1+nbr2;
   return add;
    
}




function multiplication (nbr1, nbr2) {
    let mul= nbr1*nbr2;
    return mul;
}



function soustraction(nbr1, nbr2) {
    let sous=nbr1-nbr2;
    return sous;
}



function division(nbr1, nbr2) {

        if(nbr2 == 0){
            throw new Error("impossible de diviser par 0.");
        }

    let div=nbr1/nbr2;
    return div;
}

try {
    
switch (userInput) {
    case 1:
       var result= Addition(number1, number2)
        break;

        case 2:
         var result= multiplication(number1, number2)
        break;

        case 3:
         var result= soustraction(number1, number2)
        break;

        case 4:
             var result= division(number1, number2)
            break;
    
default:
    throw new Error("une erreur est survenue.");
    }
alert(result);

}
catch(error){
    alert(error);
}


