import styles from "./About.module.css";
// import aboutimg from "../../images/About.png";
import aboutsvg from "../../images/Indust-reality-about.svg";

const About = () => {
    return (
        <div className={styles.container} id="about">
            <div className={styles.title_heading_container}>
                <h1>Cut the chase , what’s indust-reality?</h1>
                <p className="font-mabry">
                    Indust-reality is a seminar cum hands-on-workshop focusing on all aspects of a “product development cycle”. A workshop that lightens the path for amateur coders by providing them with hands-on experience and mentoring sessions by guests who happen to be experts in their fields. Having four varied domains with an exciting problem statement and innovative approaches to a single problem, it really provides a jump start and allows people to hone their skills. We aspire to impart beginner to intermediate knowledge of products onto budding developers and also help the top teams get their projects vetted by experts.

                </p>
            </div>
            <img src={aboutsvg} alt="About Image here" />
        </div>
    );
};

export default About;