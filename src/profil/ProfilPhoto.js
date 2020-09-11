import React from 'react';
import img from "../img/dz.jpg"
import fullName from "../profil/FullName"
import Address from "./Address"
import '../App.css';

/*

7. Address.js: a functional component that returns your address. 
*/


const ProfilPhoto = () => {
    return( 
        <React.Fragment>
        <div className="card" >
        <img className="profile-pic" src={img} alt="img-1"/> 

            <div className="card-body">
                <p className="card-text">{fullName('walid','alioua')}</p>
                <p className="card-adress">{Address('Kouba - Alger')}</p>
            </div>
        </div>
        
        </React.Fragment>
    )
}

export default ProfilPhoto;

