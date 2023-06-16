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

/* *** */

/* (function () {
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
 */