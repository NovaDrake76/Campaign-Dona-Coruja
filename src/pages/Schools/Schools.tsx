import Button from "../../components/Button";

const Schools = () => {
    return (
        <div className="bg-[url('./assets/bg-1.webp')] bg-repeat-none bg-cover ">
        <div className="h-screen w-screen bg-[url('./assets/donation-bg.webp')] bg-repeat-none bg-cover flex flex-col md:flex-row items-center justify-center p-8 md:p-0 ">
            <div className="bg-white px-6 py-12 text-primary rounded-2xl max-w-3xl text-center flex flex-col items-center gap-3">

                Participe dessa corrente do bem. Um simples gesto pode fazer toda a diferença. Confira as regras para o cadastro e faça os kits escolares chegarem até a sua instituição. 
            <div> <Button text="Em Breve!"/></div>
           
            </div>
            </div>
            </div>
    );
}

export default Schools;