import styles from "./Footer.module.css";
import CodechefLogo from "../../images/CodechefLogo.png";
import Instagram from "../../images/Instagram.png";
import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter.png";
import Github from "../../images/Github.png";
import Youtube from "../../images/Youtube.png";
import Linkedin from "../../images/Linkedin.png";

const Footer = () => {
    return (
        <div className="flex flex-col items-center" id="footer">
            <div className={styles.container}>
                <img src={CodechefLogo} alt="" />
                <div className={styles.social_container}>
                    <h2 className="text-3xl pb-6">Socials</h2>
                    <div className={styles.social_img}>
                        <a href="https://facebook.com/codechefvit"
                            rel="noreferrer"
                            target="_blank">
                            <img src={Facebook} alt="" />
                        </a>

                        <a href="https://instagram/codechefvit"
                            rel="noreferrer"
                            target="_blank">
                            <img src={Instagram} alt="" />
                        </a>

                        <a

                            href="https://www.linkedin.com/company/codechef-vit-chapter/mycompany/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={Linkedin} alt="" />
                        </a>

                        <a href="https://twitter.com/codechefvit" target="_blank"
                            rel="noreferrer">
                            <img src={Twitter} alt="" />
                        </a>

                        <a href="https://github.com/codechefvit" target="_blank"
                            rel="noreferrer">
                            <img src={Github} alt="" />
                        </a>

                        <a href="https://youtube.com/codechefvit" target="_blank"
                            rel="noreferrer">
                            <img src={Youtube} alt="" />
                        </a>
                    </div>
                </div>
                <div className={styles.social_container}>
                    <h2 className="text-3xl">Navigation</h2>
                    <div className={styles.nav_container}>
                        <ul>
                            <li>
                                <a href="#about"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <p className="text-xl font-mabry">About</p>
                                </a>
                                <a href="#timer" className="" target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="text-xl font-mabry">Timer</p>
                                </a>
                                <a href="#speakers" className="" target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="text-xl font-mabry">Prizes</p>
                                </a>
                                <a href="#faqs" className="" target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="text-xl font-mabry">FAQs</p>
                                </a>
                                <a href="/" className="" target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="text-xl font-mabry">Register</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-black items-center w-[100%] text-center">
                <p className="text-white pb-4">
                    © Copyright 2022 | CodeChef-VIT | All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;