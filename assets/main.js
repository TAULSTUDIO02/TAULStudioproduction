document.addEventListener('DOMContentLoaded', function() {
    const overlayElement = document.getElementById('overlay');
    const scoreboardElement = document.getElementById('scoreboard');
    const aliveStatusElement = document.getElementById('alive-status');

    function updateOverlay(data) {
        overlayElement.innerHTML = `
            <h1>${data.title}</h1>
            <p>${data.description}</p>
        `;
    }

    function updateScoreboard(data) {
        scoreboardElement.innerHTML = data.teams.map(team => `
            <div class="team">
                <span>${team.name}</span>
                <span>${team.score}</span>
            </div>
        `).join('');
    }

    function updateAliveStatus(data) {
        aliveStatusElement.innerHTML = data.participants.map(participant => `
            <div class="participant">
                <span>${participant.name}</span>
                <span>${participant.status}</span>
            </div>
        `).join('');
    }

    function fetchData() {
        // Simulated fetch calls for demonstration purposes
        const overlayData = { title: 'Live Broadcast', description: 'Welcome to the event!' };
        const scoreboardData = { teams: [{ name: 'Team A', score: 10 }, { name: 'Team B', score: 8 }] };
        const aliveStatusData = { participants: [{ name: 'Player 1', status: 'Alive' }, { name: 'Player 2', status: 'Eliminated' }] };

        updateOverlay(overlayData);
        updateScoreboard(scoreboardData);
        updateAliveStatus(aliveStatusData);
    }

    setInterval(fetchData, 5000); // Update every 5 seconds
    fetchData(); // Initial fetch
});