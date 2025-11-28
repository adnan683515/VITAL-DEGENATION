const slider = document.querySelector(".testimonial-slider");
const buttons = document.querySelectorAll(".slider-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const index = Number(btn.dataset.index);

     
        slider.style.transform = `translateX(-${index * 100}%)`;


        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});
  


const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const answer = toggle.closest(".faq-item").querySelector(".faq-answer");

    // Toggle answer visibility
    answer.style.display = answer.style.display === "block" ? "none" : "block";

    // Rotate arrow
    toggle.style.transform = answer.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)";
  });
});
