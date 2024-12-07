// Input elelment
var form = document.getElementById('resume');
var displayName = document.getElementById('name');
var displayAge = document.getElementById('age');
var displayPhone = document.getElementById('phone');
var displayEmail = document.getElementById('email1');
var displayExp = document.getElementById('exp');
var displayEdu = document.getElementById('education1');
var displaySkills = document.getElementById('skill1');
var displayHomeadress = document.getElementById('home');
var displaygithub = document.getElementById('github');
var displayaddress = document.getElementById('address');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('text').value;
        var age1 = document.getElementById('age1').value;
        var phone = document.getElementById('phone1').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var exp = document.getElementById('exper').value;
        var skill = document.getElementById('skill').value;
        var address = document.getElementById('address1').value;
        var Home1 = document.getElementById('Home1').value;
        // Insert values
        displayName.innerHTML = "Name: ".concat(name);
        displayAge.innerHTML = "Age: ".concat(age1);
        displayPhone.innerHTML = "Phone: ".concat(phone);
        displayEmail.innerHTML = "Email:".concat(email);
        displayEdu.innerHTML = "Education:".concat(education);
        displayExp.innerHTML = "Exp:".concat(exp);
        displaySkills.innerHTML = "".concat(skill);
        displayaddress.innerHTML = "".concat(address, " ");
        displayHomeadress.innerHTML = "".concat(Home1, " ");
        form.reset();
    });
}
