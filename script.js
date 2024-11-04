let lastScrollTop = 0;
const navbarSection = document.getElementById("navbar-section");
const textElements = navbarSection.querySelectorAll("ul li, p");
const hoverElements = document.querySelectorAll(".hover\\:underline-effect");
const logoImage = navbarSection.querySelector(
  'img[src="/images/logoflat_whiteC.png"]'
);
const downArrowImages = navbarSection.querySelectorAll(
  'img[src="images/down_arrow.svg"]'
);
const dropdownMenus = navbarSection.querySelectorAll(".absolute");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const sectionHeight = 300;

  if (scrollTop > 100) {
    navbarSection.style.backgroundColor = "white";
    logoImage.src = "/images/logoflat.png";

    textElements.forEach((element) => {
      element.style.color = "black";
      if (element.closest("li")) {
        element.closest("li").style.borderColor = "#5b5b5b";
      }
    });

    hoverElements.forEach((element) => {
      element.style.setProperty("--underline-color", "red");
    });

    downArrowImages.forEach((img) => {
      img.src = "images/down_arrow_ash.svg";
    });

    dropdownMenus.forEach((menu) => {
      const dropdownItems = menu.querySelectorAll(".dropdown-text");
      dropdownItems.forEach((item) => {
        item.style.color = "black";
      });
    });

    if (scrollTop > lastScrollTop && scrollTop > sectionHeight) {
      navbarSection.style.transform = "translateY(-102px)";
    } else {
      navbarSection.style.transform = "translateY(0)";
    }
  } else {
    navbarSection.style.backgroundColor = "#151515";
    logoImage.src = "/images/logoflat_whiteC.png";

    textElements.forEach((element) => {
      element.style.color = "#8a8a8a";
      if (element.closest("li")) {
        element.closest("li").style.borderColor = "white";
      }
    });

    hoverElements.forEach((element) => {
      element.style.setProperty("--underline-color", "white");
    });

    dropdownMenus.forEach((menu) => {
      const dropdownItems = menu.querySelectorAll(".dropdown-text");
      dropdownItems.forEach((item) => {
        item.style.color = "black";
      });
    });

    downArrowImages.forEach((img) => {
      img.src = "images/down_arrow.svg";
    });

    navbarSection.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
});

const groups = navbarSection.querySelectorAll(".group");

groups.forEach((group) => {
  group.addEventListener("mouseenter", () => {
    const dropdown = group.querySelector(".absolute");
    if (dropdown) {
      dropdown.classList.remove("hidden");
    }
  });

  group.addEventListener("mouseleave", () => {
    const dropdown = group.querySelector(".absolute");
    if (dropdown) {
      dropdown.classList.add("hidden");
    }
  });
});

dropdownMenus.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    menu.classList.remove("hidden");
  });

  menu.addEventListener("mouseleave", () => {
    menu.classList.add("hidden");
  });
});
