import { BiTime } from "react-icons/bi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { CiCircleChevRight } from "react-icons/ci";
import LEP from "../img/lep.jpg";
import "./Home.css";
import { Main } from "./About.styled";
import { Info, Info_p, P_icon } from "./Home.styled";

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
                        <AiOutlinePhone /> 8(7213) 98 36 58 - бухгалтерия
                    </p>
                    <p className="span_center">
                        <AiOutlinePhone /> 8(7213) 98 29 98; +7(708) 133 5335  - дежурные электрики
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
                        <CiCircleChevRight /> Подача воды по распределительным сетям
                    </p>
                    <p className="span_center">
                        <CiCircleChevRight /> Отвод сточных вод
                    </p>
                </Info_p>
            </Info>

            <span className="location_on_phone">Где мы находимся:</span>

            <div className="map_2gis_mobile">
                <iframe
                    frameborder="no"
                    title="2gis_mobile"
                    style={{ border: 0 }}
                    width="340"
                    height="400"
                    src="http://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A50.064261%2C%22lon%22%3A73.008782%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22karaganda%22%7D%2C%22org%22%3A%2270000001054917273%22%7D"
                ></iframe>
            </div>
        </Main>
    );
};

export default Home;
