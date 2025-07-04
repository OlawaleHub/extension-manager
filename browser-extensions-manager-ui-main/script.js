

// Toggle status (active/inactive)
document.querySelectorAll(".toggle-switch").forEach(switchEl => {
 switchEl.addEventListener("change", () => {
   const card = switchEl.closest(".extension-card");
   if (switchEl.checked) {
     card.classList.add("active");
     card.classList.remove("inactive");
   } else {
     card.classList.add("inactive");
     card.classList.remove("active");
   }

   applyCurrentFilter();
 });
});

// Remove extension cards
document.querySelectorAll(".delete-btn").forEach(btn => {
 btn.addEventListener("click", () => {
   const card = btn.closest(".extension-card");
   card.remove();
   applyCurrentFilter(); 
 });
});

// Filter logic
document.querySelectorAll(".filter-btn").forEach(button => {
 button.addEventListener("click", () => {
   document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
   button.classList.add("active");

   applyCurrentFilter();
 });
});

function applyCurrentFilter() {
 const selected = document.querySelector(".filter-btn.active").getAttribute("data-filter");

 document.querySelectorAll(".extension-card").forEach(card => {
   if (selected === "all") {
     card.style.display = "flex";
   } else if (!card.classList.contains(selected)) {
     card.style.display = "none";
   } else {
     card.style.display = "flex";
   }
 });
}


function filterExtensions(filter) {
 if (filter === "all") {
   return extensions; 
 }
 return extensions.filter(ext => ext.status === filter);
}


