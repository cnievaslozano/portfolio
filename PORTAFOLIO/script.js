document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const cardContainer = document.getElementById("cardContainer");

    // Datos de ejemplo (puedes reemplazarlos con tus propias tarjetas)
    const data = [
        { title: "Php", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio nec dolor interdum laoreet ut non elit. Quisque porta nulla eget dolor aliquet venenatis. ", subtitle:"Crud Laravel Ecommerce", linkname:"Github", link: "#"},
        { title: "Javascript", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", subtitle:"Pokemon api", linkname:"Github", link: "#"},
        { title: "Java", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a odio nec dolor interdum laoreet ut non elit. Quisque porta nulla eget dolor aliquet venenatis. ", subtitle:"Mobile aplication" , linkname:"Github", link: "#"},
        { title: "Python", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta nulla eget dolor aliquet venenatis. ", subtitle:"Snake Game" , linkname:"Github", link: "#"}
        // Agrega más tarjetas según sea necesario
    ];

    // Función para mostrar las tarjetas
    function displayCards(cards) {
        cardContainer.innerHTML = "";
        cards.forEach(card => {
            cardContainer.innerHTML += `
                <div class="card " style="width: 80%; margin:auto; margin-bottom:10px">
                    <div class="card-body text-dark">               
                        <h5 class="card-title">${card.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${card.subtitle}</h6>
                        <p class="card-text">${card.content}</p>
                        <a href="${card.link}" class="card-link">${card.linkname}</a>
                    </div>
                </div>
            `;
        });
    }

    // Función para filtrar las tarjetas según la búsqueda
    function filterCards(query) {
        const filteredCards = data.filter(card =>
            card.title.toLowerCase().includes(query.toLowerCase()) ||
            card.content.toLowerCase().includes(query.toLowerCase())
        );
        displayCards(filteredCards);
    }

    // Evento de escucha para la entrada de búsqueda
    searchInput.addEventListener("input", function() {
        filterCards(searchInput.value);
    });

    // Mostrar todas las tarjetas al cargar la página
    displayCards(data);
});
