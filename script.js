// ==========================================
// CyberLearn - script.js
// Site éducatif de cybersécurité
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------
    // 1. Année automatique
    // ------------------------------
    const yearElements = document.querySelectorAll("#year, .current-year");

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    // ------------------------------
    // 2. Menu mobile
    // ------------------------------
    const menuButton = document.querySelector(
        "#menu-btn, .menu-btn, .menu-toggle"
    );

    const navigation = document.querySelector(
        "#nav, nav, .navigation, .navbar"
    );

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("active");
            menuButton.classList.toggle("active");
        });
    }


    // ------------------------------
    // 3. Recherche des cours
    // ------------------------------
    const searchInput = document.querySelector(
        "#search, #searchInput, .search-input"
    );

    const courseCards = document.querySelectorAll(
        ".course, .course-card, .lesson, .lesson-card, .card"
    );

    if (searchInput && courseCards.length > 0) {

        searchInput.addEventListener("input", () => {

            const searchText = searchInput.value
                .toLowerCase()
                .trim();

            courseCards.forEach(card => {

                const text = card.textContent.toLowerCase();

                if (text.includes(searchText)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });
        });
    }


    // ------------------------------
    // 4. Boutons "Commencer"
    // ------------------------------
    const startButtons = document.querySelectorAll(
        ".start-btn, .start-course, [data-action='start']"
    );

    startButtons.forEach(button => {

        button.addEventListener("click", () => {

            const target = button.dataset.target;

            if (target) {
                window.location.href = target;
                return;
            }

            const coursesSection = document.querySelector(
                "#courses, .courses, .lessons"
            );

            if (coursesSection) {
                coursesSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });

    });


    // ------------------------------
    // 5. Défilement doux des liens
    // ------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // ------------------------------
    // 6. Affichage des messages
    // ------------------------------
    const messageButtons = document.querySelectorAll(
        ".message-btn, [data-message]"
    );

    messageButtons.forEach(button => {

        button.addEventListener("click", () => {

            const message =
                button.dataset.message ||
                "Cette fonctionnalité sera bientôt disponible.";

            showMessage(message);

        });

    });


    // ------------------------------
    // 7. Fonction d'affichage
    // ------------------------------
    function showMessage(message) {

        let box = document.querySelector("#cyberlearn-message");

        if (!box) {

            box = document.createElement("div");

            box.id = "cyberlearn-message";

            box.style.position = "fixed";
            box.style.bottom = "20px";
            box.style.left = "50%";
            box.style.transform = "translateX(-50%)";
            box.style.padding = "14px 20px";
            box.style.borderRadius = "10px";
            box.style.background = "#111827";
            box.style.color = "#ffffff";
            box.style.fontSize = "15px";
            box.style.zIndex = "9999";
            box.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
            box.style.maxWidth = "90%";
            box.style.textAlign = "center";

            document.body.appendChild(box);
        }

        box.textContent = message;
        box.style.display = "block";

        clearTimeout(box.hideTimer);

        box.hideTimer = setTimeout(() => {
            box.style.display = "none";
        }, 3000);
    }


    // ------------------------------
    // 8. Boutons de cours
    // ------------------------------
    document.querySelectorAll("[data-course]").forEach(button => {

        button.addEventListener("click", () => {

            const courseName = button.dataset.course;

            showMessage(
                "Cours sélectionné : " + courseName
            );

        });

    });


    // ------------------------------
    // 9. Empêcher les liens "#" de
    //    remonter inutilement la page
    // ------------------------------
    document.querySelectorAll("a").forEach(link => {

        if (link.getAttribute("href") === "#") {

            link.addEventListener("click", event => {
                event.preventDefault();
            });

        }

    });


    // ------------------------------
    // 10. Message de démarrage
    // ------------------------------
    console.log(
        "CyberLearn chargé avec succès."
    );

});
