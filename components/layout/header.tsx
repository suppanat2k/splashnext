'use client';

import "public/styles/layout/header.css"

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpenToggle, isOpenToggleState] = useState(false);

    function openNavbar() {
        isOpenToggleState(!isOpenToggle);
        console.log(isOpenToggle);
        
    }

    return (
        <>
            <header>
                <nav className={!isOpenToggle ?"md:container md:mx-auto flex justify-between my-5 md:px-0":"md:container md:mx-auto justify-between my-5 md:px-0"}>
                    <div className="container flex justify-between grouphead">
                        <div>
                            <h1>Splash Studio</h1>
                        </div>
                        <div className="toggle-group">
                            <button className="toggle-navbar item-center" onClick={() => openNavbar()}>
                                <div className="toggle_bar"></div>
                                <div className="toggle_bar"></div>
                                <div className="toggle_bar"></div>
                            </button>
                        </div>
                    </div>
                    <div className={!isOpenToggle ? "navbar-unexpand" : "navbar-expand"}>
                        <ul className={"lsitnav-expand"}>
                            <li className="me-3 flex justify-center"><Link href={"#"}>Home</Link></li>
                            <li className="me-3 flex justify-center"><Link href={"#"}>Album</Link></li>
                            <li className="me-3 flex justify-center"><Link href={"#"}>Credit</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}