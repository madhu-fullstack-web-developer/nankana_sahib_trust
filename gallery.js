document.addEventListener("DOMContentLoaded", function () {
    let filterButtons = document.querySelectorAll(".filter-button");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            let filterValue = this.getAttribute("data-filter");
            let galleryItems = document.querySelectorAll(".gallery-prod");

            if (filterValue === "all") {
                // Show all items
                galleryItems.forEach(item => {
                    item.style.display = "block";
                });
            } else {
                // Show only selected category, hide others
                galleryItems.forEach(item => {
                    if (item.classList.contains(filterValue)) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            }
        });
    });
});
