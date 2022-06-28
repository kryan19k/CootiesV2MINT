import { Routes, Route } from "react-router-dom";
import BlogDetails from "../pages/BlogDetails";
import Home from "../pages/Home";
import LatestBlog from "../pages/LatestBlog";

const RootRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/latest-blog" element={<LatestBlog />} />
                <Route path="/blog-details" element={<BlogDetails />} />
            </Routes>
        </>
    );
};

export default RootRoute;
