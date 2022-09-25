import styles from "./Hero.module.css";
import landingimg from "../../images/landingimg.png";
import industrealitynav from "../../images/Industrealitynav.png";
const Hero = () => {
    return (
        <div className={styles.main_container} id="Hero">
            <nav className={styles.navbar_container}>
                <img src={industrealitynav} alt="CookOffLogo" className="h-[100%]" />
                <div className={styles.navbar_list_container}>
                    <ul className="">
                        <li className="hover:bg-[#b86cff]">
                            <a href="#about">About</a>
                        </li>
                        <li className="hover:bg-[#b86cff] ">
                            <a href="#speakers">Speakers</a>
                        </li>
                        <li className="bg-[#b86cff] cursor-pointer">
                            <a href="https://events.vit.ac.in/events/gravitas2022/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="flex flex-row items-center h-[100vh] z-20">
                <div className={styles.container}>
                    <div className={styles.content_container}>
                        <div className={styles.title_heading_container}>
                            <h1 className="-translate-y-14">Indust-Reality</h1>
                            <p className="font-mono -translate-y-14 text-xl">
                                A seminar-cum-hands-on-workshop focused around all the different aspects and domains of a Product Development Cycle.
                            </p>
                        </div>
                        <div className="-translate-y-14">
                            <button className={styles.hero_button}>
                                <a href="https://events.vit.ac.in/events/gravitas2022/" rel="noreferrer"
                                    target="_blank"
                                >
                                    Register Now!
                                </a>

                            </button>

                        </div>
                    </div>
                    <div className="flex relative">
                        <img
                            src={landingimg}
                            alt="HeroImage"
                            className="-translate-y-5 translate-x-48 w-9/12 z-10 hidden lg:block"
                        />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;