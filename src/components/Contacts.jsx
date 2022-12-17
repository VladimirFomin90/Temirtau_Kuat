import { AiOutlinePhone } from "react-icons/ai";
import { Main } from "./About.styled";
import { Span_center } from "./Contacts.styled";

const Contacts = () => {
    return (
        <Main>
            <Span_center>
                Адрес: город Темиртау, ул. Мичурина 6/3
                <br />
                Телефоны: <br />
            </Span_center>
            <Span_center>
                Бухгалтерия <AiOutlinePhone /> 8(7213) 98 36 58
            </Span_center>
            <Span_center>
                Электрики <AiOutlinePhone /> 8(7213) 98 29 98; +7(708) 133 5335 
            </Span_center>
            <br />
            <Span_center>
                Директор <AiOutlinePhone />
                +7(708) 528 65 20; +7(775) 791 04 09
            </Span_center>
            <br />
            <Span_center>
                Главный энергетик <AiOutlinePhone />
                +7(771) 286 06 42
            </Span_center>

            <div className="map_2gis">
                <iframe
                    frameborder="no"
                    title="2gis"
                    style={{ border: 0 }}
                    width="840"
                    height="500"
                    src="http://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A50.064261%2C%22lon%22%3A73.008782%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22karaganda%22%7D%2C%22org%22%3A%2270000001054917273%22%7D"
                ></iframe>
            </div>

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

export default Contacts;
