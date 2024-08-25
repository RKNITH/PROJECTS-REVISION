const data = [
    { "id": 1, "question": "What is the capital of Andhra Pradesh?", "options": ["Visakhapatnam", "Amaravati", "Hyderabad", "Vijayawada"], "answer": "Amaravati" },
    { "id": 2, "question": "What is the capital of Arunachal Pradesh?", "options": ["Kohima", "Imphal", "Dispur", "Itanagar"], "answer": "Itanagar" },
    { "id": 3, "question": "What is the capital of Assam?", "options": ["Guwahati", "Imphal", "Dispur", "Shillong"], "answer": "Dispur" },
    { "id": 4, "question": "What is the capital of Bihar?", "options": ["Bhagalpur", "Ranchi", "Patna", "Gaya"], "answer": "Patna" },
    { "id": 5, "question": "What is the capital of Chhattisgarh?", "options": ["Bilaspur", "Raipur", "Ranchi", "Korba"], "answer": "Raipur" },
    { "id": 6, "question": "What is the capital of Goa?", "options": ["Ponda", "Margao", "Panaji", "Mapusa"], "answer": "Panaji" },
    { "id": 7, "question": "What is the capital of Gujarat?", "options": ["Ahmedabad", "Gandhinagar", "Vadodara", "Surat"], "answer": "Gandhinagar" },
    { "id": 8, "question": "What is the capital of Haryana?", "options": ["Faridabad", "Chandigarh", "Panchkula", "Gurgaon"], "answer": "Chandigarh" },
    { "id": 9, "question": "What is the capital of Himachal Pradesh?", "options": ["Solan", "Manali", "Shimla", "Dharamshala"], "answer": "Shimla" },
    { "id": 10, "question": "What is the capital of Jharkhand?", "options": ["Dhanbad", "Ranchi", "Jamshedpur", "Bokaro"], "answer": "Ranchi" },
    { "id": 11, "question": "What is the capital of Karnataka?", "options": ["Hubli", "Bengaluru", "Mangalore", "Mysuru"], "answer": "Bengaluru" },
    { "id": 12, "question": "What is the capital of Kerala?", "options": ["Kochi", "Alappuzha", "Thiruvananthapuram", "Kozhikode"], "answer": "Thiruvananthapuram" },
    { "id": 13, "question": "What is the capital of Madhya Pradesh?", "options": ["Jabalpur", "Gwalior", "Indore", "Bhopal"], "answer": "Bhopal" },
    { "id": 14, "question": "What is the capital of Maharashtra?", "options": ["Nagpur", "Pune", "Mumbai", "Nashik"], "answer": "Mumbai" },
    { "id": 15, "question": "What is the capital of Manipur?", "options": ["Aizawl", "Agartala", "Kohima", "Imphal"], "answer": "Imphal" },
    { "id": 16, "question": "What is the capital of Meghalaya?", "options": ["Imphal", "Kohima", "Aizawl", "Shillong"], "answer": "Shillong" },
    { "id": 17, "question": "What is the capital of Mizoram?", "options": ["Kohima", "Imphal", "Aizawl", "Shillong"], "answer": "Aizawl" },
    { "id": 18, "question": "What is the capital of Nagaland?", "options": ["Dimapur", "Shillong", "Kohima", "Imphal"], "answer": "Kohima" },
    { "id": 19, "question": "What is the capital of Odisha?", "options": ["Rourkela", "Puri", "Bhubaneswar", "Cuttack"], "answer": "Bhubaneswar" },
    { "id": 20, "question": "What is the capital of Punjab?", "options": ["Jalandhar", "Ludhiana", "Chandigarh", "Amritsar"], "answer": "Chandigarh" },
    { "id": 21, "question": "What is the capital of Rajasthan?", "options": ["Jodhpur", "Udaipur", "Ajmer", "Jaipur"], "answer": "Jaipur" },
    { "id": 22, "question": "What is the capital of Sikkim?", "options": ["Namchi", "Gangtok", "Pelling", "Yuksom"], "answer": "Gangtok" },
    { "id": 23, "question": "What is the capital of Tamil Nadu?", "options": ["Tiruchirappalli", "Chennai", "Madurai", "Coimbatore"], "answer": "Chennai" },
    { "id": 24, "question": "What is the capital of Telangana?", "options": ["Karimnagar", "Hyderabad", "Warangal", "Nizamabad"], "answer": "Hyderabad" },
    { "id": 25, "question": "What is the capital of Tripura?", "options": ["Shillong", "Agartala", "Kohima", "Imphal"], "answer": "Agartala" },
    { "id": 26, "question": "What is the capital of Uttar Pradesh?", "options": ["Lucknow", "Agra", "Varanasi", "Kanpur"], "answer": "Lucknow" },
    { "id": 27, "question": "What is the capital of Uttarakhand?", "options": ["Haridwar", "Dehradun", "Nainital", "Rishikesh"], "answer": "Dehradun" },
    { "id": 28, "question": "What is the capital of West Bengal?", "options": ["Siliguri", "Darjeeling", "Kolkata", "Howrah"], "answer": "Kolkata" }
]
const timer = document.getElementById('timer')
const question = document.getElementById('question')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const result = document.getElementById('result')
const start = document.getElementById('start')
const review = document.getElementById('review')
const next = document.getElementById('skip')
const submit = document.getElementById('submit')
const options = document.querySelectorAll('.option')

let currentIndex = 0
const TIME = 20
let timerValue = TIME
let timerId
let score = 0
let attemptedQuestions = 0
let unansweredQuestions = data.length
let userSelections = []

function displayQuestion(index) {
    const questionText = data[index]
    question.innerHTML = questionText.question

    const questionOptions = questionText.options
    option1.innerHTML = questionOptions[0]
    option2.innerHTML = questionOptions[1]
    option3.innerHTML = questionOptions[2]
    option4.innerHTML = questionOptions[3]

    resetOptions()
}

function startTimer() {
    if (!timerId) {
        start.disabled = true
        timerId = setInterval(() => {
            if (timerValue > 0) {
                timerValue--
                timer.innerHTML = timerValue
            } else {
                clearInterval(timerId)
                timerId = null
                nextQuestion() // Automatically move to next question when timer ends
            }
        }, 1000)
    }
}

function nextQuestion() {
    clearInterval(timerId)
    if (currentIndex < data.length - 1) {
        currentIndex++
        timerValue = TIME
        timer.innerHTML = timerValue
        displayQuestion(currentIndex)
        startTimer()
    } else {
        clearInterval(timerId)
        result.innerHTML = `Quiz completed! Your final score is ${score}/${attemptedQuestions}`
        start.disabled = true
        next.disabled = true
        submit.disabled = true
        review.disabled = false // Enable the review button after quiz completion
    }
}

function resetOptions() {
    options.forEach(option => {
        option.style.backgroundColor = ''
        option.classList.remove('selected')
    })
}

function selectOption(option) {
    resetOptions()
    option.classList.add('selected')
    option.style.backgroundColor = 'lightblue'
}

options.forEach(option => {
    option.addEventListener('click', () => {
        selectOption(option)
    })
})

function checkAnswer() {
    const selectedOption = document.querySelector('.option.selected')
    if (selectedOption) {
        const selectedAnswer = selectedOption.innerHTML
        const correctAnswer = data[currentIndex].answer
        attemptedQuestions++
        userSelections[currentIndex] = selectedAnswer // Store user's selected answer
        if (selectedAnswer === correctAnswer) {
            score++
            selectedOption.style.backgroundColor = 'lightgreen'
        } else {
            selectedOption.style.backgroundColor = 'lightcoral'
        }
        unansweredQuestions--
    } else {
        userSelections[currentIndex] = null // No selection
    }
}

function displayReview() {
    // Clear any previous content in the question and options containers
    question.innerHTML = ''
    options.forEach(option => option.innerHTML = '')

    // Loop through all questions and display them for review
    data.forEach((q, i) => {
        const questionDiv = document.createElement('div')
        questionDiv.className = 'review-question'
        questionDiv.innerHTML = `<strong>Q${i + 1}:</strong> ${q.question}`

        const optionDiv = document.createElement('div')
        optionDiv.className = 'review-options'

        q.options.forEach(opt => {
            const optElem = document.createElement('div')
            optElem.innerHTML = opt

            if (opt === q.answer) {
                optElem.classList.add('correct') // Highlight correct answer
            }
            if (opt === userSelections[i] && opt !== q.answer) {
                optElem.classList.add('incorrect') // Highlight incorrect selection
            }
            if (userSelections[i] === null) {
                questionDiv.classList.add('unattempted') // Highlight unattempted questions
            }

            optionDiv.appendChild(optElem)
        })

        questionDiv.appendChild(optionDiv)
        question.appendChild(questionDiv)
    })

    result.innerHTML = `Review completed! Your final score is ${score}/${attemptedQuestions}`
}


start.addEventListener('click', () => {
    startTimer()
    displayQuestion(currentIndex)
    start.disabled = true
    review.disabled = true
})

next.addEventListener('click', () => {
    checkAnswer()
    nextQuestion()
})

submit.addEventListener('click', () => {
    checkAnswer()
    result.innerHTML = `Quiz submitted! Your final score is ${score}/${attemptedQuestions}`
    clearInterval(timerId)
    start.disabled = true
    next.disabled = true
    submit.disabled = true
    review.disabled = false // Enable the review button after submission
})

review.addEventListener('click', () => {
    displayReview()
})
