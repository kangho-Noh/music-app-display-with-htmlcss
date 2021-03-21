const signupForm  = document.querySelector(".js-signup-form"),
 signupId = signupForm.querySelector(".js-signup__id"),
 signupPw = signupForm.querySelector(".js-signup__pw"),
 signupBtn = signupForm.querySelector("button");

const cancelBtn = document.querySelector(".js-cancel-btn");

let users = []

function checkExistId(id){
    const nowUserList = localStorage.getItem("IDPW");
    if(nowUserList == null) return;
    const parsedNowUserList = JSON.parse(nowUserList);
    let isExist = false;
    for(i=0; i<parsedNowUserList.length;i++){
        if(parsedNowUserList[i].id == id){
            isExist=true;
        }
    }
    return isExist;
}

function clickHandler(event){
    event.preventDefault();
    const id = signupId.value;
    const pw = signupPw.value;
    if(id !="" && pw !="")
    {
        const IDPW = {
            id : id,
            pw : pw
        };
        
        if(checkExistId(id)){
            alert("이미 존재하는 아이디입니다");
            return;
        }else{
            saveUserList(IDPW);
        }
    }else{
        alert("빈 칸이 있는지 확인하세요")
    }
}
function saveUserList(IDPW){
    alert("회원가입 완료!");
    users.push(IDPW);
    localStorage.setItem("IDPW", JSON.stringify(users));
    hideSignUp();
}
function loadUsers(){
    
    const nowUserList = localStorage.getItem("IDPW");
    if(nowUserList == null) return;
    const parsedNowUserList = JSON.parse(nowUserList);
    for(i=0;i<parsedNowUserList.length;i++){
        users.push(parsedNowUserList[i]);
    }
}

function hideSignUp(){
    signupId.value = "";
    signupPw.value = "";
    signUpBox.classList.add("hiding");
}

function init(){
    loadUsers();
    signupBtn.addEventListener("click", clickHandler);
    cancelBtn.addEventListener("click", hideSignUp);
}
init();