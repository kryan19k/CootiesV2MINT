import "./about.css";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "./../../assets/images/about/about-img.png";
import Card from "./Card";
import Icon1 from "./../../assets/images/about/about-icon-01.png";
import Icon2 from "./../../assets/images/about/about-icon-02.png";
import Icon3 from "./../../assets/images/about/about-icon-03.png";

const About = () => {
    return (
        <>
            <div className="about-box" id="about">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="10">
                            <Row className="align-items-center">
                                <Col lg={5} className="mb-4 mb-mb-0">
                                    <div className="about-img">
                                        <img
                                            className="img-fluid"
                                            src={AboutImg}
                                            alt="about"
                                        />
                                    </div>
                                </Col>
                                <Col lg={7} className="px-lg-0">
                                    <div className="about-content">
                                        <h4>
                                            THE STORY
                                            <svg
                                                width="36"
                                                height="11"
                                                viewBox="0 0 36 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clip-path="url(#clip0_2_306)">
                                                    <path
                                                        d="M36 6.97436V10.3173H32V6.97436H36ZM32 0.288452V3.6314H36V0.288452H32ZM24 6.97436V10.3173H28V6.97436H24ZM28 3.6314V6.97436H32V3.6314H28ZM24 0.288452V3.6314H28V0.288452H24ZM16 6.97436V10.3173H20V6.97436H16ZM20 3.6314V6.97436H24V3.6314H20ZM16 0.288452V3.6314H20V0.288452H16ZM8 6.97436V10.3173H12V6.97436H8ZM12 3.6314V6.97436H16V3.6314H12ZM8 0.288452V3.6314H12V0.288452H8ZM0 6.97436V10.3173H4V6.97436H0ZM4 3.6314V6.97436H8V3.6314H4ZM0 0.288452V3.6314H4V0.288452H0Z"
                                                        fill="url(#paint0_linear_2_306)"
                                                        fill-opacity="0.2"
                                                    />
                                                </g>
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_2_306"
                                                        x1="-1.92861e-08"
                                                        y1="5.72075"
                                                        x2="37"
                                                        y2="5.72075"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="white" />
                                                        <stop
                                                            offset="1"
                                                            stop-color="white"
                                                            stop-opacity="0"
                                                        />
                                                    </linearGradient>
                                                    <clipPath id="clip0_2_306">
                                                        <rect
                                                            width="36"
                                                            height="10.0289"
                                                            fill="white"
                                                            transform="translate(0 0.288452)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </h4>
                                        <h2>ABOUT US</h2>
                                        <p>
                                            The CootiesV2 is a collection of
                                            8,888 randomly generative NFT's
                                            living on the Flare network.
                                        </p>
                                        <p>
                                            This means that each Cootie is a
                                            unique, one-of-a-kind token that can
                                            never be replicated or duplicated.
                                            They are also indestructible,
                                            meaning that once they are minted,
                                            they will exist forever on the Flare
                                            network.
                                        </p>
                                        <p>
                                            The Cooties were created with the
                                            intention of being a fun and
                                            whimsical project that would bring
                                            attention to the Flare network and
                                            NFT technology. As such, they are
                                            not intended to have any intrinsic
                                            value. Instead, their value lies in
                                            their uniqueness and the fact that
                                            they are impossible to replicate.
                                        </p>
                                        <p>
                                            Depending on the uniqueness of your
                                            NFT, determines the output of $COOT
                                            or CootieCoin earned per day for
                                            staking. The Cooties Will feature
                                            its own play to earn battle card
                                            game. The game is still in
                                            development, but the CootieCoin can
                                            already be used as currency within
                                            the game to purchase items such as
                                            booster packs and card sleeves
                                            coming to the Marketplace.
                                        </p>
                                        <p>
                                            The Cooties are also airdropping
                                            random NFTs to Cootie wallet holders
                                            after the Mint.{" "}
                                        </p>
                                        <p>
                                            If you are interested in acquiring a
                                            Cootie, you can do so by
                                            participating in our live Mint
                                            happening on July 6th 2022. During
                                            this event, 8,888 Cooties will be
                                            minted and made available for
                                            purchase. The starting price of each
                                            Cootie will be $144 in Spark Tokens.{" "}
                                        </p>
                                        <p>
                                            So come join us on July 6th and get
                                            your very own Cootie!
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="4">
                                    <Card
                                        img={Icon1}
                                        title="Gaming NFTs"
                                        paragraph="Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure."
                                    />
                                </Col>
                                <Col lg="4">
                                    <Card
                                        img={Icon2}
                                        title="Play to Earn"
                                        paragraph='Finibus Bonorum et Malorum " by Cicero are also reproduced in their exact original.'
                                    />
                                </Col>
                                <Col lg="4">
                                    <Card
                                        img={Icon3}
                                        title="Metaverse Ready"
                                        paragraph="A Metaverse is a virtual world that uses blockchain technology to create a decentralized and secure environment. NFTs can be used to represent virtual assets in a Metaverse, such as land, buildings, or characters. Metaverse-ready NFTs are designed to be compatible with the Metaverse protocol, making them easy to use in a Metaverse environment."
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;
