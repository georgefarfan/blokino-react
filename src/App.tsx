import React from "react";
import logo from "./resources/images/blokino-logo.svg";
import Section from "./components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCode, faRobot, faEthernet } from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
    function redirect(type: string) {
        switch (type) {
            case "web":
                break;
        }
    }
    return (
        <div className="App">
            <div className="container">
                <div className="row mt-5">
                    <div className="col col-lg-5 col-sm-12 col-md-12 right-dots">
                        <img
                            src={logo}
                            className="rounded mx-auto d-block"
                            alt="Blokino ..."
                            width="400"
                            height="400"
                        />
                        <h1 className="display-4 font-weight-bold mt-3 mb-1 text-center blink">
                            Aprende a programar hardware con Blokino
                        </h1>
                    </div>
                    <div className="col-lg-7 col-sm-12 col-md-12 pt-5">
                        <Section
                            title="Desafíos"
                            description="Antes de usar <strong>Blokino</strong> de manera libre, se recomienda hacer los desafíos. Los desafíos indican como se
              deben usar <strong>Blokino</strong> y sus bloques funcionales."
                        ></Section>
                        <Section
                            title="Programemos"
                            description="Si te sentís listo !!! Comencemos ..."
                        ></Section>
                        <Section
                            title="Robots"
                            description="Con un poco de ingenio y <strong>Blokino</strong>, se pueden hacer cosas como ..."
                        ></Section>{" "}
                        <Section
                            title="La web de Blokino"
                            description="Si necesitas mirar la documentación o las actualizaciones que se van agregando a la plataforma, accede a la <strong>web de Blokino</strong>."
                        ></Section>
                        <div>
                            <button
                                onClick={() => {
                                    redirect("editor");
                                }}
                                className="btn btn-lg btn-open-editor mr-1"
                            >
                                <FontAwesomeIcon icon={faCode} />
                                Programemos
                            </button>
                            <button
                                className="btn btn-lg  btn-open-challenges mr-1"
                                onClick={() => {
                                    redirect("challenges");
                                }}
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                                Desafíos
                            </button>
                            <button
                                className="btn btn-lg btn-open-robots mr-1"
                                onClick={() => {
                                    redirect("robots");
                                }}
                            >
                                <FontAwesomeIcon icon={faRobot} />
                                Robots
                            </button>
                            <button
                                className="btn btn-lg btn-open-web"
                                onClick={() => {
                                    redirect("web");
                                }}
                            >
                                <FontAwesomeIcon icon={faEthernet} />
                                Web
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
