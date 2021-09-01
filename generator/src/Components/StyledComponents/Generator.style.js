import styled from 'styled-components';

export const StyledGenerator = styled.div`
    width: 450px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 60px;
    background: #ffffff;
    padding: 30px 30px;
    box-shadow: 1px 1px 4px #d9d9d9, -1px -1px 4px #ffffff;
    position: relative;
    @media screen and (max-width: 991px) {
        width: 100%;
        margin: 0 0 30px 0;
    }
    h1 {
        margin: 0 0 30px 0;
    }
    button {
        margin: 0 10px ;
        width: 100%;
    }
`