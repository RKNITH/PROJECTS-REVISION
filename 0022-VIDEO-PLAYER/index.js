const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const currentTimeText = document.getElementById('currentTime');
const durationText = document.getElementById('duration');
const muteBtn = document.getElementById('muteBtn');
const volumeBar = document.getElementById('volumeBar');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Array of video sources
const videoSources = [
    'video/1.mp4',
    'video/2.mp4',
    'video/3.mp4'
];

let currentVideoIndex = 0;

// Load the first video
loadVideo(currentVideoIndex);

playPauseBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

videoPlayer.addEventListener('timeupdate', () => {
    const progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    seekBar.value = progress;

    let minutes = Math.floor(videoPlayer.currentTime / 60);
    let seconds = Math.floor(videoPlayer.currentTime - minutes * 60);
    currentTimeText.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

seekBar.addEventListener('input', () => {
    const seekTime = (seekBar.value / 100) * videoPlayer.duration;
    videoPlayer.currentTime = seekTime;
});

videoPlayer.addEventListener('loadedmetadata', () => {
    let minutes = Math.floor(videoPlayer.duration / 60);
    let seconds = Math.floor(videoPlayer.duration - minutes * 60);
    durationText.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

muteBtn.addEventListener('click', () => {
    videoPlayer.muted = !videoPlayer.muted;
    muteBtn.textContent = videoPlayer.muted ? 'Unmute' : 'Mute';
});

volumeBar.addEventListener('input', () => {
    videoPlayer.volume = volumeBar.value;
});

fullscreenBtn.addEventListener('click', () => {
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
        videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
        videoPlayer.msRequestFullscreen();
    }
});

// Play the next video in the array when the current one ends
videoPlayer.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    loadVideo(currentVideoIndex);
    videoPlayer.play();
});

// Function to load a video by index
function loadVideo(index) {
    videoPlayer.src = videoSources[index];
    videoPlayer.load();
}
