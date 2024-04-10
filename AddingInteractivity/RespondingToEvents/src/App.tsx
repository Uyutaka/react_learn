// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, { ReactNode, MouseEventHandler } from 'react';

interface AlertButtonProps {
  message: string
  children: ReactNode
}
const AlertButton: React.FC<AlertButtonProps> = ({ message, children }) => {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  )
}

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}
interface PlayButtonProps {
  movieName: string
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieName }) => {
  return (
    <Button onClick={() => alert(movieName)}>
      Play Movie
    </Button>
  )
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <PlayButton movieName="Inception" />
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>      {/* <Button /> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
