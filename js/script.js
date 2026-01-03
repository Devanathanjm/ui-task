// Gallery images array
const galleryImages = [
  "assets/images/slider/slider-1.png",
  "assets/images/slider/slider-2.jpg",
  "assets/images/slider/slider-3.jpg",
  "assets/images/slider/slider-1.png",
]

let currentImageIndex = 0

// Change image function (for arrows)
function changeImage(direction) {
  currentImageIndex += direction

  // Loop around
  if (currentImageIndex < 0) {
    currentImageIndex = galleryImages.length - 1
  } else if (currentImageIndex >= galleryImages.length) {
    currentImageIndex = 0
  }

  updateGalleryDisplay()
}

// Set image directly (for dots and thumbnails)
function setImage(index) {
  currentImageIndex = index
  updateGalleryDisplay()
}

// Update gallery display
function updateGalleryDisplay() {
  const mainImage = document.getElementById("mainImage")
  const dots = document.querySelectorAll(".dot")
  const thumbnails = document.querySelectorAll(".thumbnail-item")

  // Update main image
  mainImage.src = galleryImages[currentImageIndex]

  // Update dots
  dots.forEach((dot, index) => {
    if (index === currentImageIndex) {
      dot.classList.add("active")
    } else {
      dot.classList.remove("active")
    }
  })

  // Update thumbnails - highlight the corresponding thumbnail
  thumbnails.forEach((thumb, index) => {
    // Map 8 thumbnails to 4 images (2 thumbnails per image)
    const imageIndex = index % 4
    if (imageIndex === currentImageIndex) {
      thumb.classList.add("active")
    } else {
      thumb.classList.remove("active")
    }
  })
}


// Counter 

  const counters = document.querySelectorAll(".stat-number");
  let started = false;

  function startCount() {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = 25;

      const updateCount = () => {
        if (count < target) {
          count++;
          counter.textContent = count + "%";
          setTimeout(updateCount, speed);
        } else {
          counter.textContent = target + "%";
        }
      };

      updateCount();
    });
  }

  // Start animation when section is visible
  window.addEventListener("scroll", () => {
    const section = document.querySelector(".stats-section");
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight && !started) {
      startCount();
      started = true;
    }
  });



  // AOS JS

  AOS.init({
    once: true, // animation plays only once
    duration: 800, // global animation duration
  });


// Search Modal Functionality

      // Get modal and search icon
      const searchIcon = document.getElementById("searchIcon");
      const searchModal = new bootstrap.Modal(
        document.getElementById("searchModal")
      );

      // Open modal on icon click
      searchIcon.addEventListener("click", () => {
        searchModal.show();
      });

      // Get modal and search icon mobile
      const searchIconMobile = document.getElementById("searchIconMobile");
      const searchModalMobile = new bootstrap.Modal(
        document.getElementById("searchModalMobile")
      );

      // Open modal on icon click
      searchIconMobile.addEventListener("click", () => {
        searchModalMobile.show();
      });


      