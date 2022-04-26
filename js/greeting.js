const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "username";

const savedUsername = localStorage.getItem(USER_NAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    // 유저이름 스토리지에 저장
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USER_NAME_KEY, username);
    PaintGreeting(username);
}

function PaintGreeting(username) {
    greeting.innerText = `Hello ${username} !!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    // greeting
    // 유저이름을 제목에 표시
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // 로그인 submit이벤트 추가
    // Login-form에 submit이 발생
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    // hello username
    PaintGreeting(savedUsername);
}




