setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  heart.style.fontSize = Math.random() * 20 + 12 + "px";
  heart.style.opacity = Math.random();
  heart.style.color = "#ff4d6d";
  heart.style.animation = "float 5s linear";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 1200);

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
