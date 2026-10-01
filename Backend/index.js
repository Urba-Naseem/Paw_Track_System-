document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count-text");
    counters.forEach(counter => {
      counter.innerText = "0";
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {counter.innerText = `${Math.ceil(count + increment)}`;

          setTimeout(updateCount, 10);
        } else {
          let formatted;
          if (target >= 1000 && target < 1000000) {
            formatted = (target / 1000).toFixed(1) + "K";
          } else {
            formatted = target.toLocaleString();
          }
          counter.innerText = formatted;
        }
      };
      updateCount();
    });
  });const carousel = document.querySelector('#dogCarousel3D');
  const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel, {
    interval: 4000,
    ride: false, // disable auto-start
    pause: false,
    wrap: true
  });
  
  let pauseTimeout;
  let hasStarted = false; // to ensure it only starts once
  
  carousel.addEventListener('slid.bs.carousel', function (event) {
    const lastIndex = carousel.querySelectorAll('.carousel-item').length - 1;
  
    if (event.to === lastIndex) {
      bsCarousel.pause();
      clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        bsCarousel.next(); // restart
        bsCarousel.cycle();
      }, 10000); // 10s pause on last slide
    }
  });
  
  // Use Intersection Observer to start the carousel when visible
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasStarted) {
        bsCarousel.cycle(); // start the carousel
        hasStarted = true;
        observer.unobserve(carousel); // only run once
      }
    });
  }, {
    threshold: 0.3 // Start when 30% of carousel is visible
  });
  
  // Start observing
  observer.observe(carousel);
  document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.warn(`Element with ID '${targetId}' not found.`);
        }
      }
      // Else: allow normal navigation to another page
    });
  });
  document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const category = document.getElementById("searchCategory").value;
  const query = document.getElementById("searchInput").value.trim();

  if (!query) {
    alert("Please enter a search term.");
    return;
  }

  // Replace this with your real search logic or page redirection
  alert(`Searching for "${query}" in category "${category}"`);

  // Example: You could redirect to a search results page
  // window.location.href = `/search.html?category=${category}&query=${encodeURIComponent(query)}`;
});

  // Initialize custom carousel auto-slide with an interval
document.addEventListener("DOMContentLoaded", function () {
  const carousel = new bootstrap.Carousel('#customCarousel', {
    interval: 3000, // Slide every 3 seconds
    ride: 'carousel', // Start sliding immediately
  });

  // Optional: Restart the carousel if needed
  // You can manually control the carousel using JavaScript too
  // carousel.cycle();  // Uncomment if you want to restart sliding manually
});
