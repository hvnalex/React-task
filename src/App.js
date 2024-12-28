import React from 'react';
import reportWebVitals from './reportWebVitals';

const GroupMembers = () => {
  const members = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

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