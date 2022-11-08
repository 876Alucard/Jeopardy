const introScreen = document.querySelector('.intro');
const faceOffScreen = document.querySelector('.faceoff');
const playButton = document.querySelector('.intro button');
function playGame(){
    // Fade in game from intro:
    playButton.addEventListener('click', () =>
    {
        introScreen.classList.add('fadeOut');
        faceOffScreen.classList.add('fadeIn');
    });
    //go to form screen
    playButton.addEventListener('click', () =>
    {
        faceOffScreen.classList.add('fadeOut');
        formScreen.classList.add('fadeIn');
    });
}
playGame();



//create a register function to accept user input from the form
function register() {
    //get the user input from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var country = document.getElementById("country").value;
    var dob = document.getElementById("dob").value;
    
    //create a new user object
    var user = {
        username: username,
        password: password,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        zip: zip,
        country: country,
        dob: dob
    };
    //store the user object in local storage
    localStorage.setItem("user", JSON.stringify(user));
    //append the validated content to a global JavaScript array called PlayersData[]
    PlayersData.push(user);
    //redirect the user to the login page
    window.location.href = "login.html";
}
//After the Register button is clicked, all the fields above and Register button must be disabled
function disable() {
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("city").disabled = true;
    document.getElementById("state").disabled = true;
    document.getElementById("zip").disabled = true;
    document.getElementById("country").disabled = true;
    document.getElementById("dob").disabled = true;
    document.getElementById("register").disabled = true;
}