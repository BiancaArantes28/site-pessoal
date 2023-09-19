import Typography from '@mui/material/Typography';
import { CarrerPageContainer } from '../styles/CarrerPageStyles';
import { TimelineComponent } from './components/TimelineComponent';
import { useCarrerPage } from '../hooks/useCarrerPage';

export const CarrerPage = () => {
    const { experiences } = useCarrerPage();
    return (
        <CarrerPageContainer>
            <Typography variant="h4">Experience</Typography>
            <TimelineComponent experiencies={experiences} />
        </CarrerPageContainer>
    );
};
