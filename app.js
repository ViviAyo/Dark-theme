document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.querySelector('.phone-input');
  const loginBtn = document.querySelector('.login-btn');
  const registerBtn = document.querySelector('.register');
  const forgotPasswordBtn = document.querySelector('.forgot-password');
  const closeBtn = document.querySelector('.close-btn');
  const modalOverlay = document.querySelector('.modal-overlay');

  phoneInput.addEventListener('input', function(e) {
      let value = this.value.replace(/\D/g, '');
      let formattedValue = '+7 ';
      
      if (value.length > 1) {
          formattedValue += value.substring(1, 4);
          if (value.length > 4) {
              formattedValue += ' ' + value.substring(4, 7);
              if (value.length > 7) {
                  formattedValue += ' ' + value.substring(7, 9);
                  if (value.length > 9) {
                      formattedValue += ' ' + value.substring(9, 11);
                  }
              }
          }
      }
      
      this.value = formattedValue;
  });

  function closeModal() {
      modalOverlay.style.display = 'none';
  }

  closeBtn.addEventListener('click', closeModal);
  
  modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
          closeModal();
      }
  });

  document.querySelector('.modal').addEventListener('click', function(e) {
      e.stopPropagation();
  });
});