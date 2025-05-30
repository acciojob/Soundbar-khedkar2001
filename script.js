const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']; // Match your sound file names

const buttonsContainer = document.getElementById('buttons');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  const audio = new Audio(`sounds/${sound}.mp3`);

  btn.addEventListener('click', () => {
    stopSounds();
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';

stopBtn.addEventListener('click', stopSounds);

buttonsContainer.appendChild(stopBtn);

function stopSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
