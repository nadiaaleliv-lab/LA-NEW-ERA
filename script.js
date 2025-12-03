// Animación de enlaces al pasar el mouse
document.querySelectorAll(".link-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove("active");
    });

    item.addEventListener("click", () => {
        const platform = item.getAttribute("data-platform");

        // Abrir enlaces según plataforma
        switch (platform) {
            case "tiktok":
                window.open("https://www.tiktok.com/@la.nueva.era24", "TIK TOK");
                break;

            case "facebook":
                window.open("https://www.facebook.com/", "FACEBOOK");
                break;

            case "instagram":
                window.open("https://www.instagram.com/", "INSTAGRAM");
                break;

            default:
                console.log("siguenos en nuestras plataformas");
        }
    });
});

// --- DETECTAR CUMPLEAÑOS ---

// Tomar fecha actual
const hoy = new Date();
const diaHoy = hoy.getDate();
const mesHoy = hoy.getMonth() + 1; // Los meses empiezan en 0

// Seleccionar todos los integrantes
document.querySelectorAll(".integrante-item").forEach(item => {

    const fechaTexto = item.querySelector(".integrante-cumple").textContent;
    // Ej: "Cumpleaños: 13/01/1999"

    const partes = fechaTexto.replace("Cumpleaños: ", "").split("/");
    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]);

    // Si coincide la fecha → ES SU CUMPLE
    if (dia === diaHoy && mes === mesHoy) {

        // Crear mensaje especial
        const aviso = document.createElement("p");
        aviso.textContent = "🎉 ¡Hoy está de cumpleaños! 🎉";
        aviso.style.color = "#ffeb3b";
        aviso.style.fontWeight = "700";
        aviso.style.marginTop = "10px";
        aviso.style.fontSize = "0.9rem";
        aviso.style.textShadow = "0 0 6px #000";

        item.appendChild(aviso);

        // (Opcional) Animación tipo parpadeo
        item.style.animation = "cumpleAnim 1.2s infinite";

        // (Opcional) Popup
        // alert(`🎉 Hoy está de cumpleaños: 
    }
});

// Botón Compartir
const shareButton = document.getElementById("shareButton");

shareButton.addEventListener("click", async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Agrupación Artística La Nueva Era",
                text: "Te comparto la tarjeta digital de la agrupación artistica La Nueva Era✨",
                url: window.location.href
            });
            console.log("Contenido compartido");
        } catch (err) {
            console.log("Error al compartir:", err);
        }
    } else {
        alert("La función de compartir no está disponible en este dispositivo.");
    }
});
