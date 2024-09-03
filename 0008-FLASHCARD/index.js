const data = [
    {
        "id": 1,
        "question": "What is the capital of Andhra Pradesh?",
        "answer": "Amaravati"
    },
    {
        "id": 2,
        "question": "What is the capital of Arunachal Pradesh?",
        "answer": "Itanagar"
    },
    {
        "id": 3,
        "question": "What is the capital of Assam?",
        "answer": "Dispur"
    },
    {
        "id": 4,
        "question": "What is the capital of Bihar?",
        "answer": "Patna"
    },
    {
        "id": 5,
        "question": "What is the capital of Chhattisgarh?",
        "answer": "Raipur"
    },
    {
        "id": 6,
        "question": "What is the capital of Goa?",
        "answer": "Panaji"
    },
    {
        "id": 7,
        "question": "What is the capital of Gujarat?",
        "answer": "Gandhinagar"
    },
    {
        "id": 8,
        "question": "What is the capital of Haryana?",
        "answer": "Chandigarh"
    },
    {
        "id": 9,
        "question": "What is the capital of Himachal Pradesh?",
        "answer": "Shimla"
    },
    {
        "id": 10,
        "question": "What is the capital of Jharkhand?",
        "answer": "Ranchi"
    },
    {
        "id": 11,
        "question": "What is the capital of Karnataka?",
        "answer": "Bengaluru"
    },
    {
        "id": 12,
        "question": "What is the capital of Kerala?",
        "answer": "Thiruvananthapuram"
    },
    {
        "id": 13,
        "question": "What is the capital of Madhya Pradesh?",
        "answer": "Bhopal"
    },
    {
        "id": 14,
        "question": "What is the capital of Maharashtra?",
        "answer": "Mumbai"
    },
    {
        "id": 15,
        "question": "What is the capital of Manipur?",
        "answer": "Imphal"
    },
    {
        "id": 16,
        "question": "What is the capital of Meghalaya?",
        "answer": "Shillong"
    },
    {
        "id": 17,
        "question": "What is the capital of Mizoram?",
        "answer": "Aizawl"
    },
    {
        "id": 18,
        "question": "What is the capital of Nagaland?",
        "answer": "Kohima"
    },
    {
        "id": 19,
        "question": "What is the capital of Odisha?",
        "answer": "Bhubaneswar"
    },
    {
        "id": 20,
        "question": "What is the capital of Punjab?",
        "answer": "Chandigarh"
    },
    {
        "id": 21,
        "question": "What is the capital of Rajasthan?",
        "answer": "Jaipur"
    },
    {
        "id": 22,
        "question": "What is the capital of Sikkim?",
        "answer": "Gangtok"
    },
    {
        "id": 23,
        "question": "What is the capital of Tamil Nadu?",
        "answer": "Chennai"
    },
    {
        "id": 24,
        "question": "What is the capital of Telangana?",
        "answer": "Hyderabad"
    },
    {
        "id": 25,
        "question": "What is the capital of Tripura?",
        "answer": "Agartala"
    },
    {
        "id": 26,
        "question": "What is the capital of Uttar Pradesh?",
        "answer": "Lucknow"
    },
    {
        "id": 27,
        "question": "What is the capital of Uttarakhand?",
        "answer": "Dehradun"
    },
    {
        "id": 28,
        "question": "What is the capital of West Bengal?",
        "answer": "Kolkata"
    }
]

// const question = document.getElementById('question')
// const answer = document.getElementById('answer')
// const next = document.getElementById('next')
// const review = document.getElementById('review')
// const answerContainer = document.getElementById('answer-container')

// let currentIndex = 0
// function showData(index) {
//     const flashcard = data[index]
//     question.innerHTML = flashcard.question
//     answer.innerHTML = flashcard.answer
//     answerContainer.style.display = 'none'


// }

// review.addEventListener('click', () => {
//     answerContainer.style.display = 'block'

// })

// next.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % data.length
//     showData(currentIndex)


// })

// showData(currentIndex)

// ************************************************************


// const question = document.getElementById('question')
// const answer = document.getElementById('answer')
// const next = document.getElementById('next')
// const review = document.getElementById('review')
// const answerContainer = document.getElementById('answer-container')

// let currentIndex = 0
// function showQuestion(index) {
//     let quizData = data[index]
//     let questionData = quizData.question
//     let answerData = quizData.answer
//     let questionId = quizData.id

//     question.innerHTML = questionData
//     answer.innerHTML = answerData


// }


// next.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % (data.length)
//     showQuestion(currentIndex)
//     answerContainer.style.display = 'none'


// })



// review.addEventListener('click', () => {
//     showQuestion(currentIndex)
//     answerContainer.style.display = 'block'
// })
// showQuestion(currentIndex)

// *******************************************************************

// const question = document.getElementById('question')
// const answer = document.getElementById('answer')
// const next = document.getElementById('next')
// const review = document.getElementById('review')
// const answerContainer = document.getElementById('answer-container')


// let currentIndex = 0

// function showQuestion(index) {
//     question.innerHTML = data[index].question
//     answer.innerHTML = data[index].answer
// }

// next.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % data.length
//     showQuestion(currentIndex)
//     answerContainer.style.display = 'none'
// })

// review.addEventListener('click', () => {
//     answerContainer.style.display = 'block'

// })

// showQuestion(currentIndex)











// **************************************************************


const question = document.getElementById('question')
const answer = document.getElementById('answer')
const next = document.getElementById('next')
const review = document.getElementById('review')
const answerContainer = document.getElementById('answer-container')

let currentIndex = 0


const showQuestion = (index) => {
    let questionData = data[index].question
    let answerData = data[index].answer

    question.innerHTML = questionData
    answer.innerHTML = answerData



}

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % (data.length)
    showQuestion(currentIndex)

    answerContainer.style.display = 'none'
})

review.addEventListener('click', () => {
    answerContainer.style.display = 'block'
})







showQuestion(currentIndex)