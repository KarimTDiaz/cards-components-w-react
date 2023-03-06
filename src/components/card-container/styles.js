import styled from 'styled-components';

const StyledContainer = styled.div`
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

export { StyledContainer };
