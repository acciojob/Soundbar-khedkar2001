const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

sounds.forEach(sound => {
  // Create <audio> element
  const audio = document.createElement('audio');
  audio.setAttribute('id', sound);
  audio.setAttribute('src', `sounds/${sound}.mp3`);
  document.body.appendChild(audio); // Add to DOM for Cypress

  // Create sound button
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopAllAudio();
    audio.currentTime = 0;
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Create STOP button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';

stopBtn.addEventListener('click', stopAllAudio);
buttonsContainer.appendChild(stopBtn);

// Helper to stop all audios
function stopAllAudio() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}
