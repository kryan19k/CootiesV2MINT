import FooterSecond from "../../components/FooterSecond";
import HeaderSecond from "../../components/HeaderSecond";
import "./blogdetails.css";
import BlogImg from "./../../assets/images/blog-details/blog-img.png";
import BlogImg2 from "./../../assets/images/blog-details/blog-img-2.png";
import BtnImg from "./../../assets/images/blog-details/btn-img.png";
import { ReactComponent as BlogQuotes } from "./../../assets/images/blog-details/blog-quotes.svg";
import { Link } from "react-router-dom";
import { ReactComponent as BgBtnOverlay } from "./../../assets/images/btn-overlay/bg-btn.svg";
import ConnectWallet from "../../components/ConnectWallet";
import { useState } from "react";

const BlogDetails = () => {
    const [isConnectModal, setConnectModal] = useState(false);
    const ConnectHandler = () => {
        setConnectModal(true);
    };

    const connectCloseHandler = () => {
        setConnectModal(false);
    };
    return (
        <>
            <HeaderSecond ConnectHandler={ConnectHandler} />
            <div className="blog-details-boc">
                <div className="container ui-container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-head">
                                <h4>
                                    HOME . LATEST BLOG .
                                    <span>BLOG DETAILS</span>
                                </h4>
                            </div>
                            <div className="blog-details-content">
                                <img src={BlogImg} alt="blog" />
                                <ul>
                                    <li>
                                        <svg
                                            width="21"
                                            height="22"
                                            viewBox="0 0 21 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 11.75C6.83 11.75 4.25 9.17 4.25 6C4.25 2.83 6.83 0.25 10 0.25C13.17 0.25 15.75 2.83 15.75 6C15.75 9.17 13.17 11.75 10 11.75ZM10 1.75C7.66 1.75 5.75 3.66 5.75 6C5.75 8.34 7.66 10.25 10 10.25C12.34 10.25 14.25 8.34 14.25 6C14.25 3.66 12.34 1.75 10 1.75Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M13.8196 21.7499C13.4396 21.7499 13.0796 21.6099 12.8196 21.3499C12.5096 21.0399 12.3696 20.5899 12.4396 20.1199L12.6296 18.7699C12.6796 18.4199 12.8896 18.0099 13.1396 17.7499L16.6796 14.2099C18.0996 12.7899 19.3496 13.5999 19.9596 14.2099C20.4796 14.7299 20.7496 15.2899 20.7496 15.8499C20.7496 16.4199 20.4896 16.9499 19.9596 17.4799L16.4195 21.0199C16.1695 21.2699 15.7496 21.4799 15.3996 21.5299L14.0495 21.7198C13.9695 21.7398 13.8996 21.7499 13.8196 21.7499ZM18.3096 14.9199C18.1296 14.9199 17.9696 15.0399 17.7396 15.2699L14.1996 18.8099C14.1696 18.8399 14.1196 18.9399 14.1196 18.9799L13.9396 20.2299L15.1896 20.0499C15.2296 20.0399 15.3295 19.9899 15.3595 19.9599L18.8996 16.4199C19.0596 16.2599 19.2496 16.0299 19.2496 15.8499C19.2496 15.6999 19.1296 15.4899 18.8996 15.2699C18.6596 15.0299 18.4796 14.9199 18.3096 14.9199Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M18.9206 18.2198C18.8506 18.2198 18.7806 18.2099 18.7206 18.1899C17.4006 17.8199 16.3506 16.7699 15.9806 15.4499C15.8706 15.0499 16.1006 14.6399 16.5006 14.5299C16.9006 14.4199 17.3106 14.6499 17.4206 15.0499C17.6506 15.8699 18.3006 16.5199 19.1206 16.7499C19.5206 16.8599 19.7506 17.2799 19.6406 17.6699C19.5506 17.9999 19.2506 18.2198 18.9206 18.2198Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M1.41016 21.75C1.00016 21.75 0.660156 21.41 0.660156 21C0.660156 16.73 4.85018 13.25 10.0002 13.25C11.0902 13.25 12.1702 13.41 13.1802 13.71C13.5802 13.83 13.8002 14.25 13.6802 14.64C13.5602 15.04 13.1402 15.26 12.7502 15.14C11.8702 14.88 10.9502 14.74 10.0002 14.74C5.68018 14.74 2.16016 17.54 2.16016 20.99C2.16016 21.41 1.82016 21.75 1.41016 21.75Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <p>INNA MOUAZ</p>{" "}
                                    </li>
                                    <li>
                                        <svg
                                            width="20"
                                            height="22"
                                            viewBox="0 0 20 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.75 4.5C5.34 4.5 5 4.16 5 3.75V0.75C5 0.34 5.34 0 5.75 0C6.16 0 6.5 0.34 6.5 0.75V3.75C6.5 4.16 6.16 4.5 5.75 4.5Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M13.75 4.5C13.34 4.5 13 4.16 13 3.75V0.75C13 0.34 13.34 0 13.75 0C14.16 0 14.5 0.34 14.5 0.75V3.75C14.5 4.16 14.16 4.5 13.75 4.5Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.25 13.2498C6.12 13.2498 5.99 13.2198 5.87 13.1698C5.74 13.1198 5.64 13.0498 5.54 12.9598C5.36 12.7698 5.25 12.5198 5.25 12.2498C5.25 12.1198 5.28 11.9898 5.33 11.8698C5.38 11.7498 5.45 11.6398 5.54 11.5398C5.64 11.4498 5.74 11.3798 5.87 11.3298C6.23 11.1798 6.68 11.2598 6.96 11.5398C7.14 11.7298 7.25 11.9898 7.25 12.2498C7.25 12.3098 7.24 12.3798 7.23 12.4498C7.22 12.5098 7.2 12.5698 7.17 12.6298C7.15 12.6898 7.12 12.7498 7.08 12.8098C7.05 12.8598 7 12.9098 6.96 12.9598C6.77 13.1398 6.51 13.2498 6.25 13.2498Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M9.75 13.2499C9.62 13.2499 9.49 13.2199 9.37 13.1699C9.24 13.1199 9.14 13.0499 9.04 12.9599C8.86 12.7699 8.75 12.5199 8.75 12.2499C8.75 12.1199 8.78 11.9899 8.83 11.8699C8.88 11.7499 8.95 11.6399 9.04 11.5399C9.14 11.4499 9.24 11.3799 9.37 11.3299C9.73 11.1699 10.18 11.2599 10.46 11.5399C10.64 11.7299 10.75 11.9899 10.75 12.2499C10.75 12.3099 10.74 12.3799 10.73 12.4499C10.72 12.5099 10.7 12.5699 10.67 12.6299C10.65 12.6899 10.62 12.7499 10.58 12.8099C10.55 12.8599 10.5 12.9099 10.46 12.9599C10.27 13.1399 10.01 13.2499 9.75 13.2499Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M13.25 13.2499C13.12 13.2499 12.99 13.2199 12.87 13.1699C12.74 13.1199 12.64 13.0499 12.54 12.9599C12.5 12.9099 12.46 12.8599 12.42 12.8099C12.38 12.7499 12.35 12.6899 12.33 12.6299C12.3 12.5699 12.28 12.5099 12.27 12.4499C12.26 12.3799 12.25 12.3099 12.25 12.2499C12.25 11.9899 12.36 11.7299 12.54 11.5399C12.64 11.4499 12.74 11.3799 12.87 11.3299C13.24 11.1699 13.68 11.2599 13.96 11.5399C14.14 11.7299 14.25 11.9899 14.25 12.2499C14.25 12.3099 14.24 12.3799 14.23 12.4499C14.22 12.5099 14.2 12.5699 14.17 12.6299C14.15 12.6899 14.12 12.7499 14.08 12.8099C14.05 12.8599 14 12.9099 13.96 12.9599C13.77 13.1399 13.51 13.2499 13.25 13.2499Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.25 16.7502C6.12 16.7502 5.99 16.7202 5.87 16.6702C5.75 16.6202 5.64 16.5502 5.54 16.4602C5.36 16.2702 5.25 16.0102 5.25 15.7502C5.25 15.6202 5.28 15.4902 5.33 15.3702C5.38 15.2402 5.45 15.1302 5.54 15.0402C5.91 14.6702 6.59 14.6702 6.96 15.0402C7.14 15.2302 7.25 15.4902 7.25 15.7502C7.25 16.0102 7.14 16.2702 6.96 16.4602C6.77 16.6402 6.51 16.7502 6.25 16.7502Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M9.75 16.7502C9.49 16.7502 9.23 16.6402 9.04 16.4602C8.86 16.2702 8.75 16.0102 8.75 15.7502C8.75 15.6202 8.78 15.4902 8.83 15.3702C8.88 15.2402 8.95 15.1302 9.04 15.0402C9.41 14.6702 10.09 14.6702 10.46 15.0402C10.55 15.1302 10.62 15.2402 10.67 15.3702C10.72 15.4902 10.75 15.6202 10.75 15.7502C10.75 16.0102 10.64 16.2702 10.46 16.4602C10.27 16.6402 10.01 16.7502 9.75 16.7502Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M13.25 16.7499C12.99 16.7499 12.73 16.6399 12.54 16.4599C12.45 16.3699 12.38 16.2599 12.33 16.1299C12.28 16.0099 12.25 15.8799 12.25 15.7499C12.25 15.6199 12.28 15.4899 12.33 15.3699C12.38 15.2399 12.45 15.1299 12.54 15.0399C12.77 14.8099 13.12 14.6999 13.44 14.7699C13.51 14.7799 13.57 14.7999 13.63 14.8299C13.69 14.8499 13.75 14.8799 13.81 14.9199C13.86 14.9499 13.91 14.9999 13.96 15.0399C14.14 15.2299 14.25 15.4899 14.25 15.7499C14.25 16.0099 14.14 16.2699 13.96 16.4599C13.77 16.6399 13.51 16.7499 13.25 16.7499Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M18.25 8.58984H1.25C0.84 8.58984 0.5 8.24984 0.5 7.83984C0.5 7.42984 0.84 7.08984 1.25 7.08984H18.25C18.66 7.08984 19 7.42984 19 7.83984C19 8.24984 18.66 8.58984 18.25 8.58984Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M13.75 21.5H5.75C2.1 21.5 0 19.4 0 15.75V7.25C0 3.6 2.1 1.5 5.75 1.5H13.75C17.4 1.5 19.5 3.6 19.5 7.25V15.75C19.5 19.4 17.4 21.5 13.75 21.5ZM5.75 3C2.89 3 1.5 4.39 1.5 7.25V15.75C1.5 18.61 2.89 20 5.75 20H13.75C16.61 20 18 18.61 18 15.75V7.25C18 4.39 16.61 3 13.75 3H5.75Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <p>18 FEB, 2022</p>
                                    </li>
                                </ul>
                                <h2>
                                    It’s the Great Chance to Invest in Metaverse
                                    NFT
                                </h2>
                            </div>
                            <div className="blog-details-main-content">
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from 45
                                    BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at
                                    Hampden-Sydney College.
                                </p>

                                <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical Latin literature from 45
                                    BC, making it over 2000 years old. Richard
                                    McClintock, a Latin professor at
                                    Hampden-Sydney College There are many
                                    variations of passages of Lorem Ipsum
                                    available, but the majority have suffered
                                    alteration in some form, by injected humour,
                                    or randomised words which don't look even
                                    slightly believable. If you are going to use
                                    a passage of Lorem Ipsum, you need to be
                                    sure there isn't anything embarrassing.
                                </p>
                                <h4>Play-to-Earn</h4>
                                <p>
                                    Richard McClintock, a Latin professor at
                                    Hampden-Sydney College There are many
                                    variations of passages of available, but the
                                    majority have suffered alteration in some
                                    form.
                                </p>
                                <p>
                                    Injected humour, or randomised words which
                                    don't look even slightly believable. If you
                                    are going to use a passage of Lorem Ipsum,
                                    you need to be sure there isn't anything
                                    embarrassing. making it over 2000 years old.{" "}
                                </p>
                            </div>
                            <div className="blog-details-quotes">
                                <BlogQuotes />
                                <p>
                                    On the other hand, we denounce with
                                    righteous indignation and dislike men who
                                    are so beguiled and demoralized by the
                                    charms of pleasure.
                                </p>
                            </div>
                            <div className="blog-details-img">
                                <img src={BlogImg2} alt="blog" />
                                <img src={BlogImg2} alt="blog" />
                            </div>
                            <div className="blog-details-list">
                                <h4>IGO Facts</h4>
                                <p>
                                    Let’s take a closer look at the Heroes
                                    Chained IGO information and GamFi holders’
                                    opportunity to buy $GF tokens before market
                                    listing through the IGO on the Launchpad on
                                    January 17.
                                </p>
                                <ul>
                                    <li>Name: MINTO NFT</li>
                                    <li>Token Type: BNB</li>
                                    <li>Total supply: 100 000 000</li>
                                    <li>Initial Mcap: $679K</li>
                                    <li>IGO Date: March 30</li>
                                    <li>
                                        Allocation: $400K (including 5% success
                                        fee)
                                    </li>
                                    <li>IGO Price: $0.35</li>
                                    <li>
                                        Vesting: 20% at TGE, then 13,33% every
                                        month for 6 months
                                    </li>
                                </ul>
                                <h4>About MintO</h4>
                                <p>
                                    Randomised words which don't look even
                                    slightly believable. If you are going to use
                                    a passage of Lorem Ipsum, you need to be
                                    sure there isn't anything embarrassing.
                                    making it over 2000 years old.{" "}
                                </p>
                            </div>
                            <div className="blog-tag-share">
                                <ul>
                                    <li>nft</li>
                                    <li>crypto</li>
                                    <li>marketplace</li>
                                    <li>trade</li>
                                </ul>
                                <button className="btn">
                                    <svg
                                        width="19"
                                        height="20"
                                        viewBox="0 0 19 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_34_548)">
                                            <path
                                                d="M14.5456 6.36363C16.0519 6.36363 17.2729 5.14259 17.2729 3.63636C17.2729 2.13013 16.0519 0.909088 14.5456 0.909088C13.0394 0.909088 11.8184 2.13013 11.8184 3.63636C11.8184 5.14259 13.0394 6.36363 14.5456 6.36363Z"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M3.63645 12.7275C5.14268 12.7275 6.36372 11.5065 6.36372 10.0002C6.36372 8.49399 5.14268 7.27295 3.63645 7.27295C2.13022 7.27295 0.90918 8.49399 0.90918 10.0002C0.90918 11.5065 2.13022 12.7275 3.63645 12.7275Z"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M14.5456 19.0908C16.0519 19.0908 17.2729 17.8697 17.2729 16.3635C17.2729 14.8573 16.0519 13.6362 14.5456 13.6362C13.0394 13.6362 11.8184 14.8573 11.8184 16.3635C11.8184 17.8697 13.0394 19.0908 14.5456 19.0908Z"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M6 11.3638L12.1818 15.0001"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M12.1818 5L6 8.63636"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_34_548">
                                                <rect
                                                    width="18.1818"
                                                    height="20"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    SHARE
                                </button>
                            </div>
                            <div className="blog-details-next-prev">
                                <Link to="/">
                                    <div className="blog-dp-btn">
                                        <img src={BtnImg} alt="btn" />
                                        <div>
                                            <h4>PREVIOUS</h4>
                                            <p>
                                                How to Create Your 1st Crypto
                                                NFTs 🎉
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/">
                                    <div className="blog-dn-btn">
                                        <div>
                                            <h4>PREVIOUS</h4>
                                            <p>
                                                How to Create Your 1st Crypto
                                                NFTs 🎉
                                            </p>
                                        </div>
                                        <img src={BtnImg} alt="btn" />
                                    </div>
                                </Link>
                            </div>
                            <div className="blog-details-comment">
                                <h4>3 Comments</h4>
                                <div className="blog-details-comment-content bdc-parent">
                                    <img src={BtnImg} alt="profile" />
                                    <div>
                                        <h6>Lisa Harrih </h6>
                                        <p>24 FEB, 2022</p>
                                        <p>
                                            If you are going to use a passage of
                                            Lorem Ipsum, you need to be sure
                                            there isn't anything embarrassing
                                            hidden in the middle of text.
                                        </p>
                                        <button className="btn">
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.93481 1C6.03097 1 2.87109 3.95187 2.87109 7.59173C2.87109 7.79972 2.8791 7.99972 2.9031 8.19971C3.61507 7.73573 4.47103 7.47176 5.399 7.47176C7.8309 7.47176 9.79882 9.31165 9.79882 11.5836C9.79882 12.5355 9.44684 13.4155 8.85486 14.1115C9.20685 14.1595 9.56683 14.1835 9.93481 14.1835L13.2867 16.1754C13.8547 16.5194 14.5666 16.0554 14.4866 15.3914L14.1746 12.8635C15.8866 11.6636 16.9985 9.75164 16.9985 7.59173C16.9985 5.13583 15.5586 2.99193 13.4147 1.85597"
                                                    stroke="white"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M2.90393 8.19987C3.6159 7.73589 4.47186 7.47192 5.39982 7.47192C7.83173 7.47192 9.79965 9.31181 9.79965 11.5837C9.79965 12.5357 9.44767 13.4157 8.85569 14.1116C8.06372 15.0716 6.80777 15.6876 5.39982 15.6876L3.31191 16.9275C2.95992 17.1435 2.51194 16.8475 2.55994 16.4395L2.75993 14.8636C1.68797 14.1197 1 12.9277 1 11.5837C1 11.3437 1.024 11.1117 1.064 10.8878"
                                                    stroke="white"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            REPLAY
                                        </button>
                                    </div>
                                </div>
                                <div className="blog-details-comment-content bdc-child">
                                    <img src={BtnImg} alt="profile" />
                                    <div>
                                        <h6>Lisa Harrih </h6>
                                        <p>24 FEB, 2022</p>
                                        <p>
                                            If you are going to use a passage of
                                            Lorem Ipsum, you need to be sure
                                            there isn't anything embarrassing
                                            hidden in the middle of text.
                                        </p>
                                        <button className="btn">
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.93481 1C6.03097 1 2.87109 3.95187 2.87109 7.59173C2.87109 7.79972 2.8791 7.99972 2.9031 8.19971C3.61507 7.73573 4.47103 7.47176 5.399 7.47176C7.8309 7.47176 9.79882 9.31165 9.79882 11.5836C9.79882 12.5355 9.44684 13.4155 8.85486 14.1115C9.20685 14.1595 9.56683 14.1835 9.93481 14.1835L13.2867 16.1754C13.8547 16.5194 14.5666 16.0554 14.4866 15.3914L14.1746 12.8635C15.8866 11.6636 16.9985 9.75164 16.9985 7.59173C16.9985 5.13583 15.5586 2.99193 13.4147 1.85597"
                                                    stroke="white"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M2.90393 8.19987C3.6159 7.73589 4.47186 7.47192 5.39982 7.47192C7.83173 7.47192 9.79965 9.31181 9.79965 11.5837C9.79965 12.5357 9.44767 13.4157 8.85569 14.1116C8.06372 15.0716 6.80777 15.6876 5.39982 15.6876L3.31191 16.9275C2.95992 17.1435 2.51194 16.8475 2.55994 16.4395L2.75993 14.8636C1.68797 14.1197 1 12.9277 1 11.5837C1 11.3437 1.024 11.1117 1.064 10.8878"
                                                    stroke="white"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            REPLAY
                                        </button>
                                    </div>
                                </div>
                                <div className="blog-details-comment-content bdc-parent">
                                    <img src={BtnImg} alt="profile" />
                                    <div>
                                        <h6>Lisa Harrih </h6>
                                        <p>24 FEB, 2022</p>
                                        <p>
                                            If you are going to use a passage of
                                            Lorem Ipsum, you need to be sure
                                            there isn't anything embarrassing
                                            hidden in the middle of text.
                                        </p>
                                        <button className="btn">
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.93481 1C6.03097 1 2.87109 3.95187 2.87109 7.59173C2.87109 7.79972 2.8791 7.99972 2.9031 8.19971C3.61507 7.73573 4.47103 7.47176 5.399 7.47176C7.8309 7.47176 9.79882 9.31165 9.79882 11.5836C9.79882 12.5355 9.44684 13.4155 8.85486 14.1115C9.20685 14.1595 9.56683 14.1835 9.93481 14.1835L13.2867 16.1754C13.8547 16.5194 14.5666 16.0554 14.4866 15.3914L14.1746 12.8635C15.8866 11.6636 16.9985 9.75164 16.9985 7.59173C16.9985 5.13583 15.5586 2.99193 13.4147 1.85597"
                                                    stroke="white"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M2.90393 8.19987C3.6159 7.73589 4.47186 7.47192 5.39982 7.47192C7.83173 7.47192 9.79965 9.31181 9.79965 11.5837C9.79965 12.5357 9.44767 13.4157 8.85569 14.1116C8.06372 15.0716 6.80777 15.6876 5.39982 15.6876L3.31191 16.9275C2.95992 17.1435 2.51194 16.8475 2.55994 16.4395L2.75993 14.8636C1.68797 14.1197 1 12.9277 1 11.5837C1 11.3437 1.024 11.1117 1.064 10.8878"
                                                    stroke="white"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                            REPLAY
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-comment-form">
                                <h4>Leave a Reply</h4>
                                <p>
                                    Your email address will not be published.
                                    Required fields are marked *
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label>YOUR NAME *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g.  Smith"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label>Email Address *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="e.g.  example@gmail.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label>Website</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g.  example@gmail.com"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Comment *</label>
                                        <textarea
                                            className="form-control fc-textarea"
                                            placeholder="Type your comment"
                                        ></textarea>
                                    </div>

                                    <div className="mb-0">
                                        <button className="btn-bg-1 bj-btn-1">
                                            <BgBtnOverlay />
                                            POST COMMENT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-details-right">
                                <div className="blog-details-right-search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search here ..."
                                    />
                                </div>
                                <div className="ui-dr-cat">
                                    <h4>CATEGORIES</h4>
                                    <ul>
                                        <Link to="/cat">Metaverse (03)</Link>
                                        <Link to="/cat">Crypto (12)</Link>
                                        <Link to="/cat">Launchpad (05)</Link>
                                        <Link to="/cat">Web 3.0 (02)</Link>
                                        <Link to="/cat">Farming (04)</Link>
                                        <Link to="/cat">Staking (02)</Link>
                                    </ul>
                                </div>
                                <div className="ui-dr-rp">
                                    <h4>Recent Posts</h4>

                                    <div className="ui-dr-cp-box">
                                        <img src={BtnImg} alt="post" />
                                        <div>
                                            <h6>13 MAR, 2022</h6>
                                            <h4>
                                                How to Create Your 1st Crypto
                                                NFTs
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="ui-dr-cp-box">
                                        <img src={BtnImg} alt="post" />
                                        <div>
                                            <h6>13 MAR, 2022</h6>
                                            <h4>
                                                How to Create Your 1st Crypto
                                                NFTs
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="ui-dr-cp-box">
                                        <img src={BtnImg} alt="post" />
                                        <div>
                                            <h6>13 MAR, 2022</h6>
                                            <h4>
                                                How to Create Your 1st Crypto
                                                NFTs
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui-dr-tag">
                                    <h4>TAGS</h4>
                                    <div class="blog-tag-share">
                                        <ul>
                                            <li>nft</li>
                                            <li>crypto</li>
                                            <li>marketplace</li>
                                            <li>trade</li>
                                            <li>nft</li>
                                            <li>crypto</li>
                                            <li>marketplace</li>
                                            <li>trade</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isConnectModal && (
                <ConnectWallet connectCloseHandler={connectCloseHandler} />
            )}
            <FooterSecond />
        </>
    );
};

export default BlogDetails;
