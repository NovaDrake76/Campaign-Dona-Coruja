import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Hero = () => {
    return (
        <div className={`flex flex-col items-center justify-center w-screen h-[70vh] md:h-[90vh] bg-[url('./assets/bg-1.webp')]  bg-repeat-none bg-cover gap-4`}>
            <div className="flex flex-col items-center p-2 md:p-0 text-center">
                <h1 className="font-[300] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Com a sua ajuda, centenas de crianças</h1>
                <div className="flex items-center font-[300] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl gap-4">conquistarão <h2 className="font-[700]">um futuro melhor</h2></div>
            </div>
            <Link to="/donation">
                <Button text="Faça agora sua doação" size="m" color="primary" />
            </Link>
        </div>
    );
}

export default Hero;