

// const text = document.getElementById('text');
// const convertor = document.getElementById('convertor');
// const fast = document.getElementById('fast');
// const faster = document.getElementById('faster');
// const slower = document.getElementById('slower');
// const download = document.getElementById('download');

// function textToVoice(rate) {
//     const synth = window.speechSynthesis;
//     let texts = text.value.trim();
//     const utterThis = new SpeechSynthesisUtterance(texts);
//     utterThis.lang = 'hi';
//     utterThis.rate = rate;

//     synth.speak(utterThis);
// }

// // Define event handlers with the appropriate rate
// convertor.addEventListener('click', () => textToVoice(1));
// fast.addEventListener('click', () => textToVoice(5));
// faster.addEventListener('click', () => textToVoice(10));
// slower.addEventListener('click', () => textToVoice(0.5));


// ********************************************************************

// const text = document.getElementById('text');
// const convertor = document.getElementById('convertor');
// const fast = document.getElementById('fast');
// const faster = document.getElementById('faster');
// const slower = document.getElementById('slower');
// const download = document.getElementById('download');

// const textToVoice = (rate) => {
//     const synth = window.speechSynthesis
//     let texts = text.value.trim()

//     let utterance = new SpeechSynthesisUtterance(texts)

//     utterance.lang = 'hi'
//     utterance.rate = rate

//     synth.speak(utterance)


// }

// convertor.addEventListener('click', textToVoice(1))

// fast.addEventListener('click', () => textToVoice(5));
// faster.addEventListener('click', () => textToVoice(10));
// slower.addEventListener('click', () => textToVoice(0.5));




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const text = document.getElementById('text');
const convertor = document.getElementById('convertor');
const fast = document.getElementById('fast');
const faster = document.getElementById('faster');
const slower = document.getElementById('slower');
const download = document.getElementById('download');


const textToVoice = (rate) => {
    const texts = text.value.trim()
    let synth = window.speechSynthesis

    let utterance = new SpeechSynthesisUtterance(texts)

    utterance.lang = 'hi'
    utterance.rate = rate
}

convertor.addEventListener('click', textToVoice(1))

fast.addEventListener('click', () => textToVoice(5));
faster.addEventListener('click', () => textToVoice(10));
slower.addEventListener('click', () => textToVoice(0.5));
