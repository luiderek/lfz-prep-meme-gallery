var imageUrls = [];

var gallery = document.querySelector('main');
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var url of imageUrls) {
    var imageElement = document.createElement('img');
    imageElement.className += 'gallery-image';
    imageElement.src = url;
    gallery.appendChild(imageElement);
  }
}
