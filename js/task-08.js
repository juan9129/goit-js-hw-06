const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (!email || !password) { 
    alert('Todos los espacios deben ser rellenados.');
    return;
  }
  
  const data = { 
    email,
    password,
  };
  
  console.log(data); 
  form.reset(); 
});