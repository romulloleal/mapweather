import styled from "styled-components";

export const MapStyle = styled.div`
  height: calc(100vh - 80px);
  height: calc((var(--vh, 1vh) * 100) - 80px);
`

export const PopUpInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .cityName {
    min-width: 100%;
    height: 25px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px 3px 0 0 ;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }
`