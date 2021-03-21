const loginForm = document.querySelector(".js-login-form"),
loginID = loginForm.querySelector(".js-login__id"),
loginPW = loginForm.querySelector(".js-login__pw");

function submitHandler(event){
    const inputID = loginID.value;
    const inputPW = loginPW.value;
    const userList = localStorage.getItem("IDPW");
    if(userList!==null){
        const parsedUserList = JSON.parse(userList);
        let existID = false;
        let loggedIn = false;
        for(i=0;i<parsedUserList.length;i++){
            if(parsedUserList[i].id == inputID){
                existID = true;
                if(parsedUserList[i].pw == inputPW){
                    loggedIn=true;
                    /*사이트 이동*/
                    /* setTimeout 사용하지 않으면 리다이렉팅 안됨. 이유는 비동기적 실행? */
                    setTimeout(function(){document.location.href = "musicapp.html"},500);
                    break;
                }
            }
        }
        if(existID && !loggedIn)
        {
            alert("비밀번호가 올바르지 않습니다.")
        }
        else if(!existID){
            alert("존재하지 않는 아이디입니다.")
        }
    }
}

function init(){
    loginForm.addEventListener("submit", submitHandler);
}

init();

