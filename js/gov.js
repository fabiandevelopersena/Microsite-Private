// Carga el contenido del encabezado en todas las páginas
function cargarEncabezado() {
	const GovPlaceholder = document.getElementById('Gov-placeholder');

	// Ruta relativa al encabezado en la carpeta Header_Nav
	const headerPath = '../CintillaGov/gov.html';

	// Petición AJAX para obtener el contenido del encabezado
	const xhr = new XMLHttpRequest();
	xhr.open('GET', headerPath, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			// Contenido del encabezado en el placeholder
			GovPlaceholder.innerHTML = xhr.responseText;
		}
	};
	xhr.send();
}
