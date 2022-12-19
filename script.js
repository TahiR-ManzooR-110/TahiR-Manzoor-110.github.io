$(document).ready(function () {
    $("#menu").click(function () {
        $(this).toggleClass("fa-times");
        $(".navbar").toggleClass("nav-toggle");
    });

    $(window).on("scroll load", function () {
        $("#menu").removeClass("fa-times");
        $(".navbar").removeClass("nav-toggle");
    });

    $(".portfolio .button-container .btn").click(function () {
        let filter = $(this).attr("data-filter");

        if (filter == "all") {
            $(".portfolio .image-container .box").show("400");
        } else {
            $(".portfolio .image-container .box")
                .not("." + filter)
                .hide("200");
            $(".portfolio .image-container .box")
                .filter("." + filter)
                .show("400");
        }
    });

    $("#theme-toggler").click(function () {
        $(this).toggleClass("fa-sun");
        $("body").toggleClass("dark-theme");
    });

    // smooth scrolling

    $('a[href*=""]').on("click", function (e) {
        e.preventDefault();

        $("html, body").animate(
            {
                scrollTop: $($(this).attr("href")).offset().top,
            },
            500,
            "linear"
        );
    });
});

//email

function sendmail() {
    let email = document.getElementById("sender_email");
    let name = document.getElementById("sender_name");
    let sub = document.getElementById("subject");
    let msg = document.getElementById("msg");
    let submit = document.getElementById("email_btn");
    submit.addEventListener("click", () => {
        if (email.value == "" || name.value == "" || sub.value == "" || msg.value == "") {
            error();
        } else {
            sendEmail();
            alert("Message sent successfully!")
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


