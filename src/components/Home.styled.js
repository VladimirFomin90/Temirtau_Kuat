import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    align-items: flex-start;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Info_p = styled.p`
    display: flex;
    margin-top: 0.5rem;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

	@media (max-width: 768px) {
        display: flex;
        margin-top: 0.5rem;
        gap: 0.4rem;
        justify-content: flex-start;
    }
`;
