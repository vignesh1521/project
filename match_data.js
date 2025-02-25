const { error, log } = require('console');
const fs = require('fs');
const { db } = require('./db');


const readData = () => {
    if (fs.existsSync('match_data.json')) {
        const data = fs.readFileSync('match_data.json');
        return JSON.parse(data);
    }
    return [];
};
const writeData = (data) => {
    fs.writeFileSync('match_data.json', JSON.stringify(data, null, 2));
};
const read_upcoming_match_data = () => {
    if (fs.existsSync('upcoming_match_data.json')) {
        const data = fs.readFileSync('upcoming_match_data.json');
        return JSON.parse(data);
    }
    return [];
};
const write_upcoming_match_data = (data) => {
    fs.writeFileSync('upcoming_match_data.json', JSON.stringify(data, null, 2));
};


let matchData = {
    "msg": "Data found.",
    "status": true,
    "data": {
        "1": [
            {
                "overs": [
                    "4",
                    '2',
                    '1',
                    '6'
                ],
                "team": {
                    "over": 31,
                    "cr_rate": "3.93",
                    "bowler": "Moises Henriques",
                    "runs": 13,
                    "score": "118-4",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "4",
                    "2",
                    "0",
                    "0",
                    "0",
                    "0",
                    "1"
                ],
                "team": {
                    "over": 30,
                    "cr_rate": "3.93",
                    "bowler": "Moises Henriques",
                    "runs": 5,
                    "score": "118-4",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "W",
                    "1",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 29,
                    "cr_rate": "3.90",
                    "bowler": "Ben Dwarshuis",
                    "runs": 2,
                    "score": "113-4",
                    "wkts": 1,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "0",
                    "1",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 28,
                    "cr_rate": "3.96",
                    "bowler": "Moises Henriques",
                    "runs": 1,
                    "score": "111-3",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "W",
                    "WB",
                    "4",
                    "4",
                    "0",
                    "1"
                ],
                "team": {
                    "over": 27,
                    "cr_rate": "4.07",
                    "bowler": "Ben Dwarshuis",
                    "runs": 10,
                    "score": "110-3",
                    "wkts": 1,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "1",
                    "1",
                    "0",
                    "0",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 26,
                    "cr_rate": "4.00",
                    "bowler": "Chris Green",
                    "runs": 3,
                    "score": "104-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "WB",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 25,
                    "cr_rate": "4.04",
                    "bowler": "Liam Hatcher",
                    "runs": 1,
                    "score": "101-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "1",
                    "0",
                    "1",
                    "1",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 24,
                    "cr_rate": "4.00",
                    "bowler": "Chris Green",
                    "runs": 4,
                    "score": "96-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "1",
                    "0",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 23,
                    "cr_rate": "4.00",
                    "bowler": "Liam Hatcher",
                    "runs": 1,
                    "score": "92-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "1",
                    "0",
                    "0",
                    "0",
                    "0",
                    "1"
                ],
                "team": {
                    "over": 22,
                    "cr_rate": "4.14",
                    "bowler": "Chris Green",
                    "runs": 2,
                    "score": "91-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "1",
                    "0",
                    "0",
                    "2",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 21,
                    "cr_rate": "4.24",
                    "bowler": "Liam Hatcher",
                    "runs": 4,
                    "score": "89-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "0",
                    "1",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 20,
                    "cr_rate": "4.25",
                    "bowler": "Charlie Anderson",
                    "runs": 2,
                    "score": "85-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "1",
                    "0",
                    "4",
                    "0",
                    "3",
                    "0"
                ],
                "team": {
                    "over": 19,
                    "cr_rate": "4.37",
                    "bowler": "Liam Hatcher",
                    "runs": 8,
                    "score": "83-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "1",
                    "4",
                    "0",
                    "4",
                    "0",
                    "1"
                ],
                "team": {
                    "over": 18,
                    "cr_rate": "4.17",
                    "bowler": "Charlie Anderson",
                    "runs": 10,
                    "score": "75-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "1",
                    "0",
                    "0",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 17,
                    "cr_rate": "3.82",
                    "bowler": "Jack Edwards",
                    "runs": 2,
                    "score": "65-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "1",
                    "0",
                    "0",
                    "1",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 16,
                    "cr_rate": "3.94",
                    "bowler": "Charlie Anderson",
                    "runs": 2,
                    "score": "63-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "1",
                    "0",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 15,
                    "cr_rate": "4.07",
                    "bowler": "Jack Edwards",
                    "runs": 1,
                    "score": "61-2",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "0",
                    "W",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 14,
                    "cr_rate": "4.29",
                    "bowler": "Moises Henriques",
                    "runs": 0,
                    "score": "60-2",
                    "wkts": 1,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "4",
                    "0",
                    "1",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 13,
                    "cr_rate": "4.62",
                    "bowler": "Jack Edwards",
                    "runs": 5,
                    "score": "60-1",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "4",
                    "2",
                    "2",
                    "0",
                    "0",
                    "1",
                    "2"
                ],
                "team": {
                    "over": 12,
                    "cr_rate": "4.58",
                    "bowler": "Moises Henriques",
                    "runs": 11,
                    "score": "55-1",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 11,
                    "cr_rate": "4.18",
                    "bowler": "Jack Edwards",
                    "runs": 0,
                    "score": "46-1",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "0",
                    "0",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 10,
                    "cr_rate": "4.60",
                    "bowler": "Moises Henriques",
                    "runs": 1,
                    "score": "46-1",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "1",
                    "1",
                    "4",
                    "0",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 9,
                    "cr_rate": "5.00",
                    "bowler": "Jack Edwards",
                    "runs": 7,
                    "score": "45-1",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "4",
                    "1",
                    "0",
                    "W"
                ],
                "team": {
                    "over": 8,
                    "cr_rate": "4.75",
                    "bowler": "Moises Henriques",
                    "runs": 5,
                    "score": "38-1",
                    "wkts": 1,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "2",
                    "0",
                    "4",
                    "0",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 7,
                    "cr_rate": "4.71",
                    "bowler": "Ben Dwarshuis",
                    "runs": 7,
                    "score": "33-0",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "4",
                    "0",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 6,
                    "cr_rate": "4.33",
                    "bowler": "Charlie Anderson",
                    "runs": 5,
                    "score": "26-0",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "4",
                    "0",
                    "4",
                    "1",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 5,
                    "cr_rate": "4.20",
                    "bowler": "Ben Dwarshuis",
                    "runs": 9,
                    "score": "21-0",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "0",
                    "0",
                    "WB",
                    "1",
                    "3",
                    "WB"
                ],
                "team": {
                    "over": 4,
                    "cr_rate": "3.00",
                    "bowler": "Charlie Anderson",
                    "runs": 6,
                    "score": "12-0",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "1",
                    "0",
                    "1",
                    "0"
                ],
                "team": {
                    "over": 3,
                    "cr_rate": "2.00",
                    "bowler": "Ben Dwarshuis",
                    "runs": 2,
                    "score": "6-0",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "0",
                    "2",
                    "0",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 2,
                    "cr_rate": "2.00",
                    "bowler": "Charlie Anderson",
                    "runs": 2,
                    "score": "4-0",
                    "wkts": 0,
                    "team": "TAS"
                }
            },
            {
                "overs": [
                    "0",
                    "2",
                    "0",
                    "0",
                    "0",
                    "0"
                ],
                "team": {
                    "over": 1,
                    "cr_rate": "2.00",
                    "bowler": "Ben Dwarshuis",
                    "runs": 2,
                    "score": "2-0",
                    "wkts": 0,
                    "team": "TAS"
                }
            }
        ]
    }
}
let matchInfo = {
    "msg": "Data found.",
    "status": true,
    "data": [
        {
            "max_rate": 1.15,
            "venue": "Bellerive Oval, Hobart",
            "match_status": "Live",
            "s_ovr": "",
            "venue_id": 22,
            "series": "Australia Domestic One-Day Cup 2024-25",
            "batting_team": "404",
            "team_a_img": "https:\/\/cricketchampion.co.in\/webroot\/img\/teams\/502355917_team.png",
            "toss": "New South Wales won the toss and elected to bowl",
            "match_time": "05:35 AM",
            "match_type": "ODI",
            "team_a_scores_over": [
                {
                    "over": "47.1",
                    "score": "205-10"
                }
            ],
            "fav_team": "NSW",
            "team_b_id": 404,
            "team_b_score": {
                "2": {
                    "ball": 56,
                    "wicket": 2,
                    "over": "9.2",
                    "score": 45
                },
                "team_id": 404
            },
            "match_id": 5768,
            "matchs": "15th Match",
            "is_hundred": 1,
            "team_a_over": "47.1",
            "team_b_scores_over": [
                {
                    "over": "9.2",
                    "score": "45-2"
                }
            ],
            "team_b_over": "9.2",
            "team_a_id": 407,
            "match_date": "05-Feb",
            "s_min": "0",
            "need_run_ball": "New South Wales NEED 161 RUNS IN 40.4 OVERS TO WIN",
            "team_a_scores": "205-10",
            "min_rate": 1.14,
            "team_a": "Tasmania",
            "current_inning": "2",
            "balling_team": "407",
            "trail_lead": "",
            "team_b_short": "NSW",
            "team_b": "New South Wales",
            "series_type": "Domestic",
            "team_b_scores": "405-2",
            "s_max": "0",
            "session": null,
            "team_a_short": "TAS",
            "team_a_score": {
                "1": {
                    "ball": 283,
                    "wicket": "10",
                    "over": "47.1",
                    "score": "205"
                },
                "team_id": 407
            },
            "result": "",
            "series_id": 418,
            "team_b_img": "https:\/\/cricketchampion.co.in\/webroot\/img\/teams\/1864323817_team.jpg"
        }
    ]
}
let data = {}
function match_info() {
    data["matchData"] = matchData
    data["matchInfo"] = matchInfo
    return data
}
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '8c2f175bb9msh42d2c4435c1685cp15de67jsnf4fa85f71f8a',
        'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
    }
};


async function update_matches() {
    const url_for_live = 'https://cricket-live-line1.p.rapidapi.com/liveMatches';
    const url_for_overs = 'https://cricket-live-line1.p.rapidapi.com/match/6651/overHistory';
    try {
        const live_result = await fetch(url_for_live, options);
        const result = await live_result.json();
        const over_result = await fetch(url_for_overs, options)
        const over = await over_result.json();
        let data = {}
        data["matchInfo"] = result
        data["matchData"] = over
        writeData(data)
        console.log("match data logged");

        return result
    } catch (error) {
        console.error(error);
    }
}


async function upcoming_matches(matchList) {
    let data = read_upcoming_match_data().data;

    if (matchList) {
        let m_data = data.filter(match => matchList.includes(match.match_id));
        return m_data.length ? m_data : 0;
    } else {
        let match_query = "SELECT match_id FROM matches WHERE 1";

        // Use a promise to handle db.query asynchronously
        const result = await new Promise((resolve, reject) => {
            db.query(match_query, (error, results) => {
                if (error) reject(error);
                else resolve(results);
            });
        });

        let match_array = result.map(match => match.match_id);
        let m_data = data.filter(match => match_array.includes(match.match_id));
        return m_data.length ? m_data : 0;
    }
}

async function update_upcoming_matches() {
    const urlForUpcomingMatches = 'https://cricket-live-line1.p.rapidapi.com/upcomingMatches';
    try {
        const upcomingMathches = await fetch(urlForUpcomingMatches, options)
        let result = await upcomingMathches.json()
        write_upcoming_match_data(result)

    } catch (err) {
        console.log(err);

    }
}
//update_upcoming_matches()
upcoming_matches();
//update_matches()
setInterval(() => {
    //update_matches()
}, 30000)
function groupAndDisplayPrizes(prizeDistribution) {
    /**
     * Group and display prizes in the desired format.
     * @param {Object} prizeDistribution - An object containing the prize distribution for each rank.
     */
    const groupedPrizes = new Map();

    // Group ranks by prize using Map
    for (const [rankStr, prize] of Object.entries(prizeDistribution)) {
        const rank = parseInt(rankStr);

        // Initialize the array for the prize if it doesn't exist
        if (!groupedPrizes.has(prize)) {
            groupedPrizes.set(prize, []);
        }

        groupedPrizes.get(prize).push(rank);
    }

    let generated_prize_table = []
    for (const [prize, ranks] of groupedPrizes.entries()) {
        let data = {}
        ranks.sort((a, b) => a - b); // Ensure ranks are sorted

        if (ranks.length === 1) {
            const rank = ranks[0];
            if (rank === 1) {
                data["rank"] = '🥇 1'
                data["winnings"] = `${prize}`;
            } else if (rank === 2) {
                data["rank"] = '🥈 2'
                data["winnings"] = `${prize}`;
            } else if (rank === 3) {
                data["rank"] = '🥉 3'
                data["winnings"] = `${prize}`;
            } else {
                data["rank"] = `# ${rank}`
                data["winnings"] = `${prize}`;
            }
        } else {
            data["rank"] = `# ${ranks[0]} - ${ranks[ranks.length - 1]}`
            data["winnings"] = `${prize}`
            // console.log(`${ranks[0]}-${ranks[ranks.length - 1]}: ₹${prize}`);
        }
        generated_prize_table.push(data)

    }
    return generated_prize_table
}
function distributePrizes(registeredPlayers, entryFee, platformFeeFilled, platformFeePercentNotFilled, prizeOrder, cnFilled) {
    // Calculate total collection
    const totalCollection = registeredPlayers * entryFee;

    const platformFee = cnFilled
        ? platformFeeFilled
        : Math.round((platformFeePercentNotFilled / 100) * totalCollection);

    const prizePool = totalCollection - platformFee;

    const prizeDistribution = {};
    let remainingPrizePool = prizePool;

    for (const [startRank, endRank, prizeAmount] of prizeOrder) {
        for (let rank = startRank; rank <= endRank; rank++) {
            if (remainingPrizePool >= prizeAmount) {
                prizeDistribution[rank] = prizeAmount;
                remainingPrizePool -= prizeAmount;
            } else {
                if (remainingPrizePool > 0) {
                    prizeDistribution[rank] = remainingPrizePool;
                    remainingPrizePool = 0;
                }
                break;
            }
        }
        if (remainingPrizePool === 0) break;
    }

    return {
        totalCollection,
        platformFee,
        prizePool,
        prizeDistribution
    };
}

// // Example usage
// const registeredPlayers = 2000;
// const totalEntry = 2000;
// const entryFee = 75;
// const platformFeeFilled = 24000;
// const platformFeePercentNotFilled = 25;
// // const prizeOrder = [[1, 420, 300]];
// const cnFilled = registeredPlayers === totalEntry;


function ranking_order(registeredPlayers,
    entryFee,
    platformFeeFilled,
    platformFeePercentNotFilled,
    prize_table,
    cnFilled) {

    
    const result = distributePrizes(
        registeredPlayers,
        entryFee,
        platformFeeFilled,
        platformFeePercentNotFilled,
        prize_table,
        cnFilled
    );

    return (groupAndDisplayPrizes(result.prizeDistribution));
}


// console.log("Total Collection:", result.totalCollection);
// console.log("Platform Fee:", result.platformFee);
// console.log("Prize Pool:", result.prizePool);
// console.log("Prize Distribution:");


module.exports = { match_info, upcoming_matches, ranking_order };