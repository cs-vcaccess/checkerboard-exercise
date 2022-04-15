const body = document.body;
body.style.margin = "none"
function f() {
  return Math.floor(Math.random() * 255)
}
for (i=1; i<55; i++) {
  let tile = document.createElement('randomcolors')
  tile.style.width = "11.1%";
  tile.style.height = "11.1%";
  tile.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  tile.style.float = 'left';
  tile.style.paddingBottom = '11.1%'
  document.body.appendChild(tile)
}

for (i=1; i<55; i++) {
  let randDeg = Math.floor(Math.random() * 90)
  let tile2 = document.createElement('gradient')
  tile2.style.width = "11.1%";
  tile2.style.height = "11.1%";
tile2.style.background = `linear-gradient(${randDeg}deg, rgba(${f()},${f()},${f()},1) 0%, rgba(${f()},${f()},${f()},1) 35%, rgba(${f()},${f()},${f()},1) 100%)`
  tile2.style.float = 'left';
  tile2.style.paddingBottom = '11.1%'
  document.body.appendChild(tile2)
}

for (i=1; i<55; i++) {
  let randDeg = Math.floor(Math.random() * 360)
  let tile3 = document.createElement('flashing')
  tile3.classList.add('third');
  tile3.style.width = "11.1%";
  tile3.style.height = "11.1%";
  tile3.style.float = 'left';
  tile3.style.paddingBottom = '11.1%'
  document.body.appendChild(tile3)

}

setInterval(() => {
  document.querySelectorAll(".third").forEach((e) => {
    let randDeg = Math.floor(Math.random() * 360)
    e.style.background = `linear-gradient(${randDeg}deg, rgba(${f()},${f()},${f()},1) 0%, rgba(${f()},${f()},${f()},1) 35%, rgba(${f()},${f()},${f()},1) 100%)`

  });

}, 2000)
