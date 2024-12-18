function validateFields(usertype,pword,name){

    if ( usertype=="" || pword=="" || name==""){
        alert ("Please fill the mandatory fields ");
        return false;        
    }
    else{
        return true;
    }
}

function stringLengthValidation(field, inputLength, minLength, maxLength){
        
    if(inputLength > maxLength || inputLength < minLength)
    { 
        alert("invalid " +  field);
        return false;
    }
    else
    {   
        return true;
    }
}


function textOnlyValidation(name) {

    var reg = /^[a-zA-Z]+$/;
    if (reg.test(name) == false) {
        alert("Name contains invalid characters");        
        return false;
    }
    else{
        return true;
    }
} 

function validateForm() {
var usertype = frm.userType.value;
var pword = frm.password.value;
var name = frm.name.value;

if ( validateFields(usertype,pword,name)){
    if (stringLengthValidation("User type", usertype.length,5,12)){ 
        if(stringLengthValidation("Passowrd",pword.length,7,12)){
            if(textOnlyValidation(name)){               
                return true; 
            }
        }
    }
}                         
return false;

}