// import { ethers } from "ethers";

const form = document.querySelector(".form");
const formGroups = document.querySelectorAll(".form_group");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const issue = document.querySelector("#issue");
const description = document.querySelector("#description");
// const formGroup = document.querySelectorAll(".form_group");
// const formGroup = document.querySelectorAll(".form_group");
// const formGroup = document.querySelectorAll(".form_group");

function emailValidation(e) {
    const emailValue = email.value;

    // Email Regex
    const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const emailRegexResult = emailRegex.test(email.value)

    if(emailValue == ''){
        // console.log(emailValue)
        setError(email, 'This field is required.')
        e.preventDefault()
    }else if(emailRegexResult == false){
        setError(email, 'Please enter a valid email address. ')
        e.preventDefault()
    }
    else{
        setSuccess(email, '')
    }
}
function subjectValidation(e) {
    const subjectValue = subject.value.trim();
    if(subjectValue == ''){
        e.preventDefault()
        setError(subject, 'This field is required.')
    }else{
        setSuccess(subject, '')
    }
}
function issueValidation(e) {
    const issueValue = issue.value.trim();
    if(issueValue == ''){
        e.preventDefault()
        setError(issue, 'This field is required.')
    }else{
        setSuccess(issue, '')
    }
}
function descriptionValidation(e) {
    const descriptionValue = description.value.trim();
    if(descriptionValue == ''){
        e.preventDefault()
        setError(description, 'This field is required.')
    }else{
        setSuccess(description, '')
    }
}

function checkInputs(e) {
    emailValidation(e);
    subjectValidation(e);
    issueValidation(e);
    descriptionValidation(e);   
}
function setError(input, message) {
    const formGroup = input.parentElement;
    const dangerText = formGroup.querySelector('.text-danger')

    dangerText.innerText = message;
    formGroup.className = 'form_group danger'
}
function setSuccess(input, message) {
    const formGroup = input.parentElement;
    const dangerText = formGroup.querySelector('.text-danger')

    dangerText.innerText = message;
    formGroup.className = 'form_group'
}
form.addEventListener('submit', (e) => {
   checkInputs(e)
})
