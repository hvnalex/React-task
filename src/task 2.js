import React from 'react';
import PropTypes from 'prop-types';
const UserCard = ({ name, email, age, }) => {
      
      return (
        <div  className="user-card">
          <h2>{name}</h2>
          <p >Email: {email}</p>
          <p >Age: {age}</p>
        </div>
      );
    };
    
   // UserCard.propTypes = {
     // name: PropTypes.string.isRequired,
     // email: PropTypes.string.isRequired,
      //age: PropTypes.number.isRequired,
    
    //};
    
   

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
 
};

export default UserCard;
