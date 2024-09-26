document.getElementById("sfname").addEventListener("input", function (){
    validateSfname();
});
document.getElementById("slname").addEventListener("input", function ()
{
    validateSlname();
});
document.getElementById("semail").addEventListener("input", function () {
    validateEmail();
});
document.getElementById("no").addEventListener("input", function () {
    validateNo();
});
document.getElementById("fname").addEventListener("input", function () {
    validateFname();
});
document.getElementById("mname").addEventListener("input", function () {
    validateMname();
});
document.addEventListener("DOMContentLoaded", function() {
    const today = new Date().toISOString().split('T')[0];  
    document.getElementById("date").setAttribute("max", today); 
});
document.getElementById('gender').addEventListener('change', function() {
    validateGender();
});
document.getElementById("std").addEventListener("change", function () {
    validateClass();
});
document.getElementById("pwd").addEventListener("input", function () {
    validatePassword();
    validatepwdStrength();
});
document.querySelector('form').addEventListener('submit', function(event) {
    validateForm();
    const formErrorMessage = document.getElementById('formErrorMessage');
    if (validateForm()==false) {
        formErrorMessage.textContent=alert("Please fill all the required fields"); 
        formErrorMessage.style.display="block"
       
    }
    else
    {
        alert("Registration completed successfully");
    } 
});

function validateForm()
{
    const sfnameValid=validateSfname();
    const slnameValid=validateSlname();
    const emailValid=validateEmail();
    const fnameValid=validateFname();
    const mnameValid=validateMname();
    const noValid=validateNo();
    const dateValid=validateDate();
    const genderValid=validateGender();
    const classValid=validateClass(); 
    const pwdValid=validatePassword();
    const pwdSrtValid=validatepwdStrength();

    return sfnameValid && slnameValid && emailValid && noValid && dateValid &&fnameValid && mnameValid && genderValid && classValid &&pwdValid &&pwdSrtValid ;
}
//  First name validation 
function validateSfname() 
{
    const sfname = document.getElementById("sfname").value.trim();
    const nameMessage = document.getElementById("nameMessage");
    const namePattern = /^[a-zA-Z\s]+$/;
    if (sfname === "") {
        nameMessage.textContent = "Name required";
        nameMessage.style.display = "block"; 
        return false; 
    } else if (!namePattern.test(sfname)) {
        nameMessage.textContent = "Name can only contain letters and spaces";
        nameMessage.style.display = "block"; 
        return false; 
    } else {
        nameMessage.style.display = "none"; 
    }
    return true; 
}
//  Last name validation 
function validateSlname() 
{
    const slname = document.getElementById("slname").value.trim();
    const slnameMessage = document.getElementById("slnameMessage");
    const namePattern = /^[a-zA-Z\s]+$/;
    if (slname === "") {
        slnameMessage.textContent = "Name required";
        slnameMessage.style.display = "block";
        return false; 
    } else if (!namePattern.test(slname)) {
        slnameMessage.textContent = "Name can only contain letters and spaces";
        slnameMessage.style.display = "block"; 
        return false; 
    } else {
        slnameMessage.style.display = "none"; 
    }
    return true; 
}
// Email validation
function validateEmail() {
    const semail = document.getElementById("semail").value.trim();
    const emailMessage = document.getElementById("emailMessage");
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in)$/;
    if (semail==="")
    {
        emailMessage.textContent = "Email required";
        emailMessage.style.display = "block"; 
        return false;
    } else if (!emailPattern.test(semail)) {
        emailMessage.textContent= "Invalid email";
        emailMessage.style.display = "block";
        console.log(semail); 
        return false;
     } 
     else  {
        emailMessage.style.display = "none";
     }

    return true; 
}
// Mobile number validation
function validateNo() {
    const no = document.getElementById("no").value.trim();
    const noMessage = document.getElementById("noMessage");
    // Regular expression to match exactly 10 digits
    const nopattern = /^\d{10}$/;
    if (no === "") {
        noMessage.textContent = "Mobile number is required.";
        noMessage.style.display = "block"; 
        return false; 
    } 
    // Check if the input contains only digits and is exactly 10 digits long
    else if (!nopattern.test(no)) {
        noMessage.textContent = "Please enter a valid 10-digit mobile number.";
        noMessage.style.display = "block"; 
        return false; 
    } 
    else {
        noMessage.style.display = "none";
    }

    return true;
}
// Birth date Validation
function validateDate()
{
    const date=document.getElementById("date").value.trim();
    const dateMessage=document.getElementById("dateMessage");
   

    if(date==="")
    {
        dateMessage.textContent="Date of birth required";
        dateMessage.style.display = "block";
        return false;
    }
    const dob=new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dob >= today) {
        dateMessage.textContent = "Date must be in the past.";
        dateMessage.style.display = "block";
        return false;
    }    

    const age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    const day = today.getDate() - dob.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }

    if (age < 5){
        dateMessage.textContent = "Age must be greater or equal to 5.";
        dateMessage.style.display = "block"; // Show error message
        return false; // Prevent form submission
    }
        
        else if (age > 18) {
        dateMessage.textContent = "Age not exceeds 18 years.";
        dateMessage.style.display = "block"; // Show error message
        return false; // Prevent form submission
    }
     else {
        dateMessage.style.display = "none"; // Hide error message if valid
    }

    return true;

} 

// Father name validation

function validateFname() 
{
    const fname = document.getElementById("fname").value.trim();
    const fnameMessage = document.getElementById("fnameMessage"); 
    const namePattern = /^[a-zA-Z\s]+$/;

    if (fname === "") {
        fnameMessage.textContent = "Father Name required";
        fnameMessage.style.display = "block"; 
        return false;
    } else if (!namePattern.test(fname)) {
        fnameMessage.textContent = "Name can only contain letters and spaces";
        fnameMessage.style.display = "block"; 
        return false;
    } else {
        fnameMessage.style.display = "none"; 
    }

    return true; 
}

//Mother name validation

function validateMname() 
{
    const mname = document.getElementById("mname").value.trim();
    const mnameMessage = document.getElementById("mnameMessage");   
    const namePattern = /^[a-zA-Z\s]+$/;

    if (mname === "") {
        mnameMessage.textContent = "Mother Name required";
        mnameMessage.style.display = "block"; 
        return false;
    } else if (!namePattern.test(mname)) {
        mnameMessage.textContent = "Name can only contain letters and spaces";
        mnameMessage.style.display = "block"; 
        return false;
    } else {
        mnameMessage.style.display = "none";
    }

    return true;
}

// Gender Validation
function validateGender() 
{
   
    const gender = document.getElementById('gender');
    const genderMessage = document.getElementById('genderMessage');
    
    if (gender.value === "") {
        genderMessage.textContent = 'Please select your gender.';
        genderMessage.style.display = "block";
        return false;
    }
    else {
        genderMessage.style.display = "none"; 
    }

    return true;
}

// Class validation
function validateClass() 
{
   
    const std = document.getElementById('std');
    const classMessage = document.getElementById('classMessage');
    
    if (std.value === "") {
        classMessage.textContent ="Please select your class";
        classMessage.style.display = "block";
        return false;
    }
    else {
        classMessage.style.display ="none"; 
    }

    return true;
}

// Password Validation
function validatePassword() 
{
    const pwd = document.getElementById("pwd").value.trim();
    
   const cpwd = document.getElementById("cpwd").value.trim();
    const pwdMessage = document.getElementById("pwdMessage");
   const cpwdMessage = document.getElementById("cpwdMessage");
    // Name validation (letters and spaces only)
    const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (pwd==="")  {
        pwdMessage.textContent = "Password required";
        pwdMessage.style.display = "block"; 
        return false;
     }   
    else if(pwd.length <8 || pwd.length >16)
        {
            pwdMessage.textContent="Password should contain minimum 8 and maximum 16 characters";
            pwdMessage.style.display = "block";
            return false;
        }
        else if (!pwdPattern.test(pwd)) {
            pwdMessage.textContent = "Password should contain uppercase,lowercase,number and special character";
           pwdMessage.style.display = "block"; 
            return false; 
        } 
        else{
                  pwdMessage.style.display ="none";
              }
   
     if(cpwd==="") {
        
        cpwdMessage.textContent = "Confirm password required";
        cpwdMessage.style.display = "block"; 
        return false;
    }
    
  else if(pwd!==cpwd)
        {
            cpwdMessage.textContent="Password does not match with confirm password";
            cpwdMessage.style.display = "block";
            return false;
        }
        else{
            cpwdMessage.style.display = "none";
                  
            }   
    
}
// Password strength validation

function validatepwdStrength() {
    const pwd = document.getElementById("pwd").value.trim();
    const meterbar = document.getElementById("meterbar");
    const strengthPwd = document.getElementById("strengthPwd");

    let strength = 0;
    if (pwd.length >= 8 ) strength += 1;
                if (/[a-z]/.test(pwd)) strength += 1;
                if (/[A-Z]/.test(pwd)) strength += 1;
                 if (/\d/.test(pwd)) strength += 1;
               if (/[^a-zA-Z\d]/.test(pwd)) strength += 1;
            

    let meterWidth = "0%";
    let meterColor = "red";
    let strengthMsg = "week";
    
    // Adjust based on the score
    if (strength === 1) {
        meterWidth = "20%";
        meterColor = "red";
        
        strengthMsg = "Strength: Very Weak";
    } else if (strength === 2) {
        meterWidth = "40%";
        meterColor = "orange";
        strengthMsg = "Strength: Weak";
    } else if (strength === 3) {
        meterWidth = "60%";
        meterColor = "yellow";
        strengthMsg = "Strength: Moderate";
    } else if (strength === 4) {
        meterWidth = "80%";
        meterColor = "lightgreen";
        strengthMsg = "Strength: Strong";
    } else if (strength === 5) {
        meterWidth = "100%";
        meterColor = "green";
        strengthMsg = "Strength: Very Strong";
    }

    console.log("Strength:", strength);
    console.log("Meter Width:", meterWidth);
    console.log("Meter Color:", meterColor);
    console.log("Strength Message:", strengthMsg);
    // Update the meter bar and text
    meterbar.style.width = meterWidth;
    meterbar.style.backgroundColor = meterColor;
    strengthPwd.textContent =  strengthMsg;
}

//Save Form
function printform() {
    window.print();
}






