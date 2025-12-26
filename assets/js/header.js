(function () {
    const header = document.createElement("header");
    header.className = "app-header";
    const toolName = document.body.dataset.tool || "Browser Utilities";

    header.innerHTML = `
        <div class="left">
            <span class="title">Browser Utilities</span>
        </div>
        <div class="right">
            <a href="https://github.com/thirumalx/browser-lab"
               target="_blank"
               rel="noopener noreferrer">
                ⭐ GitHub
            </a>
        </div>
    `;

    document.body.prepend(header);
    header.querySelector(".title").innerText = toolName;
})();
