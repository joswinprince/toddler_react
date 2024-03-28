import React from 'react'
import Draggable from 'react-draggable'
import soccerBall from './assets/soccer-ball.png'; 
import A from './assets/A.png'; 
import B from './assets/B.png'; 
import C from './assets/C.png'; 
import water from './assets/water.png'; 
import puppy from './assets/White-Puppy.png'; 
import car from './assets/car.png'; 
import ice from './assets/ice.png'; 

import clickSound from './assets/carengine.aac'; 
import dogSound from './assets/doggy.aac'; 


    const playClickSound = () => {
      const audio = new Audio(clickSound);
      audio.play();
    };
    const playdogSound = () => {
      const audio = new Audio(dogSound);
      audio.play();
    };
export const DraggableComponent = () => {
  return (
      <>
    <Draggable>
        <img src={water} width="256px" height="256px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={ice} width="126px" height="156" alt="ice"/>
    </Draggable>
    <Draggable>
        <img src={ice} width="126px" height="156" alt="ice"/>
    </Draggable>
    <Draggable>
        <img src={ice} width="126px" height="156" alt="ice"/>
    </Draggable>
 
    <Draggable>
        <img src={puppy} onClick={playdogSound} width="256px" height="256px" alt="ball"/>
    </Draggable>
 
    <Draggable>
        <img src={car} onClick={playClickSound} width="350px" height="294px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={car} onClick={playClickSound} width="350px" height="294px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={soccerBall} width="64px" height="64px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={soccerBall} width="64px" height="64px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={soccerBall} width="64px" height="64px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={soccerBall} width="64px" height="64px" alt="ball"/>
    </Draggable>
  
    <Draggable>
        <img src={soccerBall} width="64px" height="64px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={soccerBall} width="64px" height="64px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={soccerBall} width="64px" height="64px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={soccerBall} width="64px" height="64px" alt="ball"/>
    </Draggable>

    <Draggable>
        <img src={A} width="64px" height="64px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={B} width="64px" height="64px" alt="ball"/>
    </Draggable>
    <Draggable>
        <img src={C} width="64px" height="64px" alt="ball"/>
    </Draggable>
      </>
  )
}
