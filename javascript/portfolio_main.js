// Expand cards on click
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    projectCards.forEach(c => {
      if (c !== card) {
        c.classList.remove('active');
      }
    });
    card.classList.toggle('active');
  });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const  message = document.getElementById('message').value.trim();
  const response = document.getElementById('formResponse');

  if (name && email && message) {
    response.textContent = `Thanks, ${name}! I'll reach out to you at ${email}.`
    response.style.color = 'green';
    this.reset();
  } else {
    response.textContent = 'Please fill out all fields.';
    response.style.color = 'red';
  }
});