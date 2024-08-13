const button = document.getElementById('btn');
const body = document.querySelector('body');

button.addEventListener('click', () => {
    if (body.style.backgroundColor === 'red') {
        body.style.backgroundColor = 'pink';
    } else {
        body.style.backgroundColor = 'red';
    }
});
