
function registerUser() {
    let theFieldNamn = document.getElementById('theField-namn');
    let theFieldTelefon = document.getElementById('theField-telefon');
    let displayBox = document.getElementById('displayBox'); // Select the display box
    
    theFieldNamn.style.display = "flex"; 
    theFieldTelefon.style.display = "flex"; 
  
    // Combine input values
    const text = theFieldNamn.value.trim() + " " + theFieldTelefon.value.trim();
    
    // Show the text in an alert popup if not empty
    if (text.trim() !== "") {  
      alert(text);
    }
  
    // Display the text in the display box
    displayBox.textContent = text;
  
    // Clear the input fields if desired
    theFieldNamn.value = '';
    theFieldTelefon.value = '';
  }
  


