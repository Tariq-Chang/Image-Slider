import movies from "./data.js"
let image = document.getElementById('slide-image');
let btnLeft = document.getElementById('slide-left');
let btnRight = document.getElementById('slide-right');

let imageUrls = [
  'https://images.pexels.com/photos/9807283/pexels-photo-9807283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2508735/pexels-photo-2508735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2253046/pexels-photo-2253046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];


let index = 0;
image.src = movies[index].Poster;
btnLeft.addEventListener('click', () => {
  function slideLeft() {
    if (index > 0) {
      index--;
      image.src = movies[index].Poster;
    } else {
      index = movies.length - 1;
      image.src = movies[index].Poster;
    }
  }
  console.log(index);
  slideLeft();
});
btnRight.addEventListener('click', () => {
  function slideRight() {
    if (index < movies.length - 1) {
      index++;
      image.src = movies[index].Poster;
    } else {
      index = 0;
      image.src = movies[index].Poster;
    }
  }
  slideRight();
  console.log(index);
});
