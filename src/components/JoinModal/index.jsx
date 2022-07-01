import "./joinmodal.css";
import JoinModalImg from "./../../assets/images/modal/join-modal-img.png";
import { ReactComponent as BgBtnOverlay } from "./../../assets/images/btn-overlay/bg-btn.svg";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const JoinModal = ({ joinCloseHandler }) => {
    const [getQty, setQty] = useState(1);

    const qtyIncrease = () => {
        setQty(getQty + 1);
    };

    const qtyDecrease = () => {
        if (getQty > 1) {
            setQty(getQty - 1);
        }
    };

    return (
        <>
            <div className="join-modal-box">
                <div className="join-modal-content">
                    <h2>
                        Collect Your NFT <br /> Before End
                    </h2>
                    <img src={JoinModalImg} alt="join-modal" />
                    <ul>
                        <li>Remaining</li>
                        <li>8888 / 8888</li>
                    </ul>
                    <ul>
                        <li>Price</li>
                        <li>3333 SGB</li>
                    </ul>
                    <ul>
                        <li>
                            <p>Quantity</p>
                            <button onClick={qtyDecrease}>-</button>
                        </li>
                        <li>{getQty}</li>
                        <li>
                            <button onClick={qtyIncrease}>+</button>
                            <p>3333 SGB</p>
                        </li>
                    </ul>

                    <button className="btn-bg-1">
                        <BgBtnOverlay />
                        MINT NOW
                    </button>
                    <p>Presale & Whitelist : 2500/8888</p>
                    <div className="join-close-btn">
                        <button onClick={joinCloseHandler}>
                            <RiCloseLine />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JoinModal;
