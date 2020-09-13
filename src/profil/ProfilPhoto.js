import React from 'react';
import img from "../img/dz.jpg"
import FullName from "./FullName"
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
                <FullName/>
                <Address/>
            </div>
        </div>
        
        </React.Fragment>
    )
}

export default ProfilPhoto;

