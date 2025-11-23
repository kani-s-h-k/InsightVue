let authOverlayRef = document.getElementById("authModal");
let authTriggerRef = document.getElementById("navBtn"); // your Sign in button
let authCloseRef = document.getElementById("authCloseBtn");

authTriggerRef.addEventListener("click", (event) => {
  event.preventDefault();
  authOverlayRef.style.display = "flex";
});

authCloseRef.addEventListener("click", () => {
  authOverlayRef.style.display = "none";
});

// close on outside click
window.addEventListener("click", (e) => {
  if (e.target === authOverlayRef) {
    authOverlayRef.style.display = "none";
  }
});