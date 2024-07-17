
"use client"
import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

import "./LoginRegister.css";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';


const LoginCard = () => {
    const [user, setUser] = useState({});
    const { push } = useRouter();

    const getUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(
            "http://127.0.0.1:8000/api/user/user_login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );

        try {
            const result = await response.json();
            console.log(result)
            if(result.success === true){
                localStorage.setItem('token',JSON.stringify(result.token))
                 toast(result.msg)
                push('/dashboard');
            }else{
                toast('Login Faild ')
            }
            

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <Card className="mx-auto rounded-0 my-3">
                <h4 className="text-center pb-0 pt-3">Login</h4>
                <Card.Body className="p-5 py-4">
                    <form onSubmit={handleSubmit}>
                        <Form.Group className="my-4" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                className="rounded-0 py-3"
                                onChange={getUser}
                            />
                        </Form.Group>
                        <Form.Group className="my-4" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                className="rounded-0 py-3"
                                onChange={getUser}
                            />
                        </Form.Group>

                        <Button
                        
                            className="btn btn-warning w-100 py-3"
                            style={{ backgroundColor: "#f79837", color: "#fff"}}
                            type="submit"
                        >
                            Login
                        </Button>
                    </form>
                </Card.Body>
                <p className="text-center">
                    Do not have any account?{" "}
                    <Link href="/registration" style={{ textDecoration: "none" }}>
                        <span style={{ cursor: "pointer", color: "#f79837" }}>Registration</span>
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default LoginCard;