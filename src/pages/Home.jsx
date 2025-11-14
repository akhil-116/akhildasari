import Hero from "../components/Hero/Hero"; 
import Skills from "../components/Skills/Skills/Skills";
import AboutMe from "../components/AboutMe/AboutMe";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return(
        <>
        <Hero />
        <Skills />
        <AboutMe />
        <ProjectCard />
        <Footer />
        </>
    
       
    );
}

export default Home