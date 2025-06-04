const animatedBg = document.getElementById("animatedBg");
if (animatedBg) {
  const numberOfBubbles = 20;
  for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement("div");
    const size = Math.random() * 150 + 50;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
    bubble.style.animationDelay = `${Math.random() * 2}s`;
    animatedBg.appendChild(bubble);
  }
}
