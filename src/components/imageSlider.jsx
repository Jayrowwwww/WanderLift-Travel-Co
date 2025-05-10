import Jet from '../assets/_imgs/bg/jetplane.jpg'
import Plane from '../assets/_imgs/bg/first_page.jpg'
import Jetski from '../assets/_imgs/bg/jetski.jpg'

export default function Slider({ slider }) {
    const images = [Jet, Plane, Jetski];

    if (slider < 0 || slider >= images.index) return null;

    return (
        <img
            src={images[slider]}
            className="w-full h-full object-cover"
        />
    );
}