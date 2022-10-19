import styles from "./Speaker.module.css";
import Link from "../../images/Link.svg";
import praveen from '../../images/praveenspeaker.png';
import ganesh from '../../images/ganesh.jpeg';

import { useState } from "react";

const Speaker = () => {
    // const [images, setImages] = useState(SampleImage1);

    // const navigate = useNavigate();

    const [desc, setDesc] = useState(
        "Praveen Kumar Purushothaman is a full stack developer, . He has been instrumental in creating educational content in programming, the latest tech, new frameworks, open-source products, etc. and has over 750k subscribers on his YouTube channel."
    );
    const [title, setTitle] = useState("Praveen Kumar");
    const [url, setUrl] = useState("https://www.linkedin.com/in/praveentech/");
    // console.log(images);

    return (
        // <div className={styles.main_container} id="speakers">
        //     <div className={styles.banner_bg}></div>
        //     <div className={styles.container}>
        //         <h1>Speaker</h1>
        //         <div className="flex justify-center">
        //             <div className="w-[70vw]">
        //                 <div className={styles.container_row_1}>
        //                     <div className={styles.box_main_container}>
        //                         <div className={styles.box_main_top}>
        //                             <div className={styles.box_main_green_button}></div>
        //                             <div className={styles.box_main_red_button}></div>
        //                             <div className={styles.box_main_yellow_button}></div>
        //                         </div>
        //                         <div className={styles.title_link_image}>
        //                             <h1>{title}</h1>
        //                             <a href="https://www.linkedin.com/in/praveentech/" target="_blank"
        //                                 rel="noreferrer"
        //                             >
        //                                 <img src={Link} />
        //                             </a>
        //                         </div>

        //                         <p>{desc}</p>
        //                     </div>
        //                     <div
        //                         className={styles.box}
        //                         style={{ boxShadow: "8px 8px 0px #675943" }}
        //                         onClick={() => (
        //                             setTitle("Praveen Kumar"),
        //                             setDesc(
        //                                 "Hitesh Choudhary is one of the top influencers in the field of web and mobile development at production level. He has been instrumental in creating educational content in programming, the latest tech, new frameworks, open-source products, etc. and has over 750k subscribers on his YouTube channel."
        //                             ),
        //                             setUrl("linkedin.com/in/hiteshchoudhary")
        //                         )}
        //                     >
        //                         <img src={praveen} alt="" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className={styles.main_container} id="speakers">

            <div className={styles.banner_bg}></div>
            <div className={styles.container}>
                <h1>Speakers</h1>
                <div className={styles.container_row_1}>
                    <div className={styles.box_main_container}>
                        <div className={styles.box_main_top}>
                            <div className={styles.box_main_green_button}></div>
                            <div className={styles.box_main_red_button}></div>
                            <div
                                className={styles.box_main_yellow_button}
                            ></div>
                        </div>
                        <div className={styles.title_link_image}>
                            <h1>{title}</h1>
                            <a href={url} target="_blank" rel="noreferrer">
                                <img src={Link} alt="link" />
                            </a>
                        </div>

                        <p>{desc}</p>
                    </div>
                    <div
                        className={styles.box}
                        style={{ boxShadow: "8px 8px 0px black" }}
                        onClick={() => (
                            setTitle("Praveen Kumar"), setDesc("Praveen Kumar Purushothaman is a full stack developer, . He has been instrumental in creating content in full stack development, new frameworks, open-source products, etc. and has over 9k subscribers on his YouTube channel."), setUrl("https://www.linkedin.com/in/praveentech/")
                        )}>
                        <img src={praveen} alt="" />
                    </div>
                    <div
                        className={styles.box}
                        style={{ boxShadow: "8px 8px 0px black" }}
                        onClick={() => (
                            setTitle("Ganesh RadhaKrishnan"),
                            setDesc(
                                "He is a Senior Data Engineer at Wells Fargo, Charlotte North Carolina. He has over 30 years of experience in Data Analysis and has personally mentored several successful startups."
                            ),
                            setUrl("https://www.linkedin.com/in/pravinhungund")
                        )}
                    >
                        <img src={ganesh} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speaker;