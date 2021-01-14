let user = function(name, email, pass,waigth,mobile, height ){
    this.name = name;
    this.email = email;
    this.password = pass;
    this.waigth = waigth;
    this.mobile =mobile;
    this.height = height;
};

function gotoAccount(){
    let logedUser = localStorage.getItem('logedUser');
    if(logedUser == null){
        let isConfirm = confirm('You are not log in, you need to login before');
        if(isConfirm){
            window.location.href='log.html';
        }
    }else{
        userAcountsArray = JSON.parse(logedUser);
        window.location.href='account.html';
    }
}

function logout(){
    let logedUser = localStorage.getItem('logedUser');
    if(logedUser == null){
        alert('You are not login');
    }else{
        let isConfirm = confirm('Are You Sure');
        if(isConfirm){
            localStorage.removeItem('logedUser');
            alert('Done!');
            window.location.href='index.html';
        }
    }
}