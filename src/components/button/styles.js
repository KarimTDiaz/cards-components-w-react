import styled from 'styled-components';

const StyledButton = styled.a`
	background-color: white;
	padding: 1rem;
	border-radius: 15px;
	width: 150px;
	text-align: center;
	color: ${({ bgcolor }) => bgcolor};
`;

export { StyledButton };
