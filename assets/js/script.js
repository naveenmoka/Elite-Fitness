    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("navbar");
    toggle.onclick = () => nav.classList.toggle("active");

    // Back to top
    const topBtn = document.getElementById("back-to-top");
    window.onscroll = () => topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });