import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { LinkSocialMediaBox, LinkSocialMediaItem } from "../../styles/LinkSocialMediaStyle";

export const LinkSocialMedia = () => {
    return (
        <LinkSocialMediaBox>
            <LinkSocialMediaItem target="_blank" href="https://github.com/BiancaArantes28">
                <GitHubIcon />
            </LinkSocialMediaItem>
            <LinkSocialMediaItem target="_blank" href="https://www.linkedin.com/in/bianca-arantes-dos-santos-919744121/">
                <LinkedInIcon />
            </LinkSocialMediaItem>
            <LinkSocialMediaItem target="_blank" href="mailto:biancaarantes28@gmail.com">
                <EmailIcon />
            </LinkSocialMediaItem>
        </LinkSocialMediaBox>
    );
};