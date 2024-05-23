import React from 'react';

function About() {
  const avatar = '/static/profilepic.jpeg';
  const name = 'Ana Sofia';
  const bio = 'NYU graduate in Computer Science with a minor in Physics';

  return (
    <div className="about">
      <img src={avatar} alt="Avatar" className="avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default About;
