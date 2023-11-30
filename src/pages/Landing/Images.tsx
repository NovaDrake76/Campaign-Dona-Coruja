import LabeledImage from "../../components/LabeledImage";

const Images = () => {

    const Images = [{
        src: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t39.30808-6/405366313_1824723264614775_6930720713956821288_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF2ZUPBCFGl7yxeU7-R_FyF9FG2Pdg-6HP0UbY92D7oc76ME77JbdIf9xH1v-jb12R50EUf1MupripL8RP6cILi&_nc_ohc=7f62mO2B5fwAX-tRlXo&_nc_ht=scontent.fnat1-1.fna&oh=00_AfDbMJRka9EGPhLuXhdYJR6mU06dp7X031rusqT6zuSnsQ&oe=65693C7D',
        alt: 'Crianças sorrindo',
        label: 'we live'
    }, {
        src: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t39.30808-6/405366313_1824723264614775_6930720713956821288_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF2ZUPBCFGl7yxeU7-R_FyF9FG2Pdg-6HP0UbY92D7oc76ME77JbdIf9xH1v-jb12R50EUf1MupripL8RP6cILi&_nc_ohc=7f62mO2B5fwAX-tRlXo&_nc_ht=scontent.fnat1-1.fna&oh=00_AfDbMJRka9EGPhLuXhdYJR6mU06dp7X031rusqT6zuSnsQ&oe=65693C7D',
        alt: 'Crianças sorrindo',
        label: 'we love'
    }, {
        src: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t39.30808-6/405366313_1824723264614775_6930720713956821288_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF2ZUPBCFGl7yxeU7-R_FyF9FG2Pdg-6HP0UbY92D7oc76ME77JbdIf9xH1v-jb12R50EUf1MupripL8RP6cILi&_nc_ohc=7f62mO2B5fwAX-tRlXo&_nc_ht=scontent.fnat1-1.fna&oh=00_AfDbMJRka9EGPhLuXhdYJR6mU06dp7X031rusqT6zuSnsQ&oe=65693C7D',
        alt: 'Crianças sorrindo',
        label: 'we lie'
    }];

    return (
        <div className="flex w-full justify-center">
            <div className="flex items-center justify-around gap-12 max-w-5xl -mt-24">
                {Images.map((image) => (
                    <LabeledImage src={image.src} alt={image.alt} label={image.label} />
                ))}
            </div>
        </div>
    );
};

export default Images;