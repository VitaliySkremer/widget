import styled from "styled-components";

export default function WidgetAside({children}) {

  const Widget = styled.section`
    position: absolute;
    inset: 0 0 0 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `


  return (
    <Widget>
      {children}
    </Widget>
  )
}