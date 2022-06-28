import "./teamcard.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TeamCard = ({ img, name, title }) => {
    return (
        <>
            <div className="teamcard-box">
                <div>
                    <div className="teamcard-img">
                        <img src={img} alt="team-card" />
                    </div>
                    <h4>{name}</h4>
                    <p>{title}</p>
                    <div className="teamcard-social">
                        <button>
                            <FaFacebookF />
                        </button>
                        <button>
                            <FaInstagram />
                        </button>
                        <button>
                            <FaLinkedinIn />
                        </button>
                    </div>
                </div>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        width="8"
                        height="8"
                        fill="white"
                        fill-opacity="0.2"
                    />
                    <rect
                        x="8"
                        y="8"
                        width="8"
                        height="8"
                        fill="white"
                        fill-opacity="0.2"
                    />
                    <rect
                        y="16"
                        width="8"
                        height="8"
                        fill="white"
                        fill-opacity="0.2"
                    />
                    <rect
                        x="16"
                        width="8"
                        height="8"
                        fill="white"
                        fill-opacity="0.2"
                    />
                </svg>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="24"
                        width="8"
                        height="8"
                        transform="rotate(90 24 0)"
                        fill="white"
                        fill-opacity="0.2"
                    />
                    <rect
                        x="16"
                        y="8"
                        width="8"
                        height="8"
                        transform="rotate(90 16 8)"
                        fill="white"
                        fill-opacity="0.2"
                    />
                    <rect
                        x="8"
                        width="8"
                        height="8"
                        transform="rotate(90 8 0)"
                        fill="white"
                        fill-opacity="0.2"
                    />
                    <rect
                        x="24"
                        y="16"
                        width="8"
                        height="8"
                        transform="rotate(90 24 16)"
                        fill="white"
                        fill-opacity="0.2"
                    />
                </svg>
            </div>
        </>
    );
};

export default TeamCard;
