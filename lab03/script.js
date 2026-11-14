const parkingCoordinates = [
    // Grupo 1
    { top: '45%', left: '16%' }, { top: '47.5%', left: '17%' }, { top: '50%', left: '18%' },
    { top: '52.5%', left: '19%' }, { top: '55%', left: '20%' }, { top: '57.5%', left: '21%' },
    { top: '60%', left: '22%' }, { top: '62.5%', left: '23%' }, { top: '65%', left: '24%' },
    { top: '67.5%', left: '25%' }, { top: '70%', left: '26%' }, { top: '72.5%', left: '27%' },
    { top: '75%', left: '28%' }, { top: '77.5%', left: '29%' }, { top: '80%', left: '30%' },
    { top: '82.5%', left: '31%' }, { top: '85%', left: '32%' }, { top: '87.5%', left: '33%' },

    { top: '42.5%', left: '20%' }, { top: '45%', left: '21%' }, { top: '47.5%', left: '22%' },
    { top: '50%', left: '23%' }, { top: '52.5%', left: '24%' }, { top: '55%', left: '25%' },
    { top: '57.5%', left: '26%' }, { top: '60%', left: '27%' }, { top: '62.5%', left: '28%' },
    { top: '65%', left: '29%' }, { top: '67.5%', left: '30%' }, { top: '70%', left: '31%' },
    { top: '72.5%', left: '32%' }, { top: '75%', left: '33%' }, { top: '77.5%', left: '34%' },
    { top: '80%', left: '35%' }, { top: '82.5%', left: '36%' }, { top: '85%', left: '37%' },

    // Grupo 2
    { top: '37.5%', left: '29%' }, { top: '40%', left: '30%' }, { top: '42.5%', left: '31%' },
    { top: '45%', left: '32%' }, { top: '47.5%', left: '33%' }, { top: '50%', left: '34%' },
    { top: '52.5%', left: '35%' }, { top: '55%', left: '36%' }, { top: '57.5%', left: '37%' },
    { top: '60%', left: '38%' }, { top: '62.5%', left: '39%' }, { top: '65%', left: '40%' },
    { top: '67.5%', left: '41%' }, { top: '70%', left: '42%' }, { top: '72.5%', left: '43%' },
    { top: '75%', left: '44%' }, { top: '77.5%', left: '45%' }, { top: '80%', left: '46%' },

    { top: '35%', left: '33%' }, { top: '37.5%', left: '34%' }, { top: '40%', left: '35%' },
    { top: '42.5%', left: '36%' }, { top: '45%', left: '37%' }, { top: '47.5%', left: '38%' },
    { top: '50%', left: '39%' }, { top: '52.5%', left: '40%' }, { top: '55%', left: '41%' },
    { top: '57.5%', left: '42%' }, { top: '60%', left: '43%' }, { top: '62.5%', left: '44%' },
    { top: '65%', left: '45%' }, { top: '67.5%', left: '46%' }, { top: '70%', left: '47%' },
    { top: '72.5%', left: '48%' }, { top: '75%', left: '49%' }, { top: '77.5%', left: '50%' },

    // Grupo 3
    { top: '30%', left: '42%' }, { top: '32.5%', left: '43%' }, { top: '35%', left: '44%' },
    { top: '37.5%', left: '45%' }, { top: '40%', left: '46%' }, { top: '42.5%', left: '47%' },
    { top: '45%', left: '48%' }, { top: '47.5%', left: '49%' }, { top: '50%', left: '50%' },
    { top: '52.5%', left: '51%' }, { top: '55%', left: '52%' }, { top: '57.5%', left: '53%' },
    { top: '60%', left: '54%' }, { top: '62.5%', left: '55%' }, { top: '65%', left: '56%' },
    { top: '67.5%', left: '57%' }, { top: '70%', left: '58%' }, { top: '72.5%', left: '59%' },

    { top: '27.5%', left: '46%' }, { top: '30%', left: '47%' }, { top: '32.5%', left: '48%' },
    { top: '35%', left: '49%' }, { top: '37.5%', left: '50%' }, { top: '40%', left: '51%' },
    { top: '42.5%', left: '52%' }, { top: '45%', left: '53%' }, { top: '47.5%', left: '54%' },
    { top: '50%', left: '55%' }, { top: '52.5%', left: '56%' }, { top: '55%', left: '57%' },
    { top: '57.5%', left: '58%' }, { top: '60%', left: '59%' }, { top: '62.5%', left: '60%' },
    { top: '65%', left: '61%' }, { top: '67.5%', left: '62%' }, { top: '70%', left: '63%' },

    // Grupo 4
    { top: '21%', left: '54%' }, { top: '23.5%', left: '55%' }, { top: '26%', left: '56%' },
    { top: '28.5%', left: '57%' }, { top: '31%', left: '58%' }, { top: '33.5%', left: '59%' },
    { top: '36%', left: '60%' }, { top: '38.5%', left: '61%' }, { top: '41%', left: '62%' },
    { top: '43.5%', left: '63%' }, { top: '46%', left: '64%' }, { top: '48.5%', left: '65%' },
    { top: '51%', left: '66%' }, { top: '53.5%', left: '67%' }, { top: '56%', left: '68%' },
    { top: '58.5%', left: '69%' }, { top: '61%', left: '70%' }, { top: '63.5%', left: '71%' },

    { top: '18.5%', left: '58%' }, { top: '21%', left: '59%' }, { top: '23.5%', left: '60%' },
    { top: '26%', left: '61%' }, { top: '28.5%', left: '62%' }, { top: '31%', left: '63%' },
    { top: '33.5%', left: '64%' }, { top: '36%', left: '65%' }, { top: '38.5%', left: '66%' },
    { top: '41%', left: '67%' }, { top: '43.5%', left: '68%' }, { top: '46%', left: '69%' },
    { top: '48.5%', left: '70%' }, { top: '51%', left: '71%' }, { top: '53.5%', left: '72%' },
    { top: '56%', left: '73%' }, { top: '58.5%', left: '74%' }, { top: '61%', left: '75%' },

    // Grupo 5
    { top: '12.5%', left: '66%' }, { top: '15%', left: '67%' }, { top: '17.5%', left: '68%' },
    { top: '20%', left: '69%' }, { top: '22.5%', left: '70%' }, { top: '25%', left: '71%' },
    { top: '27.5%', left: '72%' }, { top: '30%', left: '73%' }, { top: '32.5%', left: '74%' },
    { top: '35%', left: '75%' }, { top: '37.5%', left: '76%' }, { top: '40%', left: '77%' },
    { top: '42.5%', left: '78%' }, { top: '45%', left: '79%' }, { top: '47.5%', left: '80%' },
    { top: '50%', left: '81%' }, { top: '52.5%', left: '82%' }, { top: '55%', left: '83%' },

    { top: '10%', left: '70%' }, { top: '12.5%', left: '71%' }, { top: '15%', left: '72%' },
    { top: '17.5%', left: '73%' }, { top: '20%', left: '74%' }, { top: '22.5%', left: '75%' },
    { top: '25%', left: '76%' }, { top: '27.5%', left: '77%' }, { top: '30%', left: '78%' },
    { top: '32.5%', left: '79%' }, { top: '35%', left: '80%' }, { top: '37.5%', left: '81%' },
    { top: '40%', left: '82%' }, { top: '42.5%', left: '83%' }, { top: '45%', left: '84%' },
    { top: '47.5%', left: '85%' }, { top: '50%', left: '86%' }, { top: '52.5%', left: '87%' }
];
const TOTAL_SPACES = parkingCoordinates.length;
const parkingLot = document.getElementById('parking-lot');

const totalEl = document.getElementById('total-spaces');
const occupiedEl = document.getElementById('occupied-spaces');
const availableEl = document.getElementById('available-spaces');
const percentageEl = document.getElementById('occupancy-percentage');

let spots = [];

function initParking() {
    totalEl.textContent = TOTAL_SPACES;

    parkingCoordinates.forEach((coord) => {
        const spot = document.createElement('div');
        spot.classList.add('spot');

        spot.style.top = coord.top;
        spot.style.left = coord.left;

        const isOccupied = Math.random() > 0.5;
        spot.classList.add(isOccupied ? 'occupied' : 'available');

        spot.addEventListener('click', () => {
            toggleSpotStatus(spot);
            updateDashboard();
        });

        parkingLot.appendChild(spot);
        spots.push(spot);
    });

    updateDashboard();
}

function toggleSpotStatus(spot) {
    if (spot.classList.contains('available')) {
        spot.classList.remove('available');
        spot.classList.add('occupied');
    } else {
        spot.classList.remove('occupied');
        spot.classList.add('available');
    }
}

function updateDashboard() {
    const occupiedCount = document.querySelectorAll('.spot.occupied').length;
    const availableCount = TOTAL_SPACES - occupiedCount;
    const percentage = Math.round((occupiedCount / TOTAL_SPACES) * 100);

    occupiedEl.textContent = occupiedCount;
    availableEl.textContent = availableCount;
    percentageEl.textContent = percentage + '%';
}

function simulateSensors() {
    setInterval(() => {
        const randomSpotIndex = Math.floor(Math.random() * TOTAL_SPACES);
        const spot = spots[randomSpotIndex];

        toggleSpotStatus(spot);
        updateDashboard();
    }, 3000);
}

initParking();
simulateSensors();
