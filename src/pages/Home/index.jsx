import { Col, Container, Row } from "react-bootstrap";
import About from "../../components/About";
import Banner from "../../components/Banner";
import Collection from "../../components/Collection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Headline from "../../components/Headline";
import "./home.css";
import RoadmapImg from "./../../assets/images/roadmap/roadmap.png";
import RoadmapMan02 from "./../../assets/images/roadmap/roadmap-man-02.png";
import RoadmapMan01 from "./../../assets/images/roadmap/roadmap-man-01.png";
import TeamCard from "../../components/TeamCard";
import ProfileImg from "./../../assets/images/team-member/profile.png";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import FaqLeftImg from "./../../assets/images/faq/faq-left-img.png";
import JoinModal from "../../components/JoinModal";
import ConnectWallet from "../../components/ConnectWallet";

const Home = () => {
    const mainRef = useRef();

    const [getFaqContent, setFaqContent] = useState([
        {
            id: uuidv4(),
            title: "What is MiNFT ?",
            body: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
            isCollapsed: false,
        },
        {
            id: uuidv4(),
            title: "How we can buy and invest NFT ?",
            body: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
            isCollapsed: false,
        },
        {
            id: uuidv4(),
            title: "Why we should choose MiNFT ?",
            body: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
            isCollapsed: false,
        },
        {
            id: uuidv4(),
            title: "Where we can buy and sell NFts ?",
            body: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
            isCollapsed: false,
        },
        {
            id: uuidv4(),
            title: "How secure is this token ?",
            body: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.",
            isCollapsed: false,
        },
    ]);

    const faqCollapseHandler = (i) => {
        const collapse = getFaqContent.map((item) => {
            if (item.id === i) {
                if (item.isCollapsed) {
                    item.isCollapsed = false;
                } else {
                    item.isCollapsed = true;
                }
            }
            return item;
        });

        setFaqContent(collapse);
    };
    // is join modal open

    const [isJoinModal, setJoinModal] = useState(false);
    const [isConnectModal, setConnectModal] = useState(false);

    const joinCloseHandler = () => {
        setJoinModal(false);
    };

    const mintModalHandler = () => {
        setJoinModal(true);
    };

    const ConnectHandler = () => {
        setConnectModal(true);
    };

    const connectCloseHandler = () => {
        setConnectModal(false);
    };

    return (
        <div ref={mainRef}>
            <Header ConnectHandler={ConnectHandler} />
            <Banner mintModalHandler={mintModalHandler} />
            <Collection />
            <About />
            <div className="roadmap-box" id="roadmap">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="6">
                            <Headline title="Our Goals" headline="Roadmap" />
                        </Col>
                    </Row>
                </Container>
                <img
                    className="roadmap-main-img"
                    src={RoadmapImg}
                    alt="roadmap"
                />
                <img
                    className="roadmap-obj-right"
                    src={RoadmapMan02}
                    alt="man"
                />
                <img
                    className="roadmap-obj-left"
                    src={RoadmapMan01}
                    alt="man"
                />
            </div>
            <div className="tram-member-box" id="team">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="6">
                            <Headline
                                title="TEAM MEMBERS"
                                headline="Meet The Crew"
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg="8">
                            <Row>
                                <Col lg="4" sm="4">
                                    <TeamCard
                                        img={ProfileImg}
                                        name="Thoth"
                                        title="Founder"
                                    />
                                </Col>
                                <Col lg="4" sm="4">
                                    <TeamCard
                                        img={ProfileImg}
                                        name="Golfredo"
                                        title="Developer"
                                    />
                                </Col>
                                <Col lg="4" sm="4">
                                    <TeamCard
                                        img={ProfileImg}
                                        name="Tarak"
                                        title="Community"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="faq-box" id="faq">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="6">
                            <Headline
                                title="QUESTIONS & ANSWERS"
                                headline="FREQUENTLY  ASKED
                                QUESTIONS"
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="faq-content">
                                {getFaqContent.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="faq-main-content"
                                        >
                                            <div className="faq-header-title">
                                                <button
                                                    onClick={() => {
                                                        faqCollapseHandler(
                                                            item.id
                                                        );
                                                    }}
                                                >
                                                    <p>{item.title}</p>
                                                    {item.isCollapsed ? (
                                                        <AiOutlineMinus />
                                                    ) : (
                                                        <AiOutlinePlus />
                                                    )}
                                                </button>
                                            </div>
                                            {item.isCollapsed && (
                                                <div className="faq-body-content">
                                                    <p>{item.body}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src={FaqLeftImg} alt="faq" />
            </div>
            <Footer />
            {isJoinModal && <JoinModal joinCloseHandler={joinCloseHandler} />}
            {isConnectModal && (
                <ConnectWallet connectCloseHandler={connectCloseHandler} />
            )}
        </div>
    );
};

export default Home;
