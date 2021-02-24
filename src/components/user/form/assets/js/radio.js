//This is sort of CSS-only; the JS below just sticks a span around each letter, so i can animate each independantly.
//(oh for an :nth-letter selector!)
const labels = document.querySelectorAll('.label');
labels.forEach(label => {
  const chars = label.textContent.split('');
  label.innerHTML = '';
  chars.forEach(char => {
    label.innerHTML += `<span>${char === ' ' ? '&nbsp' : char}</span>`;
  });
})
