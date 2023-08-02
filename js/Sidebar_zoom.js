/* Sidebar */

const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
document.querySelector('button').onclick = function () {
	sidebar.classList.toggle('sidebar_small');
	mainContent.classList.toggle('main-content_large');
};

function Ocultar(ejemplo) {
	vista = document.getElementById(ejemplo).style.display;
	if (vista == 'none') vista = 'block';
	else vista = 'none';
	document.getElementById(ejemplo).style.display = vista;
}

/* Zoom img Secciones */
(function () {
	var lightbox = document.createElement('div');
	lightbox.className = 'lightbox';

	var img = document.createElement('img');
	var caption = document.createElement('p');
	caption.className = 'caption';

	lightbox.appendChild(img);
	lightbox.appendChild(caption);

	document.body.appendChild(lightbox);

	var galleryImages = document.querySelectorAll('.lightbox-gallery img');
	galleryImages.forEach(function (image) {
		image.addEventListener('click', function (e) {
			e.preventDefault();

			var src = this.getAttribute('data-image-hd');
			var cap = this.getAttribute('alt');

			img.src = src;
			caption.textContent = cap;

			lightbox.style.display = 'block';
		});
	});

	lightbox.addEventListener('click', function () {
		lightbox.style.display = 'none';
	});
})();
