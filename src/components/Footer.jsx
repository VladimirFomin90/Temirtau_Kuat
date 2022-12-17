import { Footer_TK } from "./Footer.styled";

const Footer = () => {
    return (
        <Footer_TK>
                © ТОО «Теміртау Қуат» <div>{new Date().getFullYear()}</div>
        </Footer_TK>
    );
};

export default Footer;
