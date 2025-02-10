const { error } = require('console');
const fs = require('fs');

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

async function api_upcoming_matches() {
    const url_upcoming_matches = 'https://cricket-live-line1.p.rapidapi.com/upcomingMatches'
    try{
        let upcoming_matches =await fetch(url_upcoming_matches,options)
        let upcoming_matches_result =await upcoming_matches.json()
        write_upcoming_match_data(upcoming_matches_result)
        console.log("Upcoming matches logged")
    }catch(error){
        console.log(error)
    }
}
//api_upcoming_matches();
const AllowedMatches=[7260]

async function upcoming_matches(matchList) {
    let get_match=matchList ||AllowedMatches
    let data =read_upcoming_match_data().data
    let m_data=data.filter(match => get_match.includes(match.match_id));
    return m_data
    
}
upcoming_matches();
//update_matches()
setInterval(()=>{
// update_matches()
},30000)

module.exports = { match_info,upcoming_matches };