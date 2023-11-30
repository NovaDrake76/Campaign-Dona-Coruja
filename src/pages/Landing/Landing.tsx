import Hero from "./Hero";
import Images from "./Images";
import CentralContent from "./CentralContent";
import Graph from "./Graph";

const Landing = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Images />
            <CentralContent />
            <Graph />
        </div>
    );
}

export default Landing;