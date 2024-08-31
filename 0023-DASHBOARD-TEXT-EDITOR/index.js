const text = document.getElementById('text');
const buttons = document.querySelectorAll('button');
const textColor = document.getElementById('textColor');
const fontSize = document.getElementById('fontSize');
const fontFamily = document.getElementById('fontFamily');
const fontWeight = document.getElementById('fontWeight');

// Handle Bold, Italic, and Underline
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const command = btn.id;
        document.execCommand(command, false, null);
    });
});

// Handle Text Color
textColor.addEventListener('input', () => {
    document.execCommand('foreColor', false, textColor.value);
});

// Handle Font Size
fontSize.addEventListener('change', () => {
    document.execCommand('fontSize', false, fontSize.value);
});

// Handle Font Family
// fontFamily.addEventListener('change', () => {
//     document.execCommand('fontName', false, fontFamily.value);
// });

fontFamily.addEventListener('change', () => {
    applyFontFamily(fontFamily.value);
});

function applyFontFamily(font) {
    const selectedText = window.getSelection();
    if (selectedText.rangeCount > 0) {
        const range = selectedText.getRangeAt(0);
        const span = document.createElement('span');
        span.style.fontFamily = font;
        range.surroundContents(span);
    }
}


// Handle Font Weight
fontWeight.addEventListener('change', () => {
    document.execCommand('bold', false, fontWeight.value === 'bold' ? true : false);
});
