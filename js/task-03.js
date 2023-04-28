const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const galleryContainer = document.querySelector('.gallery');
const imagesHTML = images.map(image => `
  <li>
    <img src="${image.url}" alt="${image.alt}">
  </li>
`);
const galleryHTML = imagesHTML.join('');
galleryContainer.insertAdjacentHTML('beforeend', galleryHTML);


const style = document.createElement('style');
style.textContent = `
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }

  .gallery li {
    margin-bottom: 20px;
  }

  .gallery img {
    max-width: 100%;
  }
`;

document.head.appendChild(style);