

function validate() {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let tamt = document.getElementById("tamt");
    let famt = document.getElementById("famt");
    let damt = document.getElementById("damt");
    
    clearBorder(user);
    clearBorder(pass);
    clearBorder(tamt);
    clearBorder(famt);
    clearBorder(damt);   
    
    let userCheck = userValidation(user);
    let passCheck = passValidation(pass);
    let tamtCheck = amtValidation(tamt);
    let famtCheck = amtValidation(famt);
    let damtCheck = amtValidation(damt);
    return (userCheck && passCheck && tamtCheck && famtCheck && damtCheck);
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

