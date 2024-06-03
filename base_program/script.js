 var tabLinks = document.getElementsByClassName("tab-links");
 var tabContents = document.getElementsByClassName("tab-contents");

 function newTab(tabName) {
    for(tabLink of tabLinks) {
            tabLink.classList.remove("active-link");
    }

    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
 }

 // Resizing the menu

 var subMenu = document.getElementById("sidemenu");

 function openMenu() {
    subMenu.style.right = 0
 }

 function closeMenu() {
    subMenu.style.right = "-200px";
 }


 //const msg = document.getElementById("span");
  

 const scriptURL = 'https://script.google.com/macros/s/AKfycbyGZHjTP7rw4q_VBA4OAMjprs0rdAoksK9jkhkPdmtrniUdC2oWpOma5S_LZlM16fw_/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg = document.getElementById("msg");
 form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => {
         msg.innerHTML = " Message sent Successfully";
         setTimeout(function() {
            msg.innerHTML ="";
         },5000);
         form.reset();
     })
     .catch(error => console.error('Error!', error.message))
 })