import Card from '../card/card';
import { StyledContainer } from './styles';
import { CARDS_INFO } from '../../constants/consts';

const CardsContainer = () => {
	return (
		<StyledContainer>
			{CARDS_INFO.map(card => (
				<Card {...card} key={card.id} />
			))}
		</StyledContainer>
	);
};

export default CardsContainer;
