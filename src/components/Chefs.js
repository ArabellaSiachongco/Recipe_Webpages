import ChefCard from "./ChefCards";

export default function Chef() {

    const Chef = [
        {
            name: "Arabella",
            image: "/img/top-chef/img_1.png",
            recipeCount: "05",
            cuisine: "Canadian"
        },
        {
            name: "Chrysalis",
            image: "/img/top-chef/img_2.png",
            recipeCount: "13",
            cuisine: "American"
        },
        {
            name: "Rosella",
            image: "/img/top-chef/img_3.png",
            recipeCount: "16",
            cuisine: "japanese"
        },
        {
            name: "Bella's",
            image: "/img/top-chef/img_5.png",
            recipeCount: "18",
            cuisine: "Chinese"
        },
        {
            name: "Ellea",
            image: "/img/top-chef/img_4.png",
            recipeCount: "20",
            cuisine: "Italian"
        },
        {
            name: "Sia Co",
            image: "/img/top-chef/img_6.png",
            recipeCount: "26",
            cuisine: "French"
        }
    ]

    return (
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                {
                    Chef.map(chef => <ChefCard key={chef.name} chef={chef} />)
                }
            </div>
        </div>
    )
}