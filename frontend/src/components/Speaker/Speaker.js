import styles from "./Speaker.module.css";
import Link from "../../images/Link.svg";
import hitesh from '../../images/hitesh.jpg';

import { useState } from "react";

const Speaker = () => {
    // const [images, setImages] = useState(SampleImage1);

    // const navigate = useNavigate();

    const [desc, setDesc] = useState(
        "Hitesh Choudhary is one of the top influencers in the field of web and mobile development at production level. He has been instrumental in creating educational content in programming, the latest tech, new frameworks, open-source products, etc. and has over 750k subscribers on his YouTube channel."
    );
    const [title, setTitle] = useState("Hitesh Choudhary");
    const [url, setUrl] = useState("linkedin.com/in/hiteshchoudhary");
    // console.log(images);

    return (
        <div className={styles.main_container} id="speakers">
            <div className={styles.banner_bg}></div>
            <div className={styles.container}>
                <h1>Speaker</h1>
                <div className="flex justify-center">
                    <div className="w-[70vw]">
                        <div className={styles.container_row_1}>
                            <div className={styles.box_main_container}>
                                <div className={styles.box_main_top}>
                                    <div className={styles.box_main_green_button}></div>
                                    <div className={styles.box_main_red_button}></div>
                                    <div className={styles.box_main_yellow_button}></div>
                                </div>
                                <div className={styles.title_link_image}>
                                    <h1>{title}</h1>
                                    <a href={url} target="_blank">
                                        <img src={Link} />
                                    </a>
                                </div>

                                <p>{desc}</p>
                            </div>
                            <div
                                className={styles.box}
                                style={{ boxShadow: "8px 8px 0px #675943" }}
                                onClick={() => (
                                    setTitle("Hitesh Choudhary"),
                                    setDesc(
                                        "Hitesh Choudhary is one of the top influencers in the field of web and mobile development at production level. He has been instrumental in creating educational content in programming, the latest tech, new frameworks, open-source products, etc. and has over 750k subscribers on his YouTube channel."
                                    ),
                                    setUrl("linkedin.com/in/hiteshchoudhary")
                                )}
                            >
                                <img src={hitesh} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speaker;