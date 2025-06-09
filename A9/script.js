const users = [];
let user={}
const showLogin = () => {
  let str = `
    <div>
    <h1>Login Form</h1>
    <p><div id="dvMsg"></div></p>
    <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPass" placeholder="Password"></p>
    <p><button onclick='validateUser()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `;
  root.innerHTML = str;
};

const showRegister = () => {
  let str = `
    <h1>Register Form</h1>
    <p><input type="text" id="txtName" placeholder="Name"></p>
     <p><input type="text" id="txtEmail" placeholder="Email"></p>
    <p><input type="password" id="txtPass" placeholder="Password"></p>
    <button onclick='addUser()'>Register</button>
    <hr>
    <button onClick='showLogin()'>Alread a Member? Login here...</button>
    `;
  root.innerHTML = str;
};

const showHome = (msg = "") => {
  let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <div id="dvMsg" style="color: green;">${msg}</div>
    <p><select id="action">
     <option value=0>--select--</option>
      <option value=1>Deposit</option>
      <option value=2>Withdraw</option>
    </select></p>
    <p>
      <input type='number' id='txtAmount'>
    </p>
    <p>
      <button onclick="Transaction()">Submit</button>
      <button onclick='showLogin()'>Logout</button>
    </p>
    <hr>
    <p>Current balance: ${user.balance}</p>
  `;
  root.innerHTML = str;
};


const addUser = () => {
  const obj = {
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    pass: document.getElementById("txtPass").value,
    balance:0
  };
  users.push(obj);
  showLogin();
};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
   user = users.find(
    (e) => e.email === email && e.pass === pass
  )
  if (user) {
    showHome();
  } else {
    dvMsg.innerHTML = "Access Denied";
  }
};

const Transaction = () => {
  let amount = Number(document.getElementById("txtAmount").value);
  let type = document.getElementById("action").value;
  let msg = "";

  if (type === "1") {
    user.balance += amount;
    msg = "Deposit successful!";
  } else if (type === "2") {
    if (user.balance >= amount) {
      user.balance -= amount;
      msg = "Withdrawal successful!";
    } else {
      msg = "Insufficient balance.";
    }
  } else {
    msg = "Please select a valid action.";
  }

  showHome(msg);
};
