import { BiTime } from "react-icons/bi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { CiCircleChevRight } from "react-icons/ci";
import LEP from "../img/lep.jpg";
import "./Home.css";
import { Main } from "./About.styled";
import { Info, Info_p } from "./Home.styled";
import { useEffect } from "react";
import DG from "2gis-maps";

const Home = () => {
    return (
        <Main>
            <Info>
                <Info_p>
                    <p>город Темиртау ул. Мичурина 6/3</p>
                    <p className="span_center">
                        <BiTime /> понедельник-пятница: 8:00 — 17:00
                    </p>
                    <p className="span_center">
                        <AiOutlinePhone /> <span className="phone_call"><a href="tel:87213983658">8(7213) 98 36 58</a></span> - бухгалтерия
                    </p>
                    <p className="span_center_electro">
                        <AiOutlinePhone /> <span className="phone_call"><a href="tel:87213982998">8(7213) 98 29 98;</a></span> <AiOutlinePhone /> <span className="phone_call"><a href="tel:+77081335225">+7(708) 133 5225</a></span>   -
                        дежурные электрики
                    </p>
                    <p className="span_center">
                        <AiOutlineMail /> too.temirtaukuat@yandex.kz |
                        too.tk@mail.ru
                    </p>
                </Info_p>
            </Info>

            <div className="lep">
                <img src={LEP} alt="лэп" className="lep_img" />
            </div>

            <Info>
                <Info_p>
                    <p className="">Основные виды деятельности:</p>
                    <p className="span_center">
                        <CiCircleChevRight /> Передача электрической энергии
                    </p>
                    <p className="span_center">
                        <CiCircleChevRight /> Подача воды по распределительным
                        сетям
                    </p>
                    <p className="span_center">
                        <CiCircleChevRight /> Отвод сточных вод
                    </p>
                </Info_p>
            </Info>

            <span className="location_on_phone">Где мы находимся:</span>

            <div className="map_2gis_mobile" id="map-container" style={{ width: "333px", height: "300px" }}>
                <Map_mobile style={{ width: "333px", height: "300px" }}
				center={[50.064261, 73.008782]}
				zoom={16}
				/>
                {/* <iframe
                    frameborder="no"
                    title="2gis_mobile"
                    style={{ border: 0 }}
                    width="340"
                    height="400"
                    src="http://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A50.064261%2C%22lon%22%3A73.008782%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22karaganda%22%7D%2C%22org%22%3A%2270000001054917273%22%7D"
                ></iframe> */}
            </div>
        </Main>
    );
};

const Map_mobile = () => {
    useEffect(() => {
        let map_mobile;
        map_mobile = DG.map("map-container", {
            center: [50.064261, 73.008782],
            zoom: 16,
        });
        DG.marker([50.064261, 73.008782])
            .addTo(map_mobile)
            .bindPopup(
                "ТОО «Теміртау Қуат» пн-пт с 8.00 до 17.00, обед с 12.00 до 13.00"
            );
    }, []);

    // return (
    //     <div
    //         id="map-container"
    //         style={{ width: "333px", height: "300px" }}
    //     ></div>
    // );
};

export default Home;
