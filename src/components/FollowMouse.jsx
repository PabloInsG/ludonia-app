import { useEffect, useState } from 'react'

export const FollowMouse = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    
    useEffect(() => {
      const handleMove = (event) => {
        const {clientX, clientY} = event
        setPosition({x: clientX, y: clientY})
      }
        window.addEventListener('pointermove', handleMove)
      //cleanup del evento
      return () => {
        window.removeEventListener('pointermove', handleMove)
      }
    })
  
    return (
      <>
      <div style={{
        position: 'absolute',
        border: 'solid 1px #FFF',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -15,
        top: -15,
        width: 40,
        height: 40,
        zIndex: 1000,
        transform: `translate(${position.x}px, ${position.y}px)`
      }
      }/>
      </>
    )
  }