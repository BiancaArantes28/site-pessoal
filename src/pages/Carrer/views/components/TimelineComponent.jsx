import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ExperienceDetail } from './ExperienceDetail';

const CarrerIcons = {
    1: <SchoolIcon />,
    2: <BusinessIcon />,
    3: <AccessTimeIcon />,
    4: <SchoolIcon />,
}

export const TimelineComponent = ({ experiencies }) => {
    const matches = useMediaQuery('(min-width:900px)');

    return (
        <Timeline position={matches ? 'alternate' : 'right'}
            sx={
                matches ? {} : 
                    {
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                        },
                    }
            }
        >
            {experiencies.map((experience) => (
                <TimelineItem key={experience.id}>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                    >
                        {experience.start} - {experience.end}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            {CarrerIcons[experience.type]}
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <ExperienceDetail experience={experience} />
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
