
setTimeout(() => {
  let parent = document.querySelector('#parent');
  const p = document.createElement("p");
  let elem = parent.querySelector('.text');
  p.innerText = "viglina@gmail.com";
  parent.appendChild(p);
}, 10000);

