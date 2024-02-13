export default function CustomImg({ imgSrc, pt }) {
    return (
        <div className="custom-image" style={{ paddingTop: pt }}>
            <img src={process.env.PUBLIC_URL + imgSrc} alt="images of foods" />
        </div>
    );
}
