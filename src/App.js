import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import News from "./components/News";
import About from "./components/About";
import Contacts from "./components/Contacts";
import "./App.css";
import "./components/mediaQuery.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="news" element={<News />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
