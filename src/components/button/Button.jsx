import { StyledButton } from './styles';

const Button = ({ text, bgcolor }) => {
	return <StyledButton bgcolor={bgcolor}>{text}</StyledButton>;
};
export default Button;
