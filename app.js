const car = document.getElementById('car');
const gamearea = document.getElementById('game_area');

let Carx = 375;
let Cary = 480;

const carspeed = 20;

// Handle keydown events
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === 'ArrowUp') {
        Cary = Math.max(Cary - carspeed, 0); // Move up, but don't exceed the top boundary
    } else if (key === 'ArrowDown') {
        Cary = Math.min(Cary + carspeed, gamearea.offsetHeight - car.offsetHeight); // Move down, but stay within the game area
    } else if (key === 'ArrowRight') {
        Carx = Math.min(Carx + carspeed, gamearea.offsetWidth - car.offsetWidth); // Move right, but stay within the game area
    } else if (key === 'ArrowLeft') {
        Carx = Math.max(Carx - carspeed, 0); // Move left, but don't exceed the left boundary
    } else {
        return; // Ignore other keys
    }

    // Update the car's position
    car.style.left = Carx + 'px'; // Update horizontal position
    car.style.top = Cary + 'px'; // Update vertical position
});
