export function initSubscribe() {
let subscribeButton = document.querySelector('.subscribe__button');
subscribeButton.onclick = function (e) {
    e.preventDefault();
    let emailInput = document.querySelector('.subscribe__formField');
    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    document.querySelector('.subscribe__message').innerHTML = "";
    if (pattern.test(emailInput.value) == true) {
        document.querySelector('.subscribe__message').innerHTML = "Thank you! You're successfully subscribed";
        sendEmail();
    } else {
        document.querySelector('.subscribe__message').innerHTML = "Please provide valid email!"
    }
}

let sendEmail = () => {
    let json = {
        email: document.querySelector('.subscribe__formField'),
        subscription: true,
    }

    fetch("https://httpbin.org/post", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(json)
        })
        .then(response => console.log(response.json()))
        .catch(error => console.log(error));
};
}