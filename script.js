const sounds = ['sound1', 'sound2', 'sound3']; // Add your sound file names here (without .mp3)

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

const stopButton = document.createElement('button');
stopButton.classList.add('stop');
stopButton.innerText = 'Stop';

stopButton.addEventListener('click', () => {
  stopSounds();
});

buttonsContainer.appendChild(stopButton);

function stopSounds() {
  document.querySelectorAll('audio').forEach(a => a.pause());
  sounds.forEach(sound => {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.pause();
    audio.currentTime = 0;
  });
}

