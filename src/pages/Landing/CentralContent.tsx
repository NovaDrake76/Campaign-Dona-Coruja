import TextAndImage from "../../components/TextAndImage";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const CentralContent = () => {
    return (
        <div className="flex flex-col items-center text-black mt-12 gap-12">
            <TextAndImage
                text="Em 2014, um grupo de pessoas reuniu esforços em prol da arrecadação de dinheiro e de materiais escolares, a fim de ajudar crianças cujas famílias não tinham condições de comprar todo o aparato necessário para a volta às aulas. Desde então, todos os anos a campanha Dona Coruja garante que jovens estudantes de Caicó e região recebam auxílio."
                image='/images/12.png'
            />
            <div className="bg-[url('./assets/bg-section.webp')] bg-cover bg-center w-full h-72 flex flex-col items-center justify-center gap-4">
                <Link to="/donation">

                    <Button text="Saiba como ajudar" size="l" color="secondary" />
                </Link>
            </div>
            <TextAndImage
                text="Nosso objetivo é atender alunos de escolas públicas, de modo que possam iniciar o ano letivo com um material escolar decente. Esperamos que assim eles se sintam mais estimulados em relação aos estudos e consigam contribuir para um futuro melhor."
                image='/images/3.jpg'
                reverse
            />

        </div>
    )
}

export default CentralContent;