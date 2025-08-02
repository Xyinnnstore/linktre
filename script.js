/* particle mesh */
const cvs = document.getElementById('mesh');
const ctx = cvs.getContext('2d');
let W = cvs.width = innerWidth;
let H = cvs.height = innerHeight;

const particles = [];
const count = 100;

function resize() {
  W = cvs.width = innerWidth;
  H = cvs.height = innerHeight;
}
window.addEventListener('resize', resize);

class Particle {
  constructor() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.radius = Math.random() * 1.5 + 0.5;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fill();
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < 0 || this.y > H) this.vy *= -1;
    this.draw();
  }
}

function init() {
  for (let i = 0; i < count; i++) particles.push(new Particle());
}
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => p.update());
}
init();
animate();