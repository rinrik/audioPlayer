export const radioPlayerInit = () => {
  //elements
  const radio = document.querySelector('.radio');
  const radioPlayer = document.querySelector('.radio-player');
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioNavigation = document.querySelector('.radio-navigation');
  const radioHeaderBig = document.querySelector('.radio-header__big');
  const radioItem = document.querySelectorAll('.radio-item');
  const radioStop = document.querySelector('.radio-stop');
  const radioVolume = document.querySelector('.radio-volume');
  const volumeDown = document.querySelector('.fa-volume-down');
  const volumeUp = document.querySelector('.fa-volume-up');

  const audio = new Audio();
  audio.type = 'audio/aac';

  radioStop.disabled = true;

  const changeIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove('play');
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-stop');
    } else {
      radio.classList.add('play');
      radioStop.classList.add('fa-stop');
      radioStop.classList.remove('fa-play');
    }
  };

  const selectItem = (element) => {
    radioItem.forEach((item) => item.classList.remove('select'));
    element.classList.add('select');
  };

  radioNavigation.addEventListener('change', (event) => {
    const target = event.target;
    const parent = target.closest('.radio-item');
    selectItem(parent);

    const title = parent.querySelector('.radio-name').textContent;

    radioHeaderBig.textContent = title;

    const urlImg = parent.querySelector('.radio-img').src;

    radioCoverImg.src = urlImg;

    radioPlayer.volume = radioVolume;

    radioStop.disabled = false;
    audio.src = target.dataset.radioStantion;
    audio.play();
    changeIconPlay();
  });

  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeIconPlay();
  });

  radioVolume.addEventListener('input', () => {
    radioPlayer.volume = radioVolume.value;
  });

  volumeDown.addEventListener('click', () => {
    radioPlayer.volume = radioVolume - 10;
  });
};
