const moodSelector = document.getElementById('moodSelector');
const emoji = document.getElementById('emoji');
const phrase = document.getElementById('phrase');
const body = document.body;

const moods = {
  feliz: {
    emoji: '😄',
    phrase: '¡Hoy es un gran día para sonreír!',
    bg: 'linear-gradient(to right, #fbd786, #f7797d)'
  },
  triste: {
    emoji: '😢',
    phrase: 'Está bien sentirse triste. Tómate tu tiempo.',
    bg: 'linear-gradient(to right, #4b6cb7, #182848)'
  },
  estresado: {
    emoji: '😖',
    phrase: 'Respira hondo. Todo pasa.',
    bg: 'linear-gradient(to right, #ff6a00, #ee0979)'
  },
  enamorado: {
    emoji: '😍',
    phrase: 'El amor está en el aire 💕',
    bg: 'linear-gradient(to right, #ff758c, #ff7eb3)'
  },
  curioso: {
    emoji: '🧐',
    phrase: 'La curiosidad es el primer paso del conocimiento.',
    bg: 'linear-gradient(to right, #56ccf2, #2f80ed)'
  }
};

moodSelector.addEventListener('change', () => {
  const selectedMood = moodSelector.value;
  if (moods[selectedMood]) {
    emoji.textContent = moods[selectedMood].emoji;
    phrase.textContent = moods[selectedMood].phrase;
    body.style.background = moods[selectedMood].bg;
  } else {
    emoji.textContent = '🤔';
    phrase.textContent = 'Tu estado aparecerá aquí.';
    body.style.background = 'linear-gradient(to right, #8e2de2, #4a00e0)';
  }
});
