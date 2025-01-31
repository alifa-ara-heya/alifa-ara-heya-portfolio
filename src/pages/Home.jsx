import AboutMe from "../components/AboutMe/AboutMe";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import EducationalQualification from "../components/Education/EducationalQualification";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
// import ProjectsOld from "../components/Projects/ProjectsOld";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Skills from "../components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <AboutMe />
            <Skills />
            <EducationalQualification />
            {/* <ProjectsOld /> */}
            <Projects />
            <Contact />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Home;