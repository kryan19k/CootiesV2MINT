import "./connectwallet.css";
import { RiCloseLine } from "react-icons/ri";
import Icon1 from "./../../assets/images/connect/icon-1.png";
import Icon2 from "./../../assets/images/connect/icon-2.png";
import Icon3 from "./../../assets/images/connect/icon-3.png";
import Icon4 from "./../../assets/images/connect/icon-4.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const ConnectWallet = ({ connectCloseHandler }) => {
    return (
        <>
            <div className="join-modal-box connect-modal-box">
                <div className="join-modal-content connect-modal-content">
                    <h2>Connect Wallet</h2>
                    <p>
                        Please select a wallet to connect for start Minting your
                        NFTs
                    </p>
                    <div className="cm-wallet">
                        <button>
                            <div>
                                <img src={Icon1} alt="icon" />
                                <p>MetaMask</p>
                            </div>
                            <MdKeyboardArrowRight />
                        </button>
                        <button>
                            <div>
                                <img src={Icon2} alt="icon" />
                                <p>Bifrost</p>
                            </div>
                            <MdKeyboardArrowRight />
                        </button>
                        <button>
                            <div>
                                <img src={Icon3} alt="icon" />
                                <p>D'Cent</p>
                            </div>
                            <MdKeyboardArrowRight />
                        </button>
                        <button>
                            <div>
                                <img src={Icon4} alt="icon" />
                                <p>WalletConnect</p>
                            </div>
                            <MdKeyboardArrowRight />
                        </button>
                    </div>
                    <p>
                        By connecting your wallet, you agree to our
                        <b>Terms of Service</b> and our <b>Privacy Policy.</b>
                    </p>
                    <div className="join-close-btn">
                        <button onClick={connectCloseHandler}>
                            <RiCloseLine />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConnectWallet;
