 // Input elelment
 const form = document.getElementById('resume') as HTMLFormElement;
 const displayName = document.getElementById('name') as HTMLParagraphElement;
 const displayAge = document.getElementById('age') as HTMLParagraphElement;
 const displayPhone = document.getElementById('phone') as HTMLParagraphElement;
 const displayEmail = document.getElementById('email1') as HTMLParagraphElement;
 const displayExp = document.getElementById('exp') as HTMLParagraphElement;
 const displayEdu = document.getElementById('education1') as HTMLParagraphElement;
 const displaySkills = document.getElementById('skill1') as HTMLParagraphElement;
 const displayHomeadress = document.getElementById('home') as HTMLParagraphElement;
 const displaygithub = document.getElementById('github') as HTMLParagraphElement;
 const displayaddress = document.getElementById('address') as HTMLParagraphElement;
 
 
 if (form) {
   form.addEventListener('submit', (event: Event) => {
     event.preventDefault();
    
    
     const name = (document.getElementById('text') as HTMLInputElement).value;
     const age1 = (document.getElementById('age1') as HTMLInputElement).value;
     const phone = (document.getElementById('phone1') as HTMLInputElement).value;
     const email = (document.getElementById('email') as HTMLInputElement).value; 
     const education = (document.getElementById('education') as HTMLTextAreaElement).value; 
     const exp = (document.getElementById('exper') as HTMLTextAreaElement).value; 
     const skill = (document.getElementById('skill') as HTMLTextAreaElement).value; 
     const address = (document.getElementById('address1') as HTMLInputElement).value; 
     const Home1 = (document.getElementById('Home1') as HTMLInputElement).value; 
 
     // Insert values
     displayName.innerHTML = `Name: ${name}`
     displayAge.innerHTML = `Age: ${age1}`
     displayPhone.innerHTML =`Phone: ${phone}`
     displayEmail.innerHTML = `Email:${email}`
     displayEdu.innerHTML = `Education:${education}`
     displayExp.innerHTML = `Exp:${exp}`
     displaySkills.innerHTML = `${skill}`
     displayaddress.innerHTML = `${address} `
     displayHomeadress.innerHTML = `${Home1} `
 
     
     form.reset();
   });
 }