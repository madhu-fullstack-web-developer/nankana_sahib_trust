document.addEventListener("DOMContentLoaded", function () {
  let counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
      let target = parseInt(counter.getAttribute("data-count"));
      let speed = target / 600;

      function startCounting() {
          let count = 0;
          let updateCounter = setInterval(() => {
              count += speed;
              counter.innerText = Math.floor(count);

              if (count >= target) {
                  counter.innerText = target;
                  clearInterval(updateCounter);

                  // Restart the counter after a short delay
                  setTimeout(startCounting, 1000); // Restart after 1 second
              }
          }, 20);
      }

      startCounting(); // Start the counter
  });
});
