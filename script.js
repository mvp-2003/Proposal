const button2 = document.getElementById('btn2');
button2.addEventListener('mouseover', function() {
    button2.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button2.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

document.getElementById('btn1').addEventListener('click', function() {
    alert('You clicked Yes!');
});