const users = [
    {
      login: 'admin', //логин и пароль админа
      password: '123'
    },
    {
      login: 'user', //логин и пароль обычного юзера
      password: '123'
    }
  ];

  const loginForm = document.querySelector('form');
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const login = document.querySelector('input[name="login"]').value;
    const password = document.querySelector('input[name="password"]').value;
  
    const user = users.find(user => user.login === login && user.password === password);
  
    if (user) {
      alert('Вход выполнен успешно!');
      window.location.href = 'home/home.html';
    } else {
      alert('Неверный логин или пароль');
    }
  });