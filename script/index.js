import { radioPlayerInit } from './radioPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';

// Get elements from page
const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');
const videoPlayer = document.querySelector('.video-player');
const radioPlayer = document.querySelector('.radio-player');
const audioPlayer = document.querySelector('.audio-player');
//-----------------------------------------------------------------

const deactivationPlayer = () => {
  playerBtn.forEach((item) => {
    item.classList.remove('active');
  });
  playerBlock.forEach((item) => {
    item.classList.remove('active');
  });
  temp.style.display = 'none';
};

playerBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    deactivationPlayer();
    btn.classList.add('active');
    playerBlock[index].classList.add('active');
    if (
      playerBlock[1].classList.contains('active') ||
      playerBlock[2].classList.contains('active')
    ) {
      videoPlayer.pause();
    }
    if (
      playerBlock[0].classList.contains('active') ||
      playerBlock[2].classList.contains('active')
    ) {
      audioPlayer.pause();
    }
    if (
      playerBlock[0].classList.contains('active') ||
      playerBlock[1].classList.contains('active')
    ) {
      radioPlayer.pause();
    }
  });
});

radioPlayerInit();
videoPlayerInit();
musicPlayerInit();
