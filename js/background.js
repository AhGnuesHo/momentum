const imges = [
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg"
]

const choosenImg = imges[Math.floor(Math.random() * imges.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${choosenImg}`;

document.body.appendChild(bgImage);
bgImage.id = 'bgImage';