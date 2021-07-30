let NarutoImages = [
    "https://www.seikowatches.com/global-en/products/5sports/special/naruto_boruto/assets/image/naruto/caracter_naruto.png",
    "https://variety.com/wp-content/uploads/2015/07/naruto_movie-lionsgate.jpg?w=681&h=383&crop=1",
    "https://www.otakukan.com/wp-content/uploads/2019/07/naruto-1.jpg",
    "https://i.pinimg.com/originals/d8/5f/8e/d85f8e912492243e5733d2e60edc7c82.png",
    "https://www.looper.com/img/gallery/how-old-was-naruto-uzumaki-in-naruto-and-shippuden/l-intro-1623872824.jpg",
    "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F04%2Fnaruto-shippuden-director-animator-scriptwriter-osamu-kobayashi-dead-info-0.jpg?w=960&cbr=1&q=90&fit=max",
    "https://media.distractify.com/brand-img/wN0Hm22u0/0x0/watch-naruto-in-order-1598141302084.jpg",
]
document.title = "Naruto Uzumaki";

const imgs = document.querySelectorAll("img");
for (let i = 0; i < imgs.length; i++) {
    const randomImage = Math.floor(Math.random() * NarutoImages.length);
    imgs[i].src = NarutoImages[randomImage];
}

const h2 = document.querySelectorAll("h2");
for (let i = 0; i < h2.length; i++) {
    h2[i].textContent = "Naruto Uzumaki";
}

