let form = document.getElementById('edit-form');
let divEdit = document.getElementById('edit-div');
let userDate = JSON.parse(localStorage.getItem('logedUser'));
let isMached;
window.onload = function(){
    console.log(userDate);
    isMached = true;
    divEdit.style.display = 'none';
    document.getElementById('waight').textContent = userDate.waigth;
    document.getElementById('height').textContent = userDate.height;
    document.getElementById('name').textContent = userDate.name;
    document.getElementById('email').textContent = userDate.email;
    document.getElementById('mobile').textContent = userDate.mobile;
}

function updateTheDate(event){
    divEdit.style.display = 'block';
    document.getElementById('edit-botton').style.display = 'none';
    document.getElementById('email-input').value = userDate.email;
    document.getElementById('name-input').value = userDate.name;
    document.getElementById('psw-input').value = userDate.password;
    document.getElementById('psw-repeat-input').value = userDate.password;
    document.getElementById('waight-input').value = userDate.waigth;
    document.getElementById('height-input').value = userDate.height;
    document.getElementById('mobile-input').value = userDate.mobile;
}

form.addEventListener('submit',editData);

function editData(event){
    event.preventDefault();
    if(isMached == false){
        alert('the Password && Repeat Password Are Not Mach');
        return;
    }
    let usersArray = JSON.parse(localStorage.getItem('AllUserArray'));
    for(var i = 0 ;  usersArray.length; i++){
        console.log(usersArray[i])
        if(usersArray[i].name == userDate.name){
            userDate = new user(event.target.name.value,event.target.email.value ,event.target.psw.value, event.target.waight.value,event.target.mobile.value,event.target.height.value);
            usersArray[i] = userDate;
            localStorage.setItem("AllUserArray",JSON.stringify(usersArray));
            localStorage.setItem("logedUser",JSON.stringify(userDate));
            document.getElementById('waight').textContent = userDate.waigth;
            document.getElementById('height').textContent = userDate.height;
            document.getElementById('name').textContent = userDate.name;
            document.getElementById('email').textContent = userDate.email;
            document.getElementById('mobile').textContent = userDate.mobile;
            return;
        }
    }
}

function hideForm(){
    divEdit.style.display = 'none';
    document.getElementById('edit-botton').style.display = 'block';
    document.getElementById('edit-botton').style.margin = 'auto';
}
function repPassword(){
    let password = document.getElementById('psw-input').value;
    let pswRepeat = document.getElementById('psw-repeat-input').value;
    if(password != pswRepeat){
        document.getElementById('erorr-message').style.display = 'block';
        isMached = false;
    }else{
        document.getElementById('erorr-message').style.display = 'none';
        isMached = true;
    }
}

