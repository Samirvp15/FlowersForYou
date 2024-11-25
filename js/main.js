
onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name') || 'Mari'; // Si no hay nombre, usa "Mari" como valor predeterminado

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Obtener el día usando Intl.DateTimeFormat
    const diaSemana = new Intl.DateTimeFormat('es', { weekday: 'long' }).format(new Date());

    // Capitalizar primera letra y concatenar con "Feliz"
    const diaCapitalizado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    const titles = (`Feliz ${diaCapitalizado} ${name}`).split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};


/*onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    
    // Obtener el día usando Intl.DateTimeFormat
    const diaSemana = new Intl.DateTimeFormat('es', { weekday: 'long' })
                         .format(new Date());
    
    // Capitalizar primera letra y concatenar con "Feliz"
    const diaCapitalizado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    const titles = (`Feliz ${diaCapitalizado} Mari`).split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};*/

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Función para cambiar el color de los tallos (la que ya teníamos)
function changeGradient() {
  const flowerLines = document.querySelectorAll('.flower__line');
  const leaf = document.querySelectorAll('.flower__line__leaf ');
  
  const opacity1 = Math.random().toFixed(2);
  const opacity2 = Math.random().toFixed(2);
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  
  flowerLines.forEach(line => {
    const newGradient = `linear-gradient(to left, rgba(0, 0, 0, ${opacity1}), transparent, rgba(255, 255, 255, ${opacity2})), linear-gradient(to top, transparent 10%, ${color1}, ${color2})`;
    line.style.backgroundImage = newGradient;
  });

  leaf.forEach(line => {
    const newGradient = `linear-gradient(to top, rgba(255, 255, 255, ${opacity2}), ${color2})`;
    line.style.backgroundImage = newGradient;
  });





}

// Función para cambiar el color de las hojas
function changeLeaves() {
  const leaves = document.querySelectorAll('.flower__leaf');
  const baseColor = getRandomColor();
  const highlightColor = getRandomColor();
  
  leaves.forEach(leaf => {
    leaf.style.backgroundColor = baseColor;
    leaf.style.backgroundImage = `linear-gradient(to top, ${baseColor}, ${highlightColor})`;
    // Mantener el efecto de brillo
    leaf.style.boxShadow = `inset 0 0 2vmin rgba(255, 255, 255, 0.5)`;
  });
}

// Función para cambiar el fondo
function changeBackground() {
  const night = document.querySelector('.night');
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  
  const newGradient = `
    radial-gradient(ellipse at top, transparent 0%, var(--dark-color)),
    radial-gradient(ellipse at bottom, var(--dark-color), ${color1}),
    repeating-linear-gradient(220deg, ${color2} 0px, ${color2} 19px, transparent 19px, transparent 22px),
    repeating-linear-gradient(189deg, ${color2} 0px, ${color2} 19px, transparent 19px, transparent 22px),
    repeating-linear-gradient(148deg, ${color2} 0px, ${color2} 19px, transparent 19px, transparent 22px),
    linear-gradient(90deg, ${color3}, ${getRandomColor()})
  `;
  
  night.style.backgroundImage = newGradient;
}

// Agregar event listeners a los botones
document.getElementById('changeGradientBtn').addEventListener('click', changeGradient);
document.getElementById('changeLeavesBtn').addEventListener('click', changeLeaves);
document.getElementById('changeBackgroundBtn').addEventListener('click', changeBackground);