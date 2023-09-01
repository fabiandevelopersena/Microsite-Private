// Carga el contenido del encabezado en todas las páginas
function cargarEncabezado() {
	const headerPlaceholder = document.getElementById('header-placeholder');
	
	// Ruta relativa al encabezado en la carpeta Header_Nav
	const headerPath =
		'http://186.154.202.145:20002/home/Paginas/Header_Nav/header.html';

	// Petición AJAX para obtener el contenido del encabezado
	const xhr = new XMLHttpRequest();
	xhr.open('GET', headerPath, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
			// Contenido del encabezado en el placeholder
			headerPlaceholder.innerHTML = xhr.responseText;

			// Código para manejar el menú de navegación
			//  seleccionamos los dos elementos que serán clickables

			const toggleButton = document.getElementById('button-menu');
			const navWrapper = document.getElementById('nav');

			/* 
          cada ves que se haga click en el botón 
          agrega y quita las clases necesarias 
          para que el menú se muestre.
        */
			toggleButton.addEventListener('click', () => {
				toggleButton.classList.toggle('close');
				navWrapper.classList.toggle('show');
			});

			/* 
          Cuándo se haga click fuera del contenedor de enlaces 
          el menú debe esconderse.
        */

			navWrapper.addEventListener('click', (e) => {
				if (e.target.id === 'nav') {
					navWrapper.classList.remove('show');
					toggleButton.classList.remove('close');
				}
			});
		}
	};
	xhr.send();
}

// Llama a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
	cargarEncabezado();
});

/* Cambio de color scroll */
window.addEventListener('scroll', function () {
	var header = document.querySelector('header');
	if (window.scrollY > 0) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

// Función para reiniciar el video cada 10 segundos
function restartVideo() {
	var videoFrame = document.getElementById('video-frame');
	videoFrame.contentWindow.postMessage(
		'{"event":"command","func":"seekTo","args":[0,true]}',
		'*'
	);
	videoFrame.contentWindow.postMessage(
		'{"event":"command","func":"playVideo","args":""}',
		'*'
	);
}

// Función para detectar cuando el video ha finalizado
function checkVideoStatus() {
	var videoFrame = document.getElementById('video-frame');
	var videoDuration = videoFrame.contentWindow.getDuration();
	var videoCurrentTime = videoFrame.contentWindow.getCurrentTime();

	if (videoDuration - videoCurrentTime < 0.1) {
		restartVideo();
	}
}

// Inicia el video y agrega el evento para verificar si ha finalizado cada 10 segundos
window.onload = function () {
	restartVideo();
	setInterval(checkVideoStatus, 10000); // 10000 milisegundos = 10 segundos
};
