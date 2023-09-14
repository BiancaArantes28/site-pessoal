import { AboutMeBox, AboutMeContent } from "../styles/AboutMeStyle";
import { AboutMeAvatar } from './components/AboutMeAvatar';
import { TitleAndSubtitle } from "./components/TitleAndSubtitle";
import { LinkSocialMedia } from "./components/LinkSocialMedia";
import { TextAboutMe } from "./components/TextAboutMe";
import { useAboutMePage } from "../hooks/useAboutMePage";

export const AboutMePage = () => {

    const { aboutMeText } = useAboutMePage();

    return (
        <>
            <AboutMeBox>
                <AboutMeContent>
                    <AboutMeAvatar />
                    <TitleAndSubtitle />
                    <LinkSocialMedia />
                    
                </AboutMeContent>
            </AboutMeBox>
            <TextAboutMe text={aboutMeText} />
        </>
    );
};