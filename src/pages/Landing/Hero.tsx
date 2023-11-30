import Button from "../../components/Button";

const Hero = () => {
    return (
        <div className={`flex flex-col items-center justify-center w-screen h-[90vh] bg-[url('./assets/bg-1.webp')]  bg-repeat-none bg-cover gap-4`}>
            <div className="flex flex-col items-center"><h1 className="font-[300]">Com a sua ajuda, centenas de crianças </h1>
                <div className="flex items-center font-[300] text-[3.2em] gap-4">conquistarão <h2 className="text-5xl font-[700]">um futuro melhor</h2></div> </div>
            <Button text="Faça agora sua doação" size="m" color="primary" />
        </div>
    );
}

export default Hero;