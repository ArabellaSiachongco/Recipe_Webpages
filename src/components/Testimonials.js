import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const people = [
        {
            id: 1,
            image:`${process.env.PUBLIC_URL}/img/top-chef/img_1.png`,
            name: "Chef Arabella",
            title: "Executive Chef at BellaBites",
            quote: "Wow! BrioSliced has completely transformed the way I prepare meals. The precision and ease of use make every dish a culinary masterpiece. The flavors are simply delicious! BrioSliced has become a tool in my kitchen."
            
        },
        {
            id: 2,
            image: `${process.env.PUBLIC_URL}/img/top-chef/img_2.png`,
            name: "Chef Olivia",
            title: "Blogger and Influencer",
            quote: "Deliciousness redefined! BrioSliced brings joy to my kitchen. The flavors in my dishes have reached a whole new level of perfection. It's not just a slicer; it's a taste enhancer! I'm in awe of the results"
        },
        {
            id: 3,
            image: `${process.env.PUBLIC_URL}/img/top-chef/img_3.png`,
            name: "Alex Rodriguez",
            title: " Manager at SavorySpoon",
            quote: "Incredible precision, incredible taste! BrioSliced has become my kitchen companion for a reason. The ease of use and the incredible flavors it brings to my recipes are beyond compare. Cooking has been this delightful!"
        },
        {
            id: 4,
            image: `${process.env.PUBLIC_URL}/img/top-chef/img_4.png`,
            name: "Maya Patel",
            title: "Home Chef and Food Enthusiast",
            quote: "BrioSliced is a game-changer! I can't believe how effortlessly it slices through ingredients. The precision is unmatched, and it has taken my cooking to a whole new level. Every meal feels like a culinary masterpiece now!"
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 8000); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="section">
            <h1 className="title">Testimonials</h1>
            <div className="testimonials-container">
                <button className="arrow-btn prev-btn" onClick={handlePrev}>&#8249;</button>
                <div className="testimonial">
                <img src={people[currentIndex].image} alt={`${people[currentIndex].name} - ${people[currentIndex].title}`} />
                    <h3>{people[currentIndex].name}</h3>
                    <p className='job'>{people[currentIndex].title}</p>
                    <p className='desc'>{people[currentIndex].quote}</p>
                </div>
                <button className="arrow-btn next-btn" onClick={handleNext}>&#8250;</button>
            </div>
        </div>
    );
};

export default Testimonials;
