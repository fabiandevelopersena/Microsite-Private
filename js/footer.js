// Esta función carga el contenido del slider en todas las páginas
function cargarSlider() {
	const footerPlaceholder = document.getElementById('footer-placeholder');

	// Realizar una petición AJAX para obtener el contenido del slider
	const xhr = new XMLHttpRequest();
	xhr.open('GET', '/home/Paginas/footer/footer.html', true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			// Insertar el contenido del slider en el placeholder
			footerPlaceholder.innerHTML = xhr.responseText;

			// Aquí puedes agregar cualquier otra lógica o configuración del slider si es necesario
			// Por ejemplo, inicialización de cualquier librería o configuración de opciones.
		}
	};
	xhr.send();
	s;
}

// Llama a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
	cargarSlider();
});
