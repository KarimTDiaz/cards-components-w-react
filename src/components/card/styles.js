import styled from 'styled-components';

const StyledCard = styled.div`
	background-color: ${({ bgcolor }) => bgcolor};
	height: 500px;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: white;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		width: 50px;
		height: 50px;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 50%;
		left: 10px;
		top: 18px;
	}
`;

export default StyledCard;
