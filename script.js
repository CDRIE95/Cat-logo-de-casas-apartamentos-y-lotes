const Propiedades = [
    {
        nombre: "Casa Familiar en Miraflores",
        ciudad: "Lima",
        precio: "$250.000",
        tamaño: "180 m²",
        categoria: "Casa",
        imagen: "img/miraflores.jpg"
    },
    {
        nombre: "Apartamento Moderno en San Isidro",
        ciudad: "Lima",
        precio: "$150.000",
        tamaño: "90 m²",
        categoria: "Apartamento",
        imagen: "img/sanisidro.jpg"    
    },
    {
        nombre: "Lote Residencial en Cusco",
        ciudad: "Cusco",
        precio: "$80.000",
        tamaño: "500 m²",
        categoria: "Lote",
        imagen: "img/cusco.jpg"
    },  
    {
        nombre: "Casa de Playa en Máncora",
        ciudad: "Piura",
        precio: "$300.000",
        tamaño: "220 m²",
        categoria: "Casa",
        imagen: "img/mancora.jpg"
    },

    {
        nombre: "Apartamento en Barranco",
        ciudad: "Lima",
        precio: "$200.000",
        tamaño: "110 m²",
        categoria: "Apartamento",
        imagen: "img/barranco.jpg"
    },
    {
        nombre: "Lote Comercial en Arequipa",
        ciudad: "Arequipa",
        precio: "$120.000",
        tamaño: "600 m²",
        categoria: "Lote",
        imagen: "img/arequipa.jpg"
    },
    {
        nombre: "Casa en La Molina",
        ciudad: "Lima",
        precio: "$350.000",
        tamaño: "250 m²",
        categoria: "Casa",
        imagen: "img/lamolina.jpg"
    },
    {
        nombre: "Apartamento en Trujillo",
        ciudad: "Trujillo",
        precio: "$130.000",
        tamaño: "95 m²",
        categoria: "Apartamento",
        imagen: "img/trujillo.jpg"
    },
    {
        nombre: "Lote en Chiclayo",
        ciudad: "Chiclayo",
        precio: "$70.000",
        tamaño: "450 m²",
        categoria: "Lote",
        imagen: "img/chiclayo.jpg"
    },
];
const catalogo =
    document.getElementById("catalogo");

Propiedades. forEach(prop => {
    const card =
        document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${prop.imagen}" alt="${prop.nombre}">
        <div class="card-content">
            <h2>${prop.nombre}</h2>
            <p><strong>Ciudad:</strong> ${prop.ciudad}</p>
            <p><strong>Precio:</strong> ${prop.precio}</p>
            <p><strong>Tamaño:</strong> ${prop.tamaño}</p>
            <span class="categoria">${prop.categoria}</span>
        </div>
    `;
    card.addEventListener("click", () => abrirModal(prop));
    catalogo.appendChild(card);
});
const modal =
    document.getElementById("modal");
const closeBtn =
    document.getElementById("closeBtn");
function abrirModal(prop) {
    document.getElementById("modal-img").src = prop.imagen;
    document.getElementById("modal-nombre").textContent = prop.nombre;
    document.getElementById("modal-ciudad").textContent = prop.ciudad;
    document.getElementById("modal-precio").textContent = prop.precio;
    document.getElementById("modal-tamaño").textContent = prop.tamaño;
    document.getElementById("modal-categoria").textContent = prop.categoria;
    modal.style.display = "flex";
}
closeBtn.onclick = () => {
    modal.style.display = "none";
};
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}   