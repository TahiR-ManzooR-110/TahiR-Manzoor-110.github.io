const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}
//resume

document.getElementById("my_resume").addEventListener("click", function(){
  window.open("http://drive.google.com/file/d/1hXdiu9oOKpD7zHxQUKeWa0rNMntBpcT8/view?usp=sharing", "_blank");
  this.href = "Tahir_Manzoor/Resume";
  this.download = "Tahir_Manzoor/Resume";
});

//email
function sendmail() {
  let email = document.getElementById("sender_email");
  let name = document.getElementById("sender_name");
  let sub = document.getElementById("subject");
  let msg = document.getElementById("msg");
  let submit = document.getElementById("email_btn");
  submit.addEventListener("click", () => {
    if (
      email.value == "" ||
      name.value == "" ||
      sub.value == "" ||
      msg.value == ""
    ) {
      error();
    } else {
      sendEmail();
      alert("Message sent successfully!");
      let form = document.getElementById("formm");
      form.reset();
    }
  });
}
sendmail();
function error() {
  alert("Please fill all the details");
}
function sendEmail() {
  var templateParams = {
    from_name: document.getElementById("sender_name").value,
    sub: document.getElementById("subject").value,
    mesg: document.getElementById("msg").value,
    from_email: document.getElementById("sender_email").value,
  };

  emailjs.send("service_x1gjf3g", "template_k0lfjgw", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
