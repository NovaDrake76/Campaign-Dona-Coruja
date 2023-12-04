import { Link } from "react-router-dom";
import Button from "../../components/Button";
import bg from '../../assets/bg-1.webp';

const Hero = () => {

    return (
        <div className={`flex flex-col items-center justify-center w-screen h-[70vh] bg-[#9D8EC1] md:h-[90vh] bg-repeat-none bg-cover gap-4`}
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="flex flex-col items-center p-2 md:p-0 text-center text-white">
                <h1 className="font-[300] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Com a sua ajuda, centenas de crianças</h1>
                <div className="flex items-center font-[300] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl gap-4">conquistarão <h2 className="font-[700]">um futuro melhor</h2></div>
            </div>
            <Link to="/donation">
                <Button text="Faça agora sua doação" size="m" color="primary" />
            </Link>
            <img src={bg} alt="Background" className="hidden" />
        </div>
    );
}

export default Hero;