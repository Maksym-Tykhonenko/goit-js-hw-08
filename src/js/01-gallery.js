
// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "SimpleLightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryItemsMarkup = galleryItems.map(({original, preview, description}) =>
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');

const galleryList = document.querySelector('.gallery');

galleryList.innerHTML = galleryItemsMarkup;

console.log(galleryList);


const simpleLightbox = new SimpleLightbox('.gallery a', {
    /* options */
    captionsData: 'alt',
    captionDelay: 250,

});







