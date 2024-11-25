const title = document.querySelector('.title')
const text = ' Tengo algo para ti  ...'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});


const openButton = document.getElementById('openButton');
const nameInput = document.getElementById('nameInput');

openButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    // Redirigir con el nombre como parámetro de URL
    window.location.href = `flower.html?name=${encodeURIComponent(name)}`;
  } else {
    alert('Por favor, ingresa tu nombre.');
  }
});