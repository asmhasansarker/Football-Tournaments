import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './TeamDetails.css'
import Male from '../../Photo/male.png'
import Female from '../../Photo/female.png'
import Founded from '../../Icon/found 1.png'
import Flag from '../../Icon/flag (1) 1.png'
import Sport from '../../Icon/football (1) 1.png'
import Gender from '../../Icon/male-gender-sign 1.png'
import SocialFollow from '../SocialFollow/SocialFollow';
import League from '../../Icon/League.png'

const TeamDetails = () => {
    const { teamId } = useParams()
    const [team, setTeam] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))


    }, [teamId])


    const { strTeam, strLeague, strDescriptionEN, strGender, intFormedYear, strCountry, strSport, strTeamBadge, strTeamBanner } = team;
    

    return (
        <div className="container-fluid custom-bg">
            <div className="banner">
                <img className="card-img-top img-fluid banner-img" src={strTeamBanner} alt="" />
                <div className="logo">
                    <img src={strTeamBadge} alt=""/>
                </div>
            </div>
            <div className="card mb-3 container custom-bg border-0">
              
                <div className="card-body mx-auto d-block">
                    <div className="card w-90 px-2 m-2 bg-primary custom-border" >
                        <div className=" d-flex justify-content-around row">
                            <div className="card-body col-md-6 team-info text-white">
                                <h2>{strTeam}</h2>
                                <p> <img src={Founded} alt=""/> Founded :{intFormedYear} </p>
                                <p><img src={League} alt=""/> League : {strLeague}</p>
                                <p><img src={Flag} alt=""/> Country : {strCountry}</p>
                                <p><img src={Sport} alt=""/>Sport Type : {strSport}</p>
                                <p><img src={Gender} alt=""/>Gender : {strGender}</p>
                            </div>
                            <div className="float-left col-md-6 mt-2 mb-2 ">
                                {
                                    strGender === "Female" ?
                                        <img className="card-img-top img-fluid" src={Female} alt="" />:
                                        <img className="card-img-top img-fluid" src={Male} alt="" />
                                    

                                }
                            </div>
                        </div>


                    </div>
                </div>
                <div className="text-center text-bold">
                    <h4>Description</h4>
                </div>
                <div className="w-90 px-2 m-3 ">
                    <p> {strDescriptionEN}</p>
                </div>
                <SocialFollow team= {team}></SocialFollow>
                <div className="d-flex justify-content-center mt-3">
                    <Link to="/"><button className="btn btn-primary">Back to Home</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default TeamDetails;

