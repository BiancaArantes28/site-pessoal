import { TextAboutMeContainer, TextAboutMeContent } from "../../styles/TextAboutMeStyle";
import { Container } from "@mui/material";

export const TextAboutMe = ({ text }) => {
    return (
        <TextAboutMeContainer>
            <TextAboutMeContent>
                <Container maxWidth="xl">
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </Container>
            </TextAboutMeContent>
        </TextAboutMeContainer>
    );
}