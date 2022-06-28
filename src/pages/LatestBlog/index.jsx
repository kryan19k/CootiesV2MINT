import BlogBanner from "../../components/BlogBanner";
import BlogCard from "../../components/BlogCard";
import "./latestblog.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HeaderSecond from "../../components/HeaderSecond";
import BlogJoin from "../../components/BlogJoin";
import FooterSecond from "../../components/FooterSecond";
import { useState } from "react";
import ConnectWallet from "../../components/ConnectWallet";
import { Link } from "react-router-dom";

const LatestBlog = () => {
    const [isConnectModal, setConnectModal] = useState(false);
    const ConnectHandler = () => {
        setConnectModal(true);
    };

    const connectCloseHandler = () => {
        setConnectModal(false);
    };
    return (
        <div>
            <HeaderSecond ConnectHandler={ConnectHandler} />
            <BlogBanner />
            <div className="blog-post-box">
                <div className="container ui-container">
                    <div className="row">
                        <div className="col-lg-4 mb-4 col-md-6">
                            <BlogCard />
                        </div>
                        <div className="col-lg-4 mb-4 col-md-6">
                            <BlogCard />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <BlogCard />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="blog-post-pagination">
                                <button>
                                    <IoIosArrowBack />
                                </button>
                                <button>1</button>
                                <button className="active">2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BlogJoin />
            {isConnectModal && (
                <ConnectWallet connectCloseHandler={connectCloseHandler} />
            )}
            <FooterSecond />
        </div>
    );
};

export default LatestBlog;
