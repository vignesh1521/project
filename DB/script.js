let server = new URL(location)
server.port = 8080
async function renderMatches(matches) {
    const matchesSection = document.querySelector(".match");


    matches.forEach((match) => {
        // Create match card template
        const matchCard = `
        <section class="matches">
            <div class="match-card" id="match-${match.match_id}">
                <div class="match-info">
                    <div class="team">
                        <div class="img_container">
                            <img src="${match.team1_img}" alt="Team 1">
                        </div>
                        <div class="team_details">
                            <h3>${match.team1_nick}</h3>
                        </div>
                        <p class="f_team">${match.team1_name}</p>
                    </div>
                    <div class="match-time">
                        <p>Match starts in</p>
                        <h3>${timeLeft(match.time)}</h3>
                    </div>
                    <div class="team">
                        <div class="img_container2">
                            <img src="${match.team2_img}" alt="Team 2">
                        </div>
                        <div class="team2_details">
                            <h3>${match.team2_nick}</h3>
                        </div>
                        <p class="s_team">${match.team2_name}</p>
                    </div>
                </div>
                <div class="prize-info">
                    <span><span class="highlight">Prize Pool:</span> ${match.prize_pool}</span>
                    <span class="prize"><span class="highlight">Max Prize:</span> ${match.max_prize}</span>
                    <div class="progress-bar">
                        <div class="filled-bar"></div>
                    </div>
                    <span class="spots">${formatWithComma((match.spots - match.spots_filled))} spots left of ${formatWithComma(match.spots)}</span>
                </div>
                <div class="view-contests">
                    <a class="view" href="//${location.host}/contest/?id=${match.match_id}">View All Contests</a>
                </div>
            </div>
    </section>
        `;

        matchesSection.innerHTML += matchCard;
    });
}

function timeLeft(targetDateTime) {
    const now = new Date();
    const targetDate = new Date(targetDateTime);
    if (targetDate < now) {
        return "On going";
    }
    const diffMs = targetDate - now;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return (`${diffHours}h ${diffMinutes}m`);
}
function formatWithComma(number) {
    return number.toLocaleString()
}

server.pathname='/api/matches'
fetch(server, {
    headers: {
        "Content-Type": 'application/json',
        "Authorization": localStorage.getItem('auth_token') ? `Bearer ${localStorage.getItem('auth_token')}` : ''
    }
}).then((res) => {
    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return res.json()
}
).then((data) => {
    if(data.status=="failed"){
        window.location='/login';
        return;
    }
    renderMatches(data)
})


