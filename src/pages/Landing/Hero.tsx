import Button from "../../components/Button";

const Hero = () => {
    return (
        <div className={`flex flex-col items-center justify-center w-screen h-[90vh] bg-[url('./assets/bg-1.webp')]  bg-repeat-none bg-cover gap-4`}>
            <div className="flex flex-col items-center"><h1 className="font-[300]">Ajude centenas de crianças a</h1>
                <h2 className="text-5xl font-[700]">Conquistarem seu futuro</h2></div>
            <Button text="Faça agora sua doação" size="m" color="primary" />
        </div>
    );
}

export default Hero;