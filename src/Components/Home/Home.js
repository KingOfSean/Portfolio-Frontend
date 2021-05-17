import ImageSlider from '../Carousel/ImageSlider';
import { ImageData } from '../Carousel/ImageData';
import './Home.css';

const projectPics = [
    <img src="https://i.imgur.com/ruEdpGA.png" />,
    <img src="https://i.imgur.com/iOzpbmm.png" />,
    <img src="https://i.imgur.com/Am3L9Z4.png" />,
    <img src="https://i.imgur.com/Xp3mUsU.png" />
]

export default function Home(){
    return (
        <div className="home-page">
            <h1>Welcome to my Portfolio!</h1>
            <div className="home-content">
                <div className="home-description">
                    <p>
                    Welcome visitors! In my portfolio webpage, you will find information about me and my work as well as have access to links to my projects, my GitHub, and various ways of contacting me. I hope you all like what you see, and I’m always open to ideas that any of you might have. Thanks so much for stopping by! 
                    </p>
                </div>
                <div className="home-gallery">
                    <h4>Project Gallery</h4>
                    <ImageSlider slides={ImageData} />
                </div>
            </div>
        </div>
    )
}