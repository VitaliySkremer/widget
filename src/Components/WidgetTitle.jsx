import styled from "styled-components";

export default function WidgetTitle({id}) {
  const Wrapper = styled.div`
    margin-bottom: 15px;

    .title {
      font-weight: 400;
      margin: 0;
    }

    .title__description {
      margin: 0 0 10px;
      color: darkgray;
      font-weight: 400;
    }
  `
  return (
    <Wrapper>
      <p className="title__description">
        Лицевой счёт: {id}
      </p>
      <h3 className="title">
        Ваш тариф такой-то
      </h3>
    </Wrapper>
  )
}