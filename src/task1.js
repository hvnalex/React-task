import React from 'react';
//import reportWebVitals from './reportWebVitals';

const GroupMembers = () => {
  const members = ['H', 'b', 'c', 'D', 'E'];

  return (
    <div>
      <h2>Group Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembers;