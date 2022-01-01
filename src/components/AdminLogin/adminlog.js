import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './adminlog.scss';
import Particles from "react-tsparticles";
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';


const AdminLogin = () => {
    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
         <div className="particles-js">
                        <Particles
                            id="tsparticles"
                            init={particlesInit}
                            loaded={particlesLoaded}
                            options={{
                                background: {
                                    color: {
                                        value: "transparent",
                                    },
                                },
                                fpsLimit: 60,
                                interactivity: {
                                    events: {
                                        onClick: {
                                            enable: true,
                                            mode: "push",
                                        },
                                        onHover: {
                                            enable: true,
                                            mode: "repulse",
                                        },
                                        resize: true,
                                    },
                                    modes: {
                                        bubble: {
                                            distance: 800,
                                            duration: 10,
                                            opacity: 0.8,
                                            size: 40,
                                        },
                                        push: {
                                            quantity: 4,
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: 5,
                                        },
                                    },
                                },
                                particles: {
                                    color: {
                                        value: "#ffffff",
                                    },
                                    links: {
                                        color: "#ffffff",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                    },
                                    collisions: {
                                        enable: true,
                                    },
                                    move: {
                                        direction: "none",
                                        enable: true,
                                        outMode: "bounce",
                                        random: false,
                                        speed: 6,
                                        straight: false,
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            area: 800,
                                        },
                                        value: 80,
                                    },
                                    opacity: {
                                        value: 0.5,
                                    },
                                    shape: {
                                        type: "circle",
                                    },
                                    size: {
                                        random: true,
                                        value: 5,
                                    },
                                },
                                detectRetina: true,
                            }}
                        />
                    </div>
            <div className="asnhahjs">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-sm-11 m-auto">
                            <div className="home-upper-line">
                                <h3><Link to="/" className="text-white">Home</Link> / Admin / <span>Login</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="Loginns-admin">
                    <div className="container-fluid p-0">
                        <div className="row">
                     
                            <div className="col-xl-4 col-lg-6 col-md-8 col-12 m-auto">
                                <div className="login-inner-admin">
                                    <div className='logintext-div'>
                                        <h2>Login</h2>
                                       <Link to="Register"> <button className='btn-haed'>Register</button></Link>
                                    </div>
                                    <label >Email</label>
                                    <input  className='MuiOutlinedInput-input w-100' type="text" placeholder='you@example.com' />
                                    <label >Password</label>
                                    <input className='MuiOutlinedInput-input w-100' type="text" placeholder='Your password' />
                                    <button className='btn-haed w-100' >Submit</button>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </section>
            </div>
        </>
    )
}

export default AdminLogin;
