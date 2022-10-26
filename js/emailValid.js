function emailValidate(){
    /*Expression for filtering emails*/
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    /*If email passes through the filter above, (valid)*/
    if(document.getElementById("email").value.match(mailformat)){
        /*Alert that it is valid*/
        alert("Valid email!");
        document.getElementById("email").focus();
        return true;
    }
    else if(document.getElementById("email").value.match(mailformat)){
        /*Otherwise invalid*/
        alert("You entered an invalid email!");
        document.getElementById("email").focus();
        return false;
    }
}