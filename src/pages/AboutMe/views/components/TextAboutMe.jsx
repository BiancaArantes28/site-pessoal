import { TextAboutMeContainer } from "../../styles/TextAboutMeStyle";
import { Container } from "@mui/material";

export const TextAboutMe = ({ text }) => {
    return (
        <TextAboutMeContainer>
            <Container maxWidth="xl">
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </Container>
        </TextAboutMeContainer>
    );
}