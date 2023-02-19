import { galleryItems } from './gallery-items.js';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallaryRef = document.querySelector('.gallery');

//створюємо розмітку галереї
function createMarkupGallary(gallaryArry) {
  const markup = gallaryArry
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>
      </div>`;
    })
    .join('');

  gallaryRef.insertAdjacentHTML('afterbegin', markup);
}
createMarkupGallary(galleryItems);

// фунцція бібліотеки SimpleLightbox
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
