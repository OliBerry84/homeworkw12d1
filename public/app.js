document.addEventListener('DOMContentLoaded', () => {

  const cats = document.querySelector('#cats');

  const newCat = document.createElement('ul');

  const catName = document.createElement('li');
  catName.textContent = 'Name: Oli'

  const catFavFood = document.createElement('li');
  catFavFood.textContent = 'Favourite Food: Taco-Fries'

  const image = document.createElement('li');

  const catImage = document.createElement('img')
  catImage.src = 'http://www.sub.tv/wp-content/uploads/2015/01/cattoilet1.png';
  catImage.width = 500;


  cats.appendChild(newCat);
  newCat.appendChild(catName);
  newCat.appendChild(catFavFood);
  newCat.appendChild(image);
  image.appendChild(catImage);

}); // DOM ender


const createNewCat = function(catName, catFavFood, catImage, cats){
  const catName = document.createElement('li')
  catName.textContent = catName;
  const catFavFood = document.createElement('li')
  catFavFood.textContent = catFavfood
  const image = document.createElement('li')
  const catImage = document.createElement('img');
  catImage.src = catImage
  cats.appendChild(newCat);
  newCat.appendChild(catName);
  newCat.appendChild(catFavFood);
  newCat.appendChild(image);
  image.appendChild(catImage);
}
