// Initialize EmailJS
// Replace "YOUR_PUBLIC_KEY" with your actual EmailJS public key
(function () {
    emailjs.init("o5__73T1hsp6N3TCs");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    const btnText = submitBtn.querySelector("span");
    const btnSpinner = document.getElementById("btnSpinner");
    const statusMessage = document.getElementById("statusMessage");

    // UI Feedback: Loading state
    submitBtn.disabled = true;
    btnText.textContent = "Sending...";
    btnSpinner.style.display = "block";

    // Hide previous status message
    statusMessage.className = "status-message";

    // Call EmailJS
    // Replace "YOUR_SERVICE_ID" and "YOUR_TEMPLATE_ID" with your actual IDs
    emailjs.sendForm("service_l030eac", "template_xkchitp", this)
        .then(() => {
            // Success handler
            statusMessage.textContent = "Message sent successfully! ✅";
            statusMessage.className = "status-message success";
            this.reset();
        })
        .catch((err) => {
            // Error handler
            statusMessage.textContent = "Failed to send message ❌";
            statusMessage.className = "status-message error";
            console.error("EmailJS Error:", err);
        })
        .finally(() => {
            // Reset button state
            submitBtn.disabled = false;
            btnText.textContent = "Send Message";
            btnSpinner.style.display = "none";

            // Auto hide message after 5 seconds
            setTimeout(() => {
                statusMessage.className = "status-message";
            }, 5000);
        });
});

// Navigation Active State Script
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
