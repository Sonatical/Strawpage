
// Function to handle highlighting and navigation
function highlightSection(event) {
    // Prevent the default hyperlink behavior for now
    event.preventDefault();

    // Get the target section id
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Remove highlight from any previously highlighted section
    document.querySelectorAll(".highlight").forEach(el => el.classList.remove("highlight"));

    // Scroll to the target section and add highlight
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        targetSection.classList.add("highlight");

        // Remove highlight and navigate after 1.5 seconds
        setTimeout(() => {
            targetSection.classList.remove("highlight");

            // Now allow the link navigation to happen
            window.location.hash = event.currentTarget.getAttribute("href");
        }, 1500); // Wait for 1.5 seconds before navigating
    }
}

// Attach events to nav links
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", highlightSection);
});

