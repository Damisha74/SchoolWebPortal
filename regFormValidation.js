function validateFields(userId,pword,name, email,){

    if ( userId=="" || pword=="" || name=="" || email==""){
        alert ("There are empty fields, please fill them ");
        return false;        
    }
    else{
        return true;
    }
}

function stringLengthValidation(field, inputLength, minLength, maxLength){
        
    if(inputLength > maxLength || inputLength < minLength)
    { 
        alert("Please input the " + field + " between " + minLength +" and " + maxLength +" characters");
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

function validateEmail(email) {

var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(reg.test(email) == false) { 
    alert("Invalid email");
    return false;
 }
    else {return true;}
}

function countryselect(country)
{
    if(country == "Default")
    {
        alert ("Please select the country");
        return false;
    }
    else
        return true;
}

function validsex(umsex)
{
    x=0;
    if(umsex[0].checked) 
    { 
        x++;
    }
    if(umsex[1].checked)
    {
        x++; 
    }
    if(x==0)
    {
        alert ("Please select the Gender ");
        return false;
    }
    else
    {
        return true;
    }
 }

 function validateLanguage(lan)
 {
    x=0;
    if(lan[0].checked) 
    { 
        x++;
    }
    if(lan[1].checked)
    {
        x++; 
    }
    if(x==0)
    {
        alert ("Please select the Language ");
        return false;
    }
    else
    {
        return true;
    }

 }

function validateForm() {
var userId = frm.userId.value;
var pword = frm.password.value;
var name = frm.name.value;
var address = frm.address.value;
var country = frm.country.value;
var zipcode = frm.zipcode.value;
var email = frm.email.value;
var sex = frm.sex;
var language = frm.language;
var about = frm.about.value


if ( validateFields(userId,pword,name,email)){
    if (stringLengthValidation("User ID", userId.length,5,12)){ 
        if(stringLengthValidation("Passowrd",pword.length,7,12)){
            if(textOnlyValidation(name)){
                if(countryselect(country)){
                    if(validateEmail(email)){
                        if(validsex(sex)){
                            if(validateLanguage(language)){
                                return true; 
                            }
                                     
                        }
                    }
                }
            }
        }  
    }
}
return false;
}