const wrapperRef = document.getElementById("wrapper");

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function onClick(e) {
  const currentBlock = e.target;
  currentBlock.style.backgroundColor = getRandomColor();
}

wrapperRef.addEventListener("click", onClick);
