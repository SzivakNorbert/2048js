//query selectorok
const titleText = document.querySelector('.title-text');
const gameButton = document.querySelector('.game-button');
const game = document.querySelector('.game');
const loginResp = document.querySelector('.login-resp');
const regResp = document.querySelector('.reg-resp');
const regButton = document.querySelector('.register-button');
const regMenuButton = document.querySelector('.register-menu-button');
const h2Element = document.querySelector("h2");
const logButton = document.querySelector('.login-button');
const backButton = document.querySelector('.back-button');
document.querySelector('form').onsubmit = function() {
    login();
    return false;    
};


//kezdőképernyő még nem fontos gombjainak láthatatlanná tétele
regButton.style.display = 'none';
backButton.style.display = 'none';
gameButton.style.display = 'none';

//Jelszó validálás
function validatePassword() {   
    const password = document.getElementById('password').value;
       const numberPattern = /\d/;
       const specialCharPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

       //számok vizsgálata
       if (!numberPattern.test(password)) {
           alert('A jelszónak tartalmaznia kell legalább egy számot.');
           return false;
       }
       //speciális karakterek vizsgálata
       if (!specialCharPattern.test(password)) {
           alert('A jelszónak tartalmaznia kell legalább egy speciális karaktert.');
           return false;
       }

       //helyes jelszó
       if (numberPattern.test(password)  && specialCharPattern.test(password)){

        //'Sikeres regisztráció' felirat kiírása
        let regText = document.createElement('span');
        regText.className = "reg-output";
        regText.innerText = `Sikeres regisztráció!` ;
        regResp.appendChild(regText);

        //Regisztráció gomb letiltása
        regButton.disabled = true;
            
        console.log("registration succesful")
        return true;
       }
       
       

   }

//Oldal újratöltése
function reload(){
    location.reload();
}

//Bejelentkezés
function login(){
    //név kiválasztása
    let name = document.querySelector('#user-name').value
    //Üdvözlés létrehozása
    let greeting = `Üdv, ${name}. Jó szórakozást!`;
    console.log(greeting);

    //span létrehozása a HTML-ben, class nevet adunk hozzá, majd feltöltjük az üdvözléssel

    let text = document.createElement('span');
    text.className = "greeting-output"
    text.innerText = greeting;

    //game div-hez hozzáadjuk
    loginResp.appendChild(text);

    //majd a játék oldalára a hivatkozást is 
    game.innerHTML += `<a href="game.html?user-name=${name}" class="game-button">Játék</a>`;

    //láthatóvá/láthatatlanná tesszük a gombot
    gameButton.style.display = 'block';
    regMenuButton.style.display = 'none';
    backButton.style.display = 'block';

    //bejelentkezés gomb letiltása
    logButton.disabled = true;

    
    
}

   function registration() {

    titleText.innerText = "2048 Registration"

    //'Regisztrálj' szöveg kiírása
    h2Element.innerText = "Regisztrálj!";

    //láthatóvá/láthatatlanná tesszük a gombot
    logButton.style.display = 'none';
    regButton.style.display = 'block';
    regMenuButton.style.display = 'none';
    backButton.style.display = 'block';
    gameButton.style.display = 'none';

    
    
   }
   