import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'

const Team = (props) => {
    const {strTeamBadge,  strTeam, strSport, idTeam} = props.team;
    

    return (
        <div className="card m-3 p-3 text-center custom-design" style={{width: "18rem"}}>
            <img src={strTeamBadge} class="card-img-top w-75 ml-4 pl-1" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{strTeam}</h4>
                    <h6>Sports Type : {strSport}</h6>
                    
                    <Link to={`/team/${idTeam}`}><button className="btn btn-primary py-2 px-3 mt-2">Explore <FontAwesomeIcon icon={faArrowRight}  size="1x" /> </button></Link>
                    
                </div>
        </div>
    );
};

export default Team;