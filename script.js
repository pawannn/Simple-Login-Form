database = [
    {
        username : "test",
        password : "test"
    }
];

function login(e){
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var found = false;
    if(username == '' || password == ''){
        alert('Please fill all the fields');
        return false;
    }
    else{
        for(var i = 0; i < database.length; i++){
            if(username == database[i].username && password == database[i].password){
                found = true;
                break;
            }
        }
    }
    if(found){
        alert('Login successful');
        localStorage.setItem("user", username);
        window.location.href = "home.html";
        document.loginform.reset();
        return true;
    }
    else{
        alert('Login Failed');
        document.loginform.reset();
        return false;
    }
}

loginuser = document.loginform;
loginuser.addEventListener("submit", login, false);