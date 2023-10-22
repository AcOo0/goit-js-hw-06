const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) { 
    event.preventDefault();    
    const {email, password} = event.currentTarget.elements;
    
    const user = {
        email: email.value,
        password: password.value,
    };

    if (email.value === '' || password.value === '') {
        alert('Ой! Щось пішло не так! Ви точно заповнили всі поля?')
    } else { 
        console.log(user);
        alert('Дякую. Віші дані прийняті. Залишайтесь на місці, за Вами вже виїхали.');
    };

    event.currentTarget.reset();
};
