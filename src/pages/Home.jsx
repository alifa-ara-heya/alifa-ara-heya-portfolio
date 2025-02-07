import AboutMe from "../components/AboutMe/AboutMe";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import EducationalQualification from "../components/Education/EducationalQualification";
import Projects from "../components/Projects/Projects";
// import SecondProjects from "../components/Projects/SecondProjects";
// import ProjectsOld from "../components/Projects/ProjectsOld";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Skills from "../components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Skills />
            <EducationalQualification />
            {/* <ProjectsOld /> */}
            {/* <SecondProjects /> */}
            <Projects />
            <Contact />

            <ScrollToTop />
        </div>
    );
};

export default Home;