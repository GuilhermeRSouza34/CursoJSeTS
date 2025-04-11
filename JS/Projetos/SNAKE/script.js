const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20; // Tamanho de cada quadrado
let snake = [{ x: 9 * box, y: 9 * box }]; // Posição inicial da cobra
let direction = "RIGHT"; // Direção inicial
let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box,
};

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    else if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "green" : "lightgreen";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "white";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Posição da cabeça da cobra
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Atualiza a posição com base na direção
    if (direction === "UP") snakeY -= box;
    if (direction === "DOWN") snakeY += box;
    if (direction === "LEFT") snakeX -= box;
    if (direction === "RIGHT") snakeX += box;

    // Verifica se a cobra comeu a comida
    if (snakeX === food.x && snakeY === food.y) {
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box,
        };
    } else {
        snake.pop(); // Remove a última parte da cobra
    }

    // Adiciona nova cabeça
    const newHead = { x: snakeX, y: snakeY };

    // Verifica colisões com a borda ou com o próprio corpo
    if (
        snakeX < 0 ||
        snakeY < 0 ||
        snakeX >= canvas.width ||
        snakeY >= canvas.height ||
        snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
    ) {
        clearInterval(game); // Finaliza o jogo
        alert("Game Over!");
    }

    snake.unshift(newHead);
}

// Atualiza o jogo a cada 100ms
const game = setInterval(draw, 100);
