const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;

    if (!email.value.trim() || !password.value.trim()) {
        return alert("Please fill in all the fields!");
    } else {
        const formData = {
            email: email.value,
            password: password.value
        };
        console.log(formData);
        e.currentTarget.reset();
    }
}

/*метод 2
loginForm.addEventListener("submit", submitHandler);
const profile = {};

function submitHandler(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    } else {
        profile.email = email.value;
        profile.password = password.value;

        console.log(profile);
    }
    event.currentTarget.reset();
}*/
