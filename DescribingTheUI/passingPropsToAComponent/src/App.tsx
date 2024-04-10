// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { ReactNode } from 'react';
import './App.css'

// how can I make object which contain imgageId and name?

interface Person {
  imageId: string;
  name: string;
}

interface AvatarProps {
  person: Person;
  size: number;
}

function getImageUrl(person: Person) {
  return ('https://i.imgur.com/' + person.imageId + '.jpeg')
}

const Avatar: React.FC<AvatarProps> = ({ person, size }) => {
  console.log(size)
  return (
    <img
      className="avatar"
      // src="https://www.gravatar.com/avatar/"
      src={getImageUrl(person)}
      alt={person.name}
      // alt="avatar"
      width={100}
      height={100} />
  );
}

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Card>
        <Avatar
          size={100}
          person={{
            name: 'Katsuko Saruhashi',
            imageId: '8M1s8bf'
          }}
        />
      </Card>
    </div>
  );
}

export default App
