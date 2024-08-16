import Contato from "./Contato";
import Info from "./Info";
import Skills from "./Skills";

function Body() {
    return (
        <div className="mainInfo">
            <section id="info">
                <Info />
                <Skills />

            </section>
            <Contato />
        </div>
    );
}

export default Body;