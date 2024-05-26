const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signUpForm=document.getElementById('signUpForm');
const signInForm=document.getElementById('signInForm');

signUpButton.addEventListener('click', function(){
    signInForm.style.display="none";
    signInForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="none";
    signInForm.style.display="block";
})