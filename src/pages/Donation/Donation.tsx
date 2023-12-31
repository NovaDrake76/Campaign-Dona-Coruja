import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { FaCopy, FaCheck } from "react-icons/fa";
import { FadeLoader } from "react-spinners";
import { t } from "i18next";

const Donation = () => {
    const [copied, setCopied] = useState(false)
    const [copiedNumber, setCopiedNumber] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    }

    const copyQRCode = () => {
        navigator.clipboard.writeText("00020126730014BR.GOV.BCB.PIX0136fcace115-0650-48bc-876a-9c54d72a9c040211Dona Coruja5204000053039865802BR5923Eugenia Kelly de Araujo6009SAO PAULO62140510ZVeWxsXY6u6304AC56")
        setCopied(true)
    }

    const copyNumber = () => {
        navigator.clipboard.writeText("84999720931")
        setCopiedNumber(true)
    }


    useEffect(() => {
        if (copied || copiedNumber) {
            setTimeout(() => {
                setCopied(false)
                setCopiedNumber(false)
            }, 2000)
        }
    }, [copied, copiedNumber])

    return (
        <div className="bg-[url('./assets/bg-1.webp')] bg-repeat-none bg-cover ">
            <div className="h-screen w-screen bg-[url('./assets/donation-bg.webp')] bg-repeat-none bg-cover flex flex-col md:flex-row items-center justify-center">
                <div className="p-4 py-8 bg-white rounded-3xl  flex flex-col items- gap-4 z-10 w-[216px] h-[302px]">
                    {isLoading && <div className="flex justify-center items-center mt-4 ml-2 h-[182px]">
                        <FadeLoader color="#ee59b3" />
                    </div>}
                    <img src="/images/qrcode.png" alt="qr code for donation" width={184} onLoad={handleImageLoad} />
                    <Button
                        text={copied ? t("donationCopiedButton") : t("donationCopyCodeButton")}
                        icon={<FaCopy />} size="s" onClick={copyQRCode} />

                </div>
                <div className="bg-primary rounded-3xl p-8 flex flex-col  text-2xl font-medium gap-9 -mt-4 md:-mt-0 md:-ml-4">
                    <div className="flex flex-col">
                        <span>
                            {t("donationPIXLabel")}
                        </span>
                        <span className="flex gap-2 items-center cursor-pointer" onClick={copyNumber}>
                            {t("donationPhoneNumber")}
                            {
                                copiedNumber ? <FaCheck /> : <FaCopy />
                            }
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span>
                            {t("donationAccountHolder")}
                        </span>
                        <span className="font-normal">
                            {t("donationBankName")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donation;