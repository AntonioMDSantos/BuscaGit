import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background: linear-gradient(120deg, #993399, #642764, #341933, #000);
    background-size: 400% 400%;
    position: relative;
    animation: change 10s ease-in-out infinite;

    @keyframes change {
        0%{
            background-position: 0 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0 50%;
        }
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`