let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("imageslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  const htmlSpan = document.querySelector(".htmlspan");
  const cssSpan = document.querySelector(".cssspan");
  const jsSpan = document.querySelector(".jsspan");
  const bootstrapSpan = document.querySelector(".bsspan");

  if (document.documentElement.scrollTop > 200) {
    htmlSpan.classList.add("precent100");
    cssSpan.classList.add("precent90");
    jsSpan.classList.add("parent80");
    bootstrapSpan.classList.add("parent85");
  } else {
    htmlSpan.classList.remove("precent100");
    cssSpan.classList.remove("precent90");
    jsSpan.classList.remove("parent80");
    bootstrapSpan.classList.remove("parent85");
  }
}

// FILTER
const filter = document.querySelectorAll(".filter");
const filterItem = document.querySelectorAll(".projectimg");

filter.forEach((h3) => {
  h3.classList.remove("filteractive");
});
filter[0].classList.add("filteractive");

filter.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveBtn(e);
    const btnfilter = e.target.dataset.filter;

    filterItem.forEach((projectimg) => {
      if (btnfilter == "all") {
        projectimg.style.display = "block";
      } else {
        const boxfilter = projectimg.dataset.item;
        if (btnfilter == boxfilter) {
          projectimg.style.display = "block";
        } else {
          projectimg.style.display = "none";
        }
      }
    });
  });
});

function setActiveBtn(e) {
  filter.forEach((h3) => {
    h3.classList.remove("filteractive");
  });
  e.target.classList.add("filteractive");
}

// Form
const form = document.getElementById("user-forms");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const prePayload = new FormData(form);
  const payload = new URLSearchParams(prePayload);

  console.log([...payload]);

  fetch("https://borjomi.loremipsum.ge/api/send-message", {
    method: "POST",
    body: payload,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

const forms = document.querySelector("#user-forms");

forms.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const urlInput = document.querySelector("#url");
  const message = document.querySelector("#message");

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  if (!urlInput.checkValidity()) {
    alert("Please enter a valid URL.");
    return;
  }

  if (!message.checkValidity()) {
    alert("Please enter valid message.");
    return;
  }

  const modal = window.open("modal.html", "modal", "width=100%");
  modal.document.write(
    "<h1>Thank you for getting in touch! We appreciate you contacting us.</h1>"
  );
  modal.document.close();
});
