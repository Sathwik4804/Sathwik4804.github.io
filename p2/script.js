const showLogin = () => {
    let str=`
    <div class="App-Container">
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick="showHome()">Log In</button></p>
    <p><button onclick="showRegister()">Create Account</button></p>
    </div>
    `
    root.innerHTML=str
}

const showRegister = () =>{
    let str=`
    <div class="App-Container">
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button>Register</button>
    </div>
    `
    root.innerHTML=str
}

const showHome = () =>{
    let str=`
    <div class="Welcome">
    <h1>Welcome to the website</h1>
    <div>
    `
    root.innerHTML=str
}
