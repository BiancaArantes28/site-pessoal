import { Typography } from '@mui/material';
import { ExperienceDetailBox } from '../../styles/ExperienceDetailStyles';
import { CarrerType } from './CarrerType';

export const ExperienceDetail = ({ experience }) => {
    return (
        <ExperienceDetailBox>
            <Typography variant="h5">{experience.company}</Typography>
            <Typography variant="h6">{experience.role}</Typography>
            <CarrerType experience={experience} />
            <Typography variant="body1">{experience.description}</Typography>
        </ExperienceDetailBox>
    );
}
