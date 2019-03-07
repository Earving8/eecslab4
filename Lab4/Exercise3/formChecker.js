

function validate() {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let tamt = document.getElementById("tamt");
    let famt = document.getElementById("famt");
    let damt = document.getElementById("damt");
    let userCheck = userValidation(user);
    let passCheck = passValidation(pass);
    let tamtCheck = amtValidation(tamt);
    let famtCheck = amtValidation(famt);
    let damtCheck = amtValidation(damt);
    return (userCheck && passCheck && tamtCheck && famtCheck && damtCheck);
}

function passValidation(pass){
    if(pass.value == ""){
        return false;
    }
    return true;
}

function userValidation(user){
    if(user.value == ""){
        return false;
    }else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.value))){
        console.log("Invalid");
        return false;
    }
    console.log("Valid");
    return true;
}

function amtValidation(amt){
    return !(isNaN(amt.value) || amt.value < 0);
}
