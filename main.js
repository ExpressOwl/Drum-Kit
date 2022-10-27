function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops function from running
    audio.currentTime = 0; //Rewinds to the start so we can spam it.
    audio.play();
    key.classList.add('playing');
  };


function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip if not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);