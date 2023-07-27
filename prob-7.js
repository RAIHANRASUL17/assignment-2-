function generatePassword(num) {
    let uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    let numberChars = '0123456789';
    let specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  
   let allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  
    let password = '';

    for (let i = 0; i < num; i++) {
      // Randomly number create
      let randomIndex = Math.floor(Math.random() * allChars.length);
      
      password = password + allChars[randomIndex];
      console.log(password);
      console.log(password.length)
    }
  
  }
  
  // call function
 generatePassword(12);
  