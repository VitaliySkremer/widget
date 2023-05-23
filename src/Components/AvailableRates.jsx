import styled from "styled-components";
import Rate from "./Rate";

export function AvailableRates({rates, setSelectRate}) {

  const Title = styled.p`
    margin-bottom: 10px;
  `

  const List = styled.div`
    overflow-y: auto;
  `

  return (
    <>
      <Title className="title">
        Доступные тарифы:
      </Title>
      <List className="list">
        {rates.map(rate=>(
          <Rate rate={rate} key={rate.id} setSelectRate={setSelectRate}/>
        ))}
      </List>
    </>
  )
}