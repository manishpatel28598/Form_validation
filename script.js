function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
  
    if (email.length > 3 && email.includes("@") && email.includes(".")) {
      emailError.textContent = "";
    //   showSuccessMessage();
    } 
    else{
      emailError.textContent = "Invalid email format";
      hideSuccessMessage();
    }
  }
  
  function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
  
    if (password.length > 8) {
      passwordError.textContent = "";
      showSuccessMessage();
    } else {
      passwordError.textContent = "Password must be more than 8 characters";
      hideSuccessMessage();
    }
  }
  
  function showSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = "All good to go!";
  }
  
  function hideSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = "";
  }
  
  function handleSubmit() {
    if (confirm("Are you sure you want to process?")) {
      alert("Successful signup!");
    } else {
      window.location.reload(); // Redirect to the same page and clear inputs
    }
  }
  
  const myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    handleSubmit();
  });