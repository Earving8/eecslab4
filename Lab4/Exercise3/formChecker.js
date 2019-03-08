

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

function passValidation(pass){
    if(pass.value == ""){
        invalidField(pass);
        return false;
    }
    return true;
}

function userValidation(user){
    if(user.value == ""){
        invalidField(user);
        return false;
    }else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.value))){
        invalidField(user);
        return false;
    }
    return true;
}

function amtValidation(amt){
    if(isNaN(amt.value) || amt.value < 0){
       invalidField(amt);
        return false;
    }
    return true;
}


function clearBorder(formBox){
    formBox.style.border = "none";
}



function invalidField(field){
    field.style.border = "red 1px solid";
}

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

