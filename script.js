const button2 = document.getElementById('btn2');
button2.addEventListener('mouseover', function() {
    button2.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button2.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('btn1').style.backgroundColor = 'red';
});

function createHeart() {
    const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    heart.setAttribute("viewBox", "0 0 32 29.6");
    heart.classList.add("heart");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M16,29.6C12.4,25.9,2,15.9,2,9.8C2,5.4,5.4,2,9.8,2c2.7,0,5.1,1.3,6.7,3.4c1.6-2.1,4-3.4,6.7-3.4c4.4,0,7.8,3.4,7.8,7.8c0,6.1-10.4,16.1-14,19.8L16,29.6L16,29.6z");
    heart.appendChild(path);

    heart.style.left = `${Math.random() * 100}%`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 50000);
}

setInterval(createHeart, 500);

function createStaticHeart() {
    const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    heart.setAttribute("viewBox", "0 0 32 29.6");
    heart.classList.add("heart");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M16,29.6C12.4,25.9,2,15.9,2,9.8C2,5.4,5.4,2,9.8,2c2.7,0,5.1,1.3,6.7,3.4c1.6-2.1,4-3.4,6.7-3.4c4.4,0,7.8,3.4,7.8,7.8c0,6.1-10.4,16.1-14,19.8L16,29.6L16,29.6z");
    heart.appendChild(path);

    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;

    document.body.appendChild(heart);
}

window.onload = function() {
    for(let i = 0; i < 20; i++) {
        createStaticHeart();
    }
};