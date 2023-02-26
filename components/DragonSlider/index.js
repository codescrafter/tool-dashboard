import React from "react";
import styles from "../DragonSlider/DragonSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { priceListData } from "../../mock/data";
import { IoIosArrowForward } from "react-icons/io";

const DragonSlider = () => {
    return (
        <div className={styles.priceListsWrapper}>
            <div className={styles.titleBar}>
                <h1>Pricing & Plan</h1>
                <p>What Makes us Best !</p>
            </div>
            <Slider {...settings} className={styles.slider}>
                {priceListData.map((data, i) => (
                    <div key={i}>
                        {i % 2 != 0 && (
                            <div className={styles.recommended}>
                                <p>Most Popular</p>
                            </div>
                        )}
                        <div
                            className={`${styles.slide} ${
                                i % 2 == 0 ? styles.otherSlides : styles.activeSlide
                            }`}
                        >
                            <div>
                                <header>
                                    <h1>{data.title}</h1>
                                </header>
                                <h1 className={styles.priceTitle}>{data.price}</h1>
                                <ul className={styles.listWrapper}>
                                    {data.list.map((x) => (
                                        <li key={x}>{x}</li>
                                    ))}
                                </ul>
                            </div>
                            <footer>
                                <p>
                                    <IoIosArrowForward size={22} />
                                </p>
                            </footer>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DragonSlider;

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
