// Wait for DOM to load before running selectors
document.addEventListener('DOMContentLoaded', () => {
    // Get all required elements
    const navbarMenu = document.querySelector(".navbar .links");
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const hideMenuBtn = navbarMenu?.querySelector(".close-btn");
    const showPopupBtn = document.querySelector(".login-btn");
    const formPopup = document.querySelector(".form-popup");
    const hidePopupBtn = formPopup?.querySelector(".close-btn");
    const signupLoginLink = formPopup?.querySelectorAll(".bottom-link a");
    const signupBtn = document.querySelector(".signup-btn");
    const getStartedBtn = document.querySelector(".get-started-btn");

    // Show mobile menu
    hamburgerBtn?.addEventListener("click", () => {
        navbarMenu?.classList.toggle("show-menu");
    });

    // Hide mobile menu
    hideMenuBtn?.addEventListener("click", () => hamburgerBtn?.click());

    // Show login popup
    showPopupBtn?.addEventListener("click", () => {
        document.body.classList.toggle("show-popup");
    });

    // Hide login popup
    hidePopupBtn?.addEventListener("click", () => showPopupBtn?.click());

    // Show or hide signup form
    signupLoginLink?.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            formPopup?.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
        });
    });

    // Handle signup/get started
    const handleSignup = () => {
        document.body.classList.add("show-popup");
        formPopup?.classList.add("show-signup");
    };

    signupBtn?.addEventListener("click", handleSignup);
    getStartedBtn?.addEventListener("click", handleSignup);
});