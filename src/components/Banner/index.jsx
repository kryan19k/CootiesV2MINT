import { Container, Row, Col } from "react-bootstrap";
import "./banner.css";
import { ReactComponent as BgBtnOverlay } from "./../../assets/images/btn-overlay/bg-btn.svg";
import { ReactComponent as OutlineBtnOverlay } from "./../../assets/images/btn-overlay/bg-btn-outline.svg";
import BannerMintImg from "./../../assets/images/banner-mint.gif";
import BannerTargetImg from "./../../assets/images/banner-target-img.png";
import MintLiveImg from "./../../assets/images/mint-live.png";
import ShapeLeft from "./../../assets/images/shapes-left.png";
import ShapeRight from "./../../assets/images/shapes-right.png";

const Banner = ({ mintModalHandler }) => {
    return (
        <>
            <div className="banner-part">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col lg="10">
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <div className="banner-content">
                                        <h2>The Cooties V2 NFT Collection</h2>
                                        <h4>0000 / 8888 Minted</h4>
                                        <div className="banner-btn">
                                            <button
                                                className="btn-bg-1"
                                                onClick={mintModalHandler}
                                            >
                                                <BgBtnOverlay />
                                                MINT NOW
                                            </button>
                                            <button className="btn-outline-1">
                                                <OutlineBtnOverlay />
                                                WHITELIST NOW
                                            </button>
                                        </div>
                                        <p>
                                            Price 3000
                                            SGB + gas
                                        </p>
                                        <p>
                                            MINT GOES LIVE ON
                                            <span> 06 JULY 14:30 EST</span>
                                        </p>
                                        <p>Presale Starts at 09:00-14:00 EST :
                                            2500/8888 </p>
                                        <img
                                            src={BannerTargetImg}
                                            alt="target"
                                        />
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="banner-img">
                                        <img
                                            src={BannerMintImg}
                                            alt="banner-mint"
                                        />
                                        <img
                                            src={MintLiveImg}
                                            alt="mint-live"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg="10">
                            <div className="banner-mint-head">
                                <p>EASY STEPS</p>
                                <h4>How to mint</h4>
                            </div>
                        </Col>
                        <Col lg="10">
                            <Row>
                                <Col lg="3">
                                    <div className="banner-mint-card">
                                        <h4 className="one">1</h4>
                                        <p>Connect Your Wallet</p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div className="banner-mint-card">
                                        <h4 className="two">2</h4>
                                        <p>Select Your Quantity</p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div className="banner-mint-card">
                                        <h4 className="three">3</h4>
                                        <p>Confirm the Transaction</p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div className="banner-mint-card">
                                        <h4 className="four">4</h4>
                                        <p>Receive Your NFTs</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-counter-box">
                    <img
                        className="banner-shape-left"
                        src={ShapeLeft}
                        alt="shape-left"
                    />
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10">
                                <Row>
                                    <Col lg="3" sm="3" className="mb-4 mb-md-0">
                                        <div className="banner-counter-content">
                                            <h2>8888</h2>
                                            <p>Total Items</p>
                                        </div>
                                    </Col>
                                    <Col lg="3" sm="3" className="mb-4 mb-md-0">
                                        <div className="banner-counter-content">
                                            <h2>0</h2>
                                            <p>Total Owners</p>
                                        </div>
                                    </Col>
                                    <Col lg="3" sm="3" className="mb-4 mb-md-0">
                                        <div className="banner-counter-content">
                                            <h2>0</h2>
                                            <p>Floor Price (SGB)</p>
                                        </div>
                                    </Col>
                                    <Col lg="3" sm="3" className="mb-4 mb-md-0">
                                        <div className="banner-counter-content">
                                            <h2>0</h2>
                                            <p>Volume Traded (SGB)</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <img
                        className="banner-shape-right"
                        src={ShapeRight}
                        alt="shape-right"
                    />
                </div>
            </div>
        </>
    );
};

export default Banner;
