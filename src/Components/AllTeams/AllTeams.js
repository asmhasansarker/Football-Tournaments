import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Team from '../Team/Team';


const AllTeams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
    // console.log(teams)

    return (
        <div className="container text-center">
            
            <div className="row text-center ml-5">
                {
                   teams.map(team => <Team team={team}></Team>)
                }
            </div>
            
        </div>
    );
};

export default AllTeams;