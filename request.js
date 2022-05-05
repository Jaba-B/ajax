export function sendRequest(email) {
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:8080/subscribe', true);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'Application/json');
    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
    };
    xhr.onerror = (error) => { console.log(error); };
    xhr.send(email);
}