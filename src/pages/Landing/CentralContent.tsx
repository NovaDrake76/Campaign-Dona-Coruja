import TextAndImage from "../../components/TextAndImage";
import Button from "../../components/Button";

const CentralContent = () => {
    return (
        <div className="flex flex-col items-center text-black mt-12 gap-28">
            <TextAndImage
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et mollis lectus, eget sagittis erat. Suspendisse ac urna scelerisque, auctor metus sed, pharetra erat. Phasellus sodales, mauris luctus aliquet elementum, urna purus tempor sem, id lacinia odio eros sed mauris. Aliquam sagittis orci in nunc ornare accumsan. "
                image="https://scontent.fnat1-1.fna.fbcdn.net/v/t39.30808-6/405366313_1824723264614775_6930720713956821288_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF2ZUPBCFGl7yxeU7-R_FyF9FG2Pdg-6HP0UbY92D7oc76ME77JbdIf9xH1v-jb12R50EUf1MupripL8RP6cILi&_nc_ohc=7f62mO2B5fwAX-tRlXo&_nc_ht=scontent.fnat1-1.fna&oh=00_AfDbMJRka9EGPhLuXhdYJR6mU06dp7X031rusqT6zuSnsQ&oe=65693C7D"
            />
            <div>
                <Button text="Faça agora sua doação" size="l" color="secondary" />
            </div>
            <TextAndImage
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et mollis lectus, eget sagittis erat. Suspendisse ac urna scelerisque, auctor metus sed, pharetra erat. Phasellus sodales, mauris luctus aliquet elementum, urna purus tempor sem, id lacinia odio eros sed mauris. Aliquam sagittis orci in nunc ornare accumsan. "
                image="https://scontent.fnat1-1.fna.fbcdn.net/v/t39.30808-6/405366313_1824723264614775_6930720713956821288_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF2ZUPBCFGl7yxeU7-R_FyF9FG2Pdg-6HP0UbY92D7oc76ME77JbdIf9xH1v-jb12R50EUf1MupripL8RP6cILi&_nc_ohc=7f62mO2B5fwAX-tRlXo&_nc_ht=scontent.fnat1-1.fna&oh=00_AfDbMJRka9EGPhLuXhdYJR6mU06dp7X031rusqT6zuSnsQ&oe=65693C7D"
                reverse
            />

        </div>
    )
}

export default CentralContent;