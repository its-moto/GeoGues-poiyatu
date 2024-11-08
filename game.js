const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const blockSize = 10; // 1ブロックのサイズ
const noiseScale = 0.05; // ノイズのスケール

// p5.jsのPerlinノイズ関数を使う
function generateTerrain() {
  const terrain = [];
  let xOff = 0; // ノイズのオフセット
  for (let x = 0; x < width / blockSize; x++) {
    // p5.jsのnoise()を使って、0から1までの値を取得
    const heightValue = noise(xOff) * height * 0.5 + (height * 0.25);
    terrain.push(Math.floor(heightValue));
    xOff += noiseScale;
  }
  return terrain;
}

// 地形を描画
function drawTerrain(terrain) {
  for (let x = 0; x < terrain.length; x++) {
    const terrainHeight = terrain[x];
    for (let y = terrainHeight; y < height / blockSize; y++) {
      ctx.fillStyle = "green";
      ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
    }
  }
}

// 描画と更新
function update() {
  ctx.clearRect(0, 0, width, height);
  const terrain = generateTerrain();
  drawTerrain(terrain);
}

update();


let player = { x: 50, y: 50, width: 10, height: 10 };

function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

document.addEventListener('keydown', function(event) {
  const speed = 5;
  switch (event.key) {
    case 'ArrowLeft':
      player.x -= speed;
      break;
    case 'ArrowRight':
      player.x += speed;
      break;
    case 'ArrowUp':
      player.y -= speed;
      break;
    case 'ArrowDown':
      player.y += speed;
      break;
  }
  update();
});

function update() {
  ctx.clearRect(0, 0, width, height);
  drawTerrain(terrain);
  drawPlayer();
}

update();
