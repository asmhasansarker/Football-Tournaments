import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faYoutube, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './SocialFollow.css'


const SocialFollow = (props) => {

    const {strFacebook, strYoutube, strTwitter, strInstagram} = props.team;
    // console.log(props.team)
    return (
        <div className=" social-container text-center">
            
           
                <a href={`https://${strTwitter}`} className="twitter social"> 
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
         
            
                <a href={`https://${strFacebook}`} className="facebook social"> 
                    <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
            
   
                <a href={`https://${strYoutube}`} className="youtube social"> 
                    <FontAwesomeIcon icon={faYoutube} size="3x" />
                </a>
                <a href={`https://${strInstagram}`} className="instagram social"> 
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
        
            
            
           
        </div>
    );
};

export default SocialFollow;