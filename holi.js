const text = document.getElementById('holiText');
const colors = ['red', 'yellow', 'green', 'blue', 'pink', 'purple', 'orange', 'lime', 'cyan'];

function changeColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    text.style.color = randomColor;
}

setInterval(changeColor, 500);


// Colorful Cursor Effect
document.addEventListener('mousemove', (e) => {
    let cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    cursor.style.backgroundColor = randomColor;
    cursor.style.boxShadow = 0 0 10px ${randomColor}, 0 0 20px ${randomColor}, 0 0 30px ${randomColor};
    
    setTimeout(() => {
        cursor.remove();
    }, 300); // 300ms ke baad cursor effect gayab hoga
});