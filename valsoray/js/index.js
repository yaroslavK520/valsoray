const btn = document.getElementById('id');

btn.addEventListener(btn, (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('text').value;

  let body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> Message: ' + message;  

  Email.send({
    SecureToken : "023c1e31-e4ec-40a7-a0f4-0f87fb267d9b",
    To : 'yaroslavkelemen14@gmail.com',
    From : "yaroslav.project1@gmail.com",
    Subject : "Contact message",
    Body : body
  }).then(
    message => alert(message)
  );
});