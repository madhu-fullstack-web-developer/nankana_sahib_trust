document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".counter");
  
    counters.forEach((counter) => {
      let target = parseInt(counter.getAttribute("data-count"));
      let count = 0;
      let speed = target / 600;
  
      let updateCounter = setInterval(() => {
        count += speed;
        counter.innerText = Math.floor(count);
  
        if (count >= target) {
          counter.innerText = target;
          clearInterval(updateCounter);
        }
      }, 20);
    });
  });
  