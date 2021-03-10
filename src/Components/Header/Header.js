import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

const Header = () => {
    const headerImage = `https://www.ifasport.com/uploads/homepage_uploads/Banner12.jpg`
    return (
        <div class="card bg-dark text-white mb-3 main-div">
            <img src={headerImage} class="card-img custom-opacity" alt="..."/>
                <div class="card-img-overlay custom-position">
                    <h1 class="card-title text-center">Football  Tournaments</h1>
                    
                    
                </div>
        </div>
    );
};

export default Header;