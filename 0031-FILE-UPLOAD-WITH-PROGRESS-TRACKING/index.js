const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('file');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const uploadStatus = document.getElementById('uploadStatus');

uploadForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    // Simulate file upload progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + '%';
        progressText.textContent = progress + '%';

        if (progress >= 100) {
            clearInterval(interval);
            uploadStatus.textContent = 'File uploaded successfully!';
        }
    }, 200);
});
