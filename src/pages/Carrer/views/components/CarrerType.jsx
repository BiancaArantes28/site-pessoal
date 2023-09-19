import { Typography } from "@mui/material";
import { carrerType } from "../../consts/carrerType";

export const CarrerType = ({ experience }) => {
    return (
        <Typography variant="subtitle1">
            {carrerType[experience.type]}
        </Typography>
    );
};
