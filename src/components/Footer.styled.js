import styled from "styled-components";

export const Footer_TK = styled.footer`
    color: var(--textColor);
	background-color: var(--mainColor);
    display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 20px;
	position: fixed;
	bottom: 0;
	gap: 0.5rem;

	@media (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
        width: 100%;
        height: 20px;
        bottom: 0;
		gap: 0.5rem;
	}
`;
