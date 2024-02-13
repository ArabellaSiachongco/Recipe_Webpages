export default function CustomImg({imgSrc, pt}){
    return (
        <div className="custom-image" style={{paddingTop:pt}}>
            <img src={imgSrc} alt="images of foods"></img>
        </div>
    )
}