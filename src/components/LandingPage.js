import CustomImg from "./CustomImg";

export default function landingPage() {
    const images = [
        "./img/gallery/burger.png",
        "./img/gallery/Caprese.png",
        "./img/gallery/brocolli.png",
        "./img/gallery/Spaghetti.png",
        "./img/gallery/curry.png",
        "./img/gallery/tacos.png",
        "./img/gallery/salad.png",
        "./img/gallery/chickenPizza.png",
        "./img/gallery/roll.png",
    ]

    return (
        <div className="section land">
            <div className="col composition">
                <h1 className="title">What Are We About</h1>
                <p className="info">"At Brio Sliced, we're all about making cooking enjoyable for everyone. Explore our easy recipes, perfect for beginners, and discover tasty options for seasoned cooks. We celebrate diverse tastes and dietary preferences, ensuring there's something for everyone. Join us in the joy of good food, no matter your skill level. Let's make cooking simple and delightful at Brio Sliced."
                </p>
                <button className="btn">Explore Now</button>
            </div>
            <div className="col gallery">
                {
                    images.map((src, index) => (
                        <CustomImg key={index} imgSrc={src} pt={"90%"} />
                    ))
                }
            </div>
        </div>
    )
}
{/* instead of repeating the custoImg will use const to call the img in the folder  */ }