import { AboutMeBox, AboutMeContent } from "../styles/AboutMeStyle";
import { AboutMeAvatar } from './components/AboutMeAvatar';
import { TitleAndSubtitle } from "./components/TitleAndSubtitle";
import { LinkSocialMedia } from "./components/LinkSocialMedia";


export const AboutMePage = () => {
    return (
        <AboutMeBox>
            <AboutMeContent>
                <AboutMeAvatar />
                <TitleAndSubtitle />
                <LinkSocialMedia />
            </AboutMeContent>
        </AboutMeBox>
    );
};