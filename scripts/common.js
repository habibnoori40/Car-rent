function createNewGlide(target, view, autoplay, nextBtn, prevBtn) {
  const prev = document.getElementById(prevBtn);
  const next = document.getElementById(nextBtn);

  let glide = new Glide(target, {
    type: "carousel",
    startAt: 0,
    autoplay: autoplay,
    perView: view,
    hoverPause: true,
    keyBoard: true,
    // animationTimingFunc: "ease-out",
    breakpoints: {
      768: {
        perView: 1,
      },
    },
  });

  glide.mount();

  prev &&
    prev.addEventListener("click", () => {
      glide.go("<");
    });

  next &&
    next.addEventListener("click", () => {
      glide.go(">");
    });
}

// book form
const bookForm = `<div class="form-c-inner w-100 bg-white pt-3 popUp">
<button class="close">X</button>
<div class="brand-img text-center mb-5">
  <img src="./assets/brands/toyota.png" alt="brand image" />
</div>
<form action="">
  <div class="row">
    <div class="col-6">
      <label class="fw-bold text-dark mb-2" for="firstname"
        >First Name</label
      >
      <input
        type="text"
        class="form-control py-3"
        id="firstname"
        placeholder="First Name"
        required
      />
    </div>
    <div class="col-6">
      <label class="fw-bold text-dark mb-2" for="lastname"
        >Last Name</label
      >
      <input
        type="text"
        class="form-control py-3"
        id="lastname"
        placeholder="Last Name"
        required
      />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-6">
      <label class="fw-bold text-dark mb-2" for="email"
        >Email</label
      >
      <input
        type="text"
        class="form-control py-3"
        id="email"
        placeholder="Your Email"
        required
      />
    </div>
    <div class="col-6">
      <label class="fw-bold text-dark mb-2" for="address"
        >Address</label
      >
      <input
        type="text"
        class="form-control py-3"
        id="address"
        placeholder="Your Address"
        required
      />
    </div>
  </div>
  <button
    class="text-white mt-3 mx-auto py-3 px-5 d-block fw-bold"
    type="submit"
  >
    Place Order
  </button>
</form>
</div>`;

let currentPopUp = null;

function openPopUp(car) {
  if (currentPopUp) {
    document.querySelectorAll(".popUp.active").forEach((popUpEl) => {
      if (popUpEl !== car.querySelector(".popUp")) {
        popUpEl.classList.remove("active");
        setTimeout(() => {
          popUpEl.remove();
        }, 400);
      }
    });
  }

  car && car.insertAdjacentHTML("beforeend", bookForm);
  const popUpEl = car.querySelector(".popUp");
  setTimeout(() => {
    popUpEl.classList.add("active");
  }, 200);
  currentPopUp = popUpEl;

  closePOPup(popUpEl);
}

function popUp() {
  const cars = document.getElementById("cars");
  cars.addEventListener("click", (e) => {
    const car = e.target.closest("[data-product]");
    const bookNow = e.target.closest("[data-book]");
    if (bookNow) {
      openPopUp(car);
    }
  });
}

function closePOPup(popUp) {
  const close = popUp.querySelector(".close");

  close.addEventListener("click", () => {
    popUp.classList.remove("active");
    setTimeout(() => {
      popUp.remove();
    }, 400);
  });
}

export { createNewGlide, popUp };
