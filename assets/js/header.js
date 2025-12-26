(function () {
    const header = document.createElement("header");
    header.className = "app-header";

    const toolName = document.body.dataset.tool || "Browser Utilities";

    // 🔑 KEY FIX: detect by folder, not filename
    const isHomePage = !location.pathname.includes("/tools/");

    header.innerHTML = `
        <div class="left">
            
            <a href="../../index.html"
               class="home-btn"
               id="homeBtn"
               title="Home">🏠</a>
            <span class="title">${toolName}</span>
        </div>

        <div class="right">
            <a href="https://github.com/thirumalx/browser-lab"
               target="_blank"
               rel="noopener noreferrer">
                ⭐ GitHub
            </a>
            <button class="nav-btn" id="backBtn" title="Back">Back ⬅</button>
        </div>
    `;

    document.body.prepend(header);

    const backBtn = document.getElementById("backBtn");
    const homeBtn = document.getElementById("homeBtn");

    if (isHomePage) {
        backBtn.disabled = true;
        homeBtn.classList.add("disabled");
    } else {
        backBtn.onclick = () => {
            if (history.length > 1) {
                history.back();
            } else {
                location.href = "../../index.html";
            }
        };
    }
})();
