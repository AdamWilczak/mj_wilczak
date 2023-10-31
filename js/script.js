const images = [
  "pic/randomPic/48.jpg",
  "pic/randomPic/49.jpg",
  "pic/randomPic/50.jpg",
  "pic/randomPic/51.jpg",
  "pic/randomPic/52.jpg",
  "pic/randomPic/55.jpg",
  "pic/randomPic/57.jpg",
  "pic/randomPic/58.jpg",
  "pic/randomPic/59.jpg",
  "pic/randomPic/60.jpg",
  "pic/randomPic/61.jpg",
  "pic/randomPic/62.jpg",
  "pic/randomPic/63.jpg",
  "pic/randomPic/90.jpg",
  "pic/randomPic/julka-portret.jpg",
];

const showImage = function () {
  // Pobierz losowy obraz z tablicy
  const image = images[Math.floor(Math.random() * images.length)];

  // Wyświetl obraz w wskazanym miejscu
  const imageContainer = document.getElementById("cavanas");
  const img = document.createElement("img");
  img.src = image;
  
  imageContainer.appendChild(img);
};

// Wyświetl losowy obraz po załadowaniu strony
document.addEventListener("DOMContentLoaded", showImage);
