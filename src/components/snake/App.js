import React, { useState, useEffect, useRef } from "react"
import { useInterval } from "./useInterval"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../index.module.css"
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
} from './constants'
import {
  startButton,
  gameOverPop
} from './styleObjects'


const App = () => {

  const canvasRef = useRef(null)
  const gamePadRef = useRef(null)
  const [snake, setSnake] = useState(SNAKE_START)
  const [apple, setApple] = useState(APPLE_START)
  const [dir, setDir] = useState([0, -1])
  const [speed, setSpeed] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const startGame = () => {
    setSnake(SNAKE_START)
    setApple(APPLE_START)
    setDir([0, -1])
    setSpeed(SPEED)
    setGameOver(false)

    gamePadRef.current !== null && gamePadRef.current.focus()
  }

  const endGame = () => {
    setSpeed(null)
    setGameOver(true)
  }

  const moveSnake = ( { keyCode } ) => {
    if( keyCode >= 37 && keyCode <= 40 ) {
      // console.log(DIRECTIONS[keyCode].toString())
      // console.log(dir.toString())
      // console.log(DIRECTIONS[keyCode].toString() === dir.toString())
      // console.log(dir.filter( n => n !== 0 )[0] * -1)
      // console.log(DIRECTIONS[keyCode].filter( n => n !== 0 )[0])
      // console.log(dir.filter( n => n !== 0 )[0] * -1 !== DIRECTIONS[keyCode].filter( n => n !== 0 )[0])
      ( 
        // DIRECTIONS[keyCode].toString() !== dir.toString() 



        // dir.filter( n => n !== 0 )[0] * -1
        // !==
        // DIRECTIONS[keyCode].filter( n => n !== 0 )[0]

        true


      ) && setDir( DIRECTIONS[keyCode] )
    }
  }

  const createApple = () => apple.map( (_, i) => Math.floor( Math.random() * (CANVAS_SIZE[i]) / SCALE ) )

  const checkCollision = (piece, snk = snake) => {
    if(
      piece[0] * SCALE >= CANVAS_SIZE[0]
      || piece[0] < 0
      || piece[1] * SCALE >= CANVAS_SIZE[1]
      || piece[1] < 0
    ) 
    return true

    for(const segment of snk) {
      if( piece[0] === segment[0] && piece[1] === segment[1] ) return true
    }

    return false
  }

  const checkAppleCollision = newSnake => {
    if( newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1] ) {
      let newApple = createApple()
      while( checkCollision(newApple, newSnake) ) {
        newApple = createApple()
      }
      setApple(newApple)
      return true
    }
    return false
  }

  const gameLoop = () => {

    const snakeCopy = JSON.parse(JSON.stringify(snake))

    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]]

    // console.log(newSnakeHead)

    snakeCopy.unshift(newSnakeHead)

    if( checkCollision(newSnakeHead) ) endGame()

    // snakeCopy.pop()
    if( !checkAppleCollision(snakeCopy) ) snakeCopy.pop()

    setSnake(snakeCopy)
  }


  useEffect(() => {

    const context = canvasRef.current.getContext('2d')

    context.setTransform(SCALE, 0, 0, SCALE, 0, 0)

    // context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1])

    context.fillStyle = `hotpink`

    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1))

    context.fillStyle = `gold`

    context.fillRect(apple[0], apple[1], 1, 1)

  }, [snake, apple, gameOver])


  useInterval(() => gameLoop(), speed)

  // console.log('__DIR: ', dir)
  // console.log(DIRECTIONS)
  

  return(
    <>

      <div className={`snakeLogo ${styles.textCenter} ${gameOver ? 'gameOver' : ''}`}>
        <StaticImage
          src="../assets/images/snake-icon.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </div>
    
      <div
        role="button"
        tabIndex="0"
        onKeyDown={e => moveSnake(e)}

        ref={gamePadRef}
      >

        <canvas
          style={{
            border: "1px solid black",
            lineHeight:'0',
            marginTop: '4px',
            marginLeft: '4px',
            boxShadow: '0 0 0 7px rgba(0,0,0,1)',
            boxSizing: 'border-box'
          }}
          ref={canvasRef}
          width={`${CANVAS_SIZE[0]}px`}
          height={`${CANVAS_SIZE[1]}px`}
        />

        {gameOver && 
        <div
          style={gameOverPop}
        >
          {/* GAME OVER! */}
          B14ch, please...
        </div>
        }

        {(speed === null) &&
        <button 
          onClick={startGame}
          style={startButton}
        >
          START GAME
        </button>
        }
        
      </div>

    </>
  )
}  
export default App