const dayError = document.querySelector('.day-error');
const monthError = document.querySelector('.month-error');
const yearError = document.querySelector('.year-error');

const yearResult = document.querySelector('.year-result');
const monthResult = document.querySelector('.month-result');
const dayResult = document.querySelector('.day-result');

const submitBtn = document.querySelector('.btn');

const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

const InputRequiredError = 'This field is required';
const InputDayError = 'Must be a valid day';
const InputMonthError = 'Must be a valid month';
const InputYearError = 'Must be in the past';


const checkDayInput = () => {
    let value = dayInput.value;
    if(value == '') {
        dayError.innerHTML = InputRequiredError;
        return false;
    } else if(value < 1 || value > 31) {
         dayError.innerHTML = InputDayError;
         return false;
    }  else {
        dayError.innerHTML = '';
        return true;
    }
} 


const checkMonthInput = () => {
     let value = monthInput.value;
     if(value == '') {
        monthError.innerHTML = InputRequiredError;
         return false;
     }  else if(value < 1 || value > 12) {
        monthError.innerHTML = InputMonthError;
        return false
     } else {
        monthError.innerHTML = '';
        return true;
     }
}


const checkYearInput = () => {
    let value = yearInput.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);

    if(value == '') {
        yearError.innerHTML = InputRequiredError;
        return false;
    } else if(value > currentYear) {
        yearError.innerHTML = InputYearError;
        return false;
    } else {
        yearError.innerHTML = '';
        return true;
    }
}


const calculateAge = (birthday) => {
    let birthdate = new Date(birthday);
    let today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();
// If the birthdate month and day are after the current month and day,
 // subtract one year from the age


 if (months < 0 || (months === 0 && days < 0)) {
   years--;
   if (months === 0) {
     months = 11;
   } else {
     months = 12 + months;
   }
   days = days;
 }

   yearResult.innerHTML = years;
   monthResult.innerHTML = months;
   dayResult.innerHTML = days;
}


submitBtn.addEventListener('click',  (e) => {
    e.preventDefault();
    let day = checkDayInput();
    let month = checkMonthInput();
    let year = checkYearInput();
    if(!day || !month || !year) return
    let birthday = `${monthInput.value}/${dayInput.value}/${yearInput.value}`;
    calculateAge(birthday);

})
