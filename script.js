const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const content = document.getElementById('content');
const throwButton = document.getElementById('throwTomato');
const players = [
  { id: 'fourth', prob: 0.5 },
  { id: 'third', prob: 0.3 },
  { id: 'second', prob: 0.2 }
]; // Eliminamos el primer lugar de los posibles objetivos

// Mostrar pop-ups secuenciales
setTimeout(() => {
  popup1.classList.add('hidden');
  popup2.classList.remove('hidden');
}, 5000);

setTimeout(() => {
  popup2.classList.add('hidden');
  content.style.display = 'block';
}, 10000);

// Lógica para lanzar manchas de tomate
throwButton.addEventListener('click', () => {
  const random = Math.random();
  let cumulative = 0;

  for (const player of players) {
    cumulative += player.prob;
    if (random <= cumulative) {
      const target = document.getElementById(player.id);
      const tomato = document.createElement('div');
      tomato.classList.add('tomato');

      // Posicionar la mancha de forma aleatoria dentro del contenedor
      const randomX = Math.random() * 80; // Evitar bordes
      const randomY = Math.random() * 80; // Evitar bordes
      tomato.style.left = `${randomX}%`;
      tomato.style.top = `${randomY}%`;
      tomato.style.setProperty('--random-rotation', Math.random()); // Rotación aleatoria

      target.appendChild(tomato);
      break; // Solo se lanza un tomate por clic
    }
  }
});
