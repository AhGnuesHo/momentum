const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");

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
    showLogout();
}

function PaintGreeting(username) {
    const date = new Date();
    const hours = date.getHours();
    if (hours <= 11){
      greeting.innerText = `Good Moring ${username} !!`;
    } else if(hours >= 12 && hours <= 18){
      greeting.innerText = `Good Afternoon ${username} !!`;
    } else {
      greeting.innerText = `Good Night ${username} !!`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로그아웃 버튼 
function showLogout(){
    //로그아웃 버튼 노출
    logoutButton.classList.remove(HIDDEN_CLASSNAME);
    logoutButton.addEventListener("click", logout);
}

function logout(){
  localStorage.clear();
  location.reload();
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
    showLogout();
}



