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
        <h1>Ops... Página não existe</h1>
        <br />
        <br />
        <Link to="/">
            <button>Voltar para página principal</button>
        </Link>
    </div>
);

export default Page404;
