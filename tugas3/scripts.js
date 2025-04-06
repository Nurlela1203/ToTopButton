document.addEventListener("DOMContentLoaded", function () {
    // Create button element
    let scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.innerHTML = "&#8679;"; // Unicode arrow up
    scrollToTopBtn.id = "scrollToTopBtn";
    document.body.appendChild(scrollToTopBtn);

    // Button styles
    let style = document.createElement("style");
    style.innerHTML = `
        #scrollToTopBtn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            font-size: 24px;
            display: none;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: opacity 0.3s, visibility 0.3s;
            opacity: 0;
            visibility: hidden;
        }
        #scrollToTopBtn.show {
            opacity: 0.6;
            visibility: visible;
        }
        #scrollToTopBtn:hover {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Show button after scrolling 500px
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Generate dummy content to exceed 2000px height
    let content = document.createElement("div");
    content.style.height = "2500px";
    content.style.background = "linear-gradient(to bottom, #ff9a9e, #fad0c4)";
    document.body.appendChild(content);
});
