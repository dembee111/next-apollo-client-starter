import React, { useContext } from "react";
import navbar from "./navbar.module.css";
import { useRouter } from "next/router";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/authContext";
import Link from "next/link";

const Navbar = () => {
    const { state, dispatch } = useContext(AuthContext);
    // next router
    const router = useRouter();

    // state
    const { user } = state;

    const logout = () => {
        auth.signOut();
        dispatch({
            type: "LOGGED_IN_USER",
            payload: null,
        });
        router.push("/auth/login");
    };
    return (
        <nav className={navbar.container}>
            <Link href="/auth/login">
                <a className={`${navbar.link} ${router.pathname === "/auth/login" && navbar.active}`}>Нэвтрэх</a>
            </Link>
            <Link href="/auth/register">
                <a className={`${navbar.link} ${router.pathname === "/auth/register" && navbar.active}`}>Бүртгүүлэх</a>
            </Link>
            {user && (
                <a onClick={() => logout()} className={`${navbar.link}`}>
                    Гарах
                </a>
            )}
        </nav>
    );
};
export default Navbar;
