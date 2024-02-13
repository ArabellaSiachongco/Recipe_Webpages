import LandingPage from "../components/LandingPage";
import Skills from "../components/Skill";
import Quotes from "../components/Quotes";
import Chef from "../components/Chefs";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <div>
            <LandingPage />
            <Skills />
            <Quotes />
            <Chef />
            <Testimonials/>
        </div>
    )
}