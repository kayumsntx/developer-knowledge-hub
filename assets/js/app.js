/* =========================================================
   DEVELOPER KNOWLEDGE HUB
   Main JavaScript
========================================================= */


document.addEventListener("DOMContentLoaded", function () {

    initializeMobileMenu();

    initializeTheme();

    initializeSearch();

    initializeYear();

});


/* =========================================================
   MOBILE MENU
========================================================= */

function initializeMobileMenu() {

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const navigation =
        document.getElementById("mainNav");


    if (!menuButton || !navigation) {
        return;
    }


    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("open");

    });


    const links =
        navigation.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("open");

        });

    });

}


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

    const themeButton =
        document.getElementById("themeToggle");


    if (!themeButton) {
        return;
    }


    const savedTheme =
        localStorage.getItem("devhub-theme");


    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

        themeButton.textContent = "☀️";

    }


    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");


        const isLight =
            document.body.classList.contains("light-theme");


        if (isLight) {

            localStorage.setItem(
                "devhub-theme",
                "light"
            );

            themeButton.textContent = "☀️";

        }
        else {

            localStorage.setItem(
                "devhub-theme",
                "dark"
            );

            themeButton.textContent = "🌙";

        }

    });

}


/* =========================================================
   SEARCH DATA
========================================================= */

const searchData = [

    {
        title: "C#",
        category: "Learning",
        url: "topics/csharp.html",
        keywords: "csharp c# oop linq async collections"
    },

    {
        title: "ASP.NET Core",
        category: "Learning",
        url: "topics/aspnet-core.html",
        keywords: "aspnet asp.net core dotnet web api middleware dependency injection"
    },

    {
        title: "SQL Server",
        category: "Learning",
        url: "topics/sql-server.html",
        keywords: "sql sqlserver database query joins stored procedure indexes"
    },

    {
        title: "Entity Framework Core",
        category: "Learning",
        url: "topics/entity-framework.html",
        keywords: "ef efcore entity framework code first migration database"
    },

    {
        title: "Web API",
        category: "Learning",
        url: "topics/web-api.html",
        keywords: "api webapi rest crud http dto controller"
    },

    {
        title: "Angular",
        category: "Learning",
        url: "topics/angular.html",
        keywords: "angular typescript component service routing rxjs"
    },

    {
        title: "Node.js & Express",
        category: "Learning",
        url: "topics/nodejs.html",
        keywords: "node nodejs express javascript backend api"
    },

    {
        title: "Git & GitHub",
        category: "Learning",
        url: "topics/git-github.html",
        keywords: "git github branch commit push pull repository"
    },

    {
        title: "C# Interview Questions",
        category: "Interview",
        url: "interview.html",
        keywords: "csharp interview questions oop"
    },

    {
        title: "ASP.NET Core Interview Questions",
        category: "Interview",
        url: "interview.html",
        keywords: "aspnet core interview dependency injection middleware"
    },

    {
        title: "SQL Server Interview Questions",
        category: "Interview",
        url: "interview.html",
        keywords: "sql interview database joins"
    },

    {
        title: "Code Lab",
        category: "Code",
        url: "code.html",
        keywords: "code examples programming"
    }

];


/* =========================================================
   SEARCH
========================================================= */

function initializeSearch() {

    const searchInput =
        document.getElementById("homeSearch");

    const resultsContainer =
        document.getElementById("searchResults");


    if (!searchInput || !resultsContainer) {
        return;
    }


    searchInput.addEventListener("input", function () {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        if (!query) {

            resultsContainer.classList.remove("show");

            resultsContainer.innerHTML = "";

            return;
        }


        const results =
            searchData
                .filter(function (item) {

                    const searchableText =
                        (
                            item.title +
                            " " +
                            item.category +
                            " " +
                            item.keywords
                        ).toLowerCase();

                    return searchableText.includes(query);

                })
                .slice(0, 6);


        if (results.length === 0) {

            resultsContainer.innerHTML = `

                <div class="search-result">

                    <div class="search-result-title">
                        No results found
                    </div>

                    <div class="search-result-category">
                        Try another keyword.
                    </div>

                </div>

            `;

            resultsContainer.classList.add("show");

            return;
        }


        resultsContainer.innerHTML =
            results
                .map(function (item) {

                    return `

                        <a
                            href="${item.url}"
                            class="search-result">

                            <div class="search-result-title">
                                ${item.title}
                            </div>

                            <div class="search-result-category">
                                ${item.category}
                            </div>

                        </a>

                    `;

                })
                .join("");


        resultsContainer.classList.add("show");

    });


    document.addEventListener("click", function (event) {

        if (
            !event.target.closest(".hero-search")
        ) {

            resultsContainer.classList.remove("show");

        }

    });


    document.addEventListener("keydown", function (event) {

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            searchInput.focus();

        }

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

function initializeYear() {

    const yearElement =
        document.getElementById("currentYear");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

}


/* =========================================================
   COMING SOON
========================================================= */

function showComingSoon() {

    const existingToast =
        document.querySelector(".toast");


    if (existingToast) {
        existingToast.remove();
    }


    const toast =
        document.createElement("div");


    toast.className = "toast";


    toast.innerHTML = `
        <strong>Coming Soon</strong><br>
        Contributor functionality will be added
        in a future version.
    `;


    document.body.appendChild(toast);


    setTimeout(function () {

        toast.remove();

    }, 4000);

}