import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => (
    <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Page doesn't exist</h1>
        <br />
        <br />
        <Link to="/">
            <button>return to home page</button>
        </Link>
    </div>
);

export default Page404;
