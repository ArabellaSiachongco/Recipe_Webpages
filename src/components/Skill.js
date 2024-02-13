export default function Skills() {
    const list = [
        "Learn New Recipes",
        "Expriment with Food",
        "Write your own recipe",
        "Know nutritional Food",
        "Get Cooking recipe",
        "Get Ranked"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
            <img src={process.env.PUBLIC_URL + "/img/gallery/Pizza.png"} alt="Delicious Pizza"></img>
            </div>
            <div className="col composition">
                <h1 className="title">Improve Your Culinary Skills</h1>
                {
                    list.map((item, index) => (
                        <p className="skill-item" key={index}>{item}</p>
                    ))
                }
                <button className="btn">Sign up Now</button>
            </div>
        </div>
    )
}