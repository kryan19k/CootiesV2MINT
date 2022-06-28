import "./blogbanner.css";

const BlogBanner = () => {
    return (
        <>
            <div className="blog-banner-box">
                <div className="container ui-container">
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="blog-banner-content">
                                <h4>
                                    HOME . <span>LATEST BLOG</span>
                                </h4>
                                <h2>LATEST BLOG</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <div className="blog-banner-search">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by post, categories"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogBanner;
