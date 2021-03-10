import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

const Header = () => {
    const url = `https://d3opmws30bxnoy.cloudfront.net/wp-content/uploads/2016/12/world_cup_hospitality_concierge_royist.jpg`
    return (
        <div class="card bg-dark text-white">
            <img src={url} class="card-img" alt="..."/>
                <div class="card-img-overlay">
                    <h1 class="card-title text-center mt-5 align-middle">Soccer Team Tracker</h1>
                    
                </div>
        </div>
    );
};

export default Header;