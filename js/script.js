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

const canvas = document.querySelector("#home");

// Funkcja pobierająca losowy obraz
function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

// Funkcja wyświetlająca obraz
function showImage(imageUrl) {
  const image = new Image();

  image.src = imageUrl;

  image.onload = function () {
    canvas.appendChild(image);
  };

  image.src = imageUrl;
}

// Obsługa zdarzenia kliknięcia myszy
document.addEventListener("click", function (event) {
  showImage(getRandomImage());
});
