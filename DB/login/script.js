let server = new URL(location)
server.port = 8080

let msg = document.getElementById('msg')
window.onclick = () => {
    if (msg.style.display == "block") {
        msg.style.display = "none";
    }
}

let form = document.getElementById("login_form")

form.onsubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(form)
    let jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });
    server.pathname = '/api/login';
    fetch(server, {
        method: "POST",
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(jsonData)
    }).then((res) => {
        return res.json()
    }).then((data) => {
        if (data.status != 'success') {
            console.log(data);
            msg.style.display = "block";
            msg.innerText = data.msg;
            return;
        }
        localStorage.setItem('auth_token', data.auth_token)

        window.location = '/'


    })
}