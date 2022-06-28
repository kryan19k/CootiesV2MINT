import "./card.css";

const Card = ({ img, title, paragraph }) => {
    return (
        <>
            <div className="about-card-box">
                <div className="about-card-head">
                    <img src={img} alt="card" />
                    <h2>{title}</h2>
                </div>
                <p>{paragraph}</p>
            </div>
        </>
    );
};

export default Card;
