import React from 'react';

/*
5. ProfilPhoto.js: a functional component that returns a Photo of your profile. 
6. FullName.js: a functional component that returns your full name. 
7. Address.js: a functional component that returns your address. 
*/


const fullName = (first,last) => {
    return( 
        <React.Fragment>
        {first + ' ' + last}
        </React.Fragment>
    )
}

export default fullName;

