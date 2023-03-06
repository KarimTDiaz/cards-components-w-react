import StyledCard from './styles';
import Button from '../button/Button';
import Icon from '../icon/Icon';

const Card = ({ icon, bgcolor, title, text }) => {
	return (
		<StyledCard bgcolor={bgcolor}>
			<Icon icon={icon} />
			<h1>{title}</h1>
			<p>{text}</p>
			<Button text='Learn More' bgcolor={bgcolor} />
		</StyledCard>
	);
};

export default Card;
