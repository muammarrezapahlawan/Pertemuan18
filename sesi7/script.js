function subscribe() {
        const btnElement = document.querySelector(".js-btn-subscribe");

        if (btnElement.innerText === "Subscribe") {
          btnElement.innerHTML = "Subscribed";
          btnElement.classList.add("is-subscribe");
        } else {
          btnElement.innerHTML = "Subscribe";
          btnElement.classList.remove("is-subscribe");
        }
      }