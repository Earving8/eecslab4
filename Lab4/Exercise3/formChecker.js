

function validate() {
    //stores elements into variables
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let tamt = document.getElementById("tamt");
    let famt = document.getElementById("famt");
    let damt = document.getElementById("damt");
    
    
    //clears the border for each element
    clearBorder(user);
    clearBorder(pass);
    clearBorder(tamt);
    clearBorder(famt);
    clearBorder(damt);   
    
    //checks if inputs are valid
    let userCheck = userValidation(user);
    let passCheck = passValidation(pass);
    let tamtCheck = amtValidation(tamt);
    let famtCheck = amtValidation(famt);
    let damtCheck = amtValidation(damt);
    
    //checks if at least one product is selected
    let validProduct = atLeastOneProduct(tamt, famt, damt);
    
    //returns true if all inputs are valid
    return (userCheck && passCheck && tamtCheck && famtCheck && damtCheck && validProduct);
}

//function checks that the password field is not blank
function passValidation(pass){
    if(pass.value == ""){
        invalidField(pass);
        return false;
    }
    return true;
}

//function checks the username is not blank and of email form
function userValidation(user){
    if(user.value == "" || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.value))){
        invalidField(user);
        return false;
    }
    return true;
}

//function checks that a valid number is inserted and is positive
function amtValidation(amt){
    if(isNaN(amt.value) || amt.value < 0){
       invalidField(amt);
        return false;
    }
    return true;
}

//sets border to none
function clearBorder(formBox){
    formBox.style.border = "none";
}


//sets the border to red
function invalidField(field){
    field.style.border = "red 1px solid";
}

//makes sure that at least one product is being purchased
function atLeastOneProduct(a,b,c){
    let amountOfProducts= a.value+b.value+c.value;
    console.log(amountOfProducts);
    if(amountOfProducts < 1){
        invalidField(a);
        invalidField(b);
        invalidField(c);
        return false;
    }
    return true;
}

