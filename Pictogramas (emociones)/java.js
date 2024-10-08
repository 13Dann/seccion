document.querySelectorAll('.emotion').forEach(function(emotion) {
    emotion.addEventListener('click', function() {
      let emotionText = this.getAttribute('aria-label');
      // Función para reproducir audio de la emoción seleccionada
      let audio = new Audio(`audio/${emotionText}.mp3`);
      audio.play();
    });
  });
  