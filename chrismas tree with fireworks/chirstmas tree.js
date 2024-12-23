const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const snowflakes = [];
const accumulatedSnow = [];
const fireNumber = 20; // Increased number of particles for more sparks
const textColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
let textColorIndex = 0;

const image1 = new Image();
const image2 = new Image();
const santaImage = new Image();
const snowflakeImage = new Image();
image1.src = 'path/to/image1.png'; // Replace with the actual path to image1
image2.src = 'path/to/image2.png'; // Replace with the actual path to image2
santaImage.src = 'path/to/santa.gif'; // Replace with the actual path to santa image
snowflakeImage.src = 'path/to/snowflake.png'; // Replace with the actual path to snowflake image

image1.onload = () => {
    image1.loaded = true;
};
image2.onload = () => {
    image2.loaded = true;
};

santaImage.onload = () => {
    santaImage.loaded = true;
};

snowflakeImage.onload = () => {
    snowflakeImage.loaded = true;
};

function randColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function makeFullCircleFirework(fire) {
    let color = randColor();
    let velocity = Math.random() * 8 + 8;
    let max = fireNumber * 4;
    for (let i = 0; i < max; i++) {
        let angle = Math.PI * 2 / max * i;
        particles.push({
            x: fire.x,
            y: fire.y,
            color: color,
            velocity: velocity,
            angle: angle,
            life: 100,
            size: 3,
            type: "flare",
            gravity: 0.2,
            friction: 0.98
        });
    }
}

function createFireworkArrow() {
    const fire = {
        x: Math.random() * window.innerWidth, // Randomize the x position
        y: window.innerHeight,
        color: '#ffffff',
        velocity: -10,
        angle: Math.PI / 2,
        life: 50,
        size: 3,
        type: "arrow",
        gravity: 0.1,
        friction: 0.99
    };
    particles.push(fire);
}

function createSnowflake() {
    const snowflake = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 6,
        speed: Math.random() * 1 + 1.5,
        opacity: Math.random() * 0.5 + 0.75
    };
    snowflakes.push(snowflake);
}

function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += Math.cos(p.angle) * p.velocity;
        p.y += Math.sin(p.angle) * p.velocity;
        p.velocity *= p.friction;
        p.y += p.gravity;
        p.life--;
        if (p.life <= 0) {
            if (p.type === "arrow") {
                makeFullCircleFirework(p);
            }
            particles.splice(i, 1);
            i--;
        } else {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    updateSnowflakes();
    drawText();
    drawSanta();
}

function updateSnowflakes() {
    for (let i = 0; i < snowflakes.length; i++) {
        const s = snowflakes[i];
        s.y += s.speed;
        if (s.y > canvas.height) {
            accumulatedSnow.push(s);
            snowflakes.splice(i, 1);
            i--;
        } else {
            ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    drawAccumulatedSnow();
}

function drawAccumulatedSnow() {
    for (let i = 0; i < accumulatedSnow.length; i++) {
        const s = accumulatedSnow[i];
        ctx.globalAlpha = s.opacity;
        ctx.drawImage(snowflakeImage, s.x, canvas.height - s.size, s.size, s.size);
        ctx.globalAlpha = 1.0;
    }
}

function drawAccumulatedSnow() {
    for (let i = 0; i < accumulatedSnow.length; i++) {
        const s = accumulatedSnow[i];
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.beginPath();
        ctx.arc(s.x, canvas.height - s.size, s.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawText() {
    ctx.fillStyle = textColors[textColorIndex];
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Happy New Year 2025 and take care of each other', canvas.width / 2, canvas.height / 2);
    ctx.font = '24px Arial';
    ctx.fillText('Greetings from Jerry, an enthusiastic Back-end Developer from V.Y.P.', canvas.width / 2, canvas.height / 2 + 50);
    textColorIndex = (textColorIndex + 1) % textColors.length;

    // Draw images with adjusted sizes and positions
    if (image1.loaded) {
        const image1Width = 975; // Adjust the width as needed
        const image1Height = image1.height * (image1Width / image1.width); // Maintain aspect ratio
        ctx.drawImage(image1, canvas.width / 1.35 - image1Width - 10, canvas.height / 2 + 70, image1Width, image1Height);
    }
    if (image2.loaded) {
        const image2Width = 180; // Adjust the width as needed
        const image2Height = image2.height * (image2Width / image2.width); // Maintain aspect ratio
        ctx.drawImage(image2, canvas.width / 2 + 400, canvas.height / 2 + 70, image2Width, image2Height);
    }
}

let santaX = Math.random() * canvas.width;
let santaY = Math.random() * canvas.height;
let santaSpeedX = (Math.random() - 0.5) * 4;
let santaSpeedY = (Math.random() - 0.5) * 4;

function drawSanta() {
    if (santaImage.loaded) {
        ctx.drawImage(santaImage, santaX, santaY, 150, 75); // Adjust size as needed
        santaX += santaSpeedX;
        santaY += santaSpeedY;

        // Bounce Santa off the edges
        if (santaX < 0 || santaX > canvas.width - 150) santaSpeedX *= -1;
        if (santaY < 0 || santaY > canvas.height - 75) santaSpeedY *= -1;
    }
}

function animate() {
    updateParticles();
    requestAnimationFrame(animate);
}

// Launch multiple firework arrows at different intervals
setInterval(createFireworkArrow, 100); // Launch a new arrow every 500ms
animate();
// Create snowflakes at intervals
setInterval(createSnowflake, 100); // Create a new snowflake every 100ms
animate();

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});