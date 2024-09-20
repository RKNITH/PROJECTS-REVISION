// // const birthYear = document.getElementById('birthYear');
// // const birthMonth = document.getElementById('birthMonth');
// // const birthDay = document.getElementById('birthDay');
// // const result = document.getElementById('result');
// // const calculate = document.getElementById('calculate');

// // // Days in months (index 0 = January, 11 = December)
// // const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// // function isLeapYear(year) {
// //     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// // }

// // const today = new Date();
// // const currentDate = today.getDate();
// // const currentMonth = today.getMonth() + 1; // Adjust for zero-based index
// // const currentYear = today.getFullYear();

// // function calculateAge() {
// //     const birthDays = parseInt(birthDay.value.trim());
// //     const birthMonths = parseInt(birthMonth.value.trim());
// //     const birthYears = parseInt(birthYear.value.trim());

// //     // Determine the number of days in the previous month
// //     const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
// //     const daysInPreviousMonth = (isLeapYear(currentYear) && prevMonth === 2) ? 29 : daysInMonth[prevMonth - 1];

// //     let day = currentDate;
// //     let month = currentMonth;
// //     let year = currentYear;

// //     if (birthDays > currentDate) {
// //         day += daysInPreviousMonth; // Borrow days from the previous month
// //         month--;
// //         if (month === 0) {
// //             month = 12;
// //             year--;
// //         }
// //     }
// //     day -= birthDays;

// //     if (month < birthMonths) {
// //         month += 12;
// //         year--;
// //     }
// //     month -= birthMonths;
// //     year -= birthYears;

// //     // Display the result
// //     result.innerHTML = `${year} years ${month} months ${day} days`;
// // }

// // calculate.addEventListener('click', calculateAge);


// // ************************************************************************************

// // const birthYear = document.getElementById('birthYear');
// // const birthMonth = document.getElementById('birthMonth');
// // const birthDay = document.getElementById('birthDay');
// // const result = document.getElementById('result');
// // const calculate = document.getElementById('calculate');

// // // Days in months (index 0 = January, 11 = December)
// // const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// // const isLeapYear = (year) => {
// //     return ((year % 400 === 0) || (year % 4 === 0 && year % 100 != 0))
// // }

// // const today = new Date()
// // const currentDate = today.getDate()
// // const currentMonth = today.getMonth() + 1
// // const currentYear = today.getFullYear()

// // function calculateAge() {
// //     const birthDays = birthDay.value.trim()
// //     const birthMonths = birthMonth.value.trim()
// //     const birthYears = birthYear.value.trim()

// //     const prevMonth = currentMonth === 1 ? 0 : currentMonth - 1
// //     const daysInPreviousMonth = (isLeapYear(currentYear) && prevMonth === 2) ? 29 : daysInMonth[currentMonth - 1]

// //     let day = currentDate
// //     let month = currentMonth
// //     let year = currentYear

// //     if (day < birthDays) {
// //         day += daysInPreviousMonth
// //         month--
// //         if (month === 0) {
// //             month = 12
// //             year--
// //         }
// //     }
// //     day -= birthDays

// //     if (month < birthMonths) {
// //         month += 12
// //         year--
// //     }
// //     month -= birthMonths
// //     year -= birthYears

// //     result.innerHTML = `${year} years ${month} months ${day} days`;

// // }

// // calculate.addEventListener('click', calculateAge)


// // *****************************************************************************


// const birthYear = document.getElementById('birthYear');
// const birthMonth = document.getElementById('birthMonth');
// const birthDay = document.getElementById('birthDay');
// const result = document.getElementById('result');
// const calculate = document.getElementById('calculate');

// // Days in months (index 0 = January, 11 = December)
// const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// const isLeapYear = (year) => {
//     return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
// }

// const today = new Date();
// const currentDate = today.getDate();
// const currentMonth = today.getMonth() + 1;
// const currentYear = today.getFullYear();

// function calculateAge() {
//     const birthDays = parseInt(birthDay.value, 10);
//     const birthMonths = parseInt(birthMonth.value, 10);
//     const birthYears = parseInt(birthYear.value, 10);

//     // Validate inputs
//     if (isNaN(birthDays) || isNaN(birthMonths) || isNaN(birthYears) ||
//         birthDays < 1 || birthDays > 31 ||
//         birthMonths < 1 || birthMonths > 12 ||
//         birthYears < 0) {
//         result.innerHTML = "Please enter valid date values.";
//         return;
//     }

//     const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;

//     // Highlighted: Fix the index for daysInMonth
//     const daysInPreviousMonth = (prevMonth === 2 && isLeapYear(currentYear) ? 29 : daysInMonth[prevMonth - 1]);

//     let day = currentDate;
//     let month = currentMonth;
//     let year = currentYear;

//     if (day < birthDays) {
//         day += daysInPreviousMonth;
//         month--;
//         if (month === 0) {
//             month = 12;
//             year--;
//         }
//     }
//     day -= birthDays;

//     if (month < birthMonths) {
//         month += 12;
//         year--;
//     }
//     month -= birthMonths;
//     year -= birthYears;

//     result.innerHTML = `${year} years ${month} months ${day} days`;
// }

// calculate.addEventListener('click', calculateAge);




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const birthYear = document.getElementById('birthYear');
const birthMonth = document.getElementById('birthMonth');
const birthDay = document.getElementById('birthDay');
const result = document.getElementById('result');
const calculate = document.getElementById('calculate');

// Days in months (index 0 = January, 11 = December)
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = (year) => {
    return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
}


const today = new Date()
const currentDate = today.getDate()
const currentMonth = today.getMonth() + 1
const currentYear = today.getFullYear()


const calculateAge = () => {
    const birthDays = parseInt(birthDay.value, 10)
    const birthMonths = parseInt(birthMonth.value, 10)
    const birthYears = parseInt(birthYear.value, 10)

    if (isNaN(birthDays) || isNaN(birthMonths) || isNaN(birthYears) ||
        birthDays < 1 || birthDays > 31 ||
        birthMonths < 1 || birthMonths > 12 ||
        birthYears < 0) {
        result.innerHTML = "Please enter valid date values.";
        return;
    }

    const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1
    const daysInPreviousMonth = (isLeapYear(currentYear) && prevMonth === 2) ? 29 : daysInMonth[prevMonth - 1]

    let days = currentDate
    let month = currentMonth
    let year = currentYear

    if (days < birthDays) {
        days += daysInPreviousMonth

        month--
        if (month === 0) {
            month = 12
            year--
        }
    }
    days -= birthDays

    if (month < birthMonths) {
        month += 12
        year--
    }
    month -= birthMonths
    year -= birthYears



    result.innerHTML = `${year} years ${month} months ${days} days`;


}



calculate.addEventListener('click', calculateAge)