import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 900px;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 340px;
        flex: 1 0 auto;
        margin-top: 3.3rem;
        margin-bottom: 2rem;
    }
`;

export const About_span = styled.span`
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0.5rem;
`;

export const Spancenter = styled.span`
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem 0.5rem 0.5rem;
`;
