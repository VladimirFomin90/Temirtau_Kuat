import styled from "styled-components";

export const News_article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 333px;
        margin: 0 auto;
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }
`;

export const Time_publish = styled.div`
    display: flex;
    margin-top: 0.5rem;
    gap: 0.5rem;

    @media (max-width: 768px) {
        display: flex;
        margin-top: 0.5rem;
        gap: 0.2rem;
        justify-content: end;
    }
`;
