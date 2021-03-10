import React from 'react';
import AllTeams from '../AllTeams/AllTeams';
import Header from '../Header/Header';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

const Home = () => {
    return (
        <div className="custom-bg">
            <Header></Header>
            <AllTeams></AllTeams>
        </div>
    );
};

export default Home;