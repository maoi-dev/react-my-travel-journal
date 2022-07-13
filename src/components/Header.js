import React from "react";
import Logo from "../images/logo.svg"

export default function Header() {
    return (
        <header className="header--container">
            <img className="header--logo" src={Logo} alt="Logo" />
            <h1 className="header--title">my travel journal.</h1>
        </header>
    )
}