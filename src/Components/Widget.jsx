import styled from "styled-components";
import {useEffect, useRef} from "react";

export default function Widget({children, app}) {
  const Widget = styled.div`
    
      background-color: white;
      border-radius: 8px;
      padding: 15px;
      max-height: 50vh;
      max-width: 500px;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column; 
    
    .close__button {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  `

  const ref = useRef(null);

  useEffect(()=>{
    const handleClickOutside = (event) => {
      if(ref.current && !event.composedPath().includes(ref.current)){
        app.close();
      }
    }
    document.addEventListener('mousedown', handleClickOutside, false)
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside, false)
    }
  },[])

  const close = ()=>{
    app.close()
  }

  return (
    <Widget ref={ref}>
      {children}
      <button className="close__button" onClick={close}>
        закрыть
      </button>
    </Widget>
  )
}