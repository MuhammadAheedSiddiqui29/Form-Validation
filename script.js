let nameError = document.querySelector("#name-error");
let phoneError = document.querySelector("#phone-error");
let emailError = document.querySelector("#email-error");
let messageError = document.querySelector("#message-error");
let submitError = document.querySelector("#submit-error");

//FORM NAME FUNCTIONALITY

function validateName(){
    let name = document.querySelector("#contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

//FORM PHONE NUMBER FUNCTIONALITY

function validatePhone(){
    let phone = document.querySelector("#contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    
    if(!phone.match == (/^[0-9]{10}$/)){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return false;
}
