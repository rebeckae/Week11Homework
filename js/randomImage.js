const myButton = document.querySelector('button');
const image = document.querySelector('.img');
const images = ["Pilt1.jpeg", "Pilt2.jpeg", "Pilt3.jpeg", "Pilt4.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage () {

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = images[randomIndex];
}

