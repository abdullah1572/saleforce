import React, { useState } from 'react';
import './banner.scss';
import { Link } from 'react-router-dom';
const Banner = () => {
    const [disability, setDisability] = useState(false);
    const [hide, sethide] = useState(false);
    const HideShow = () => {
        console.log("abaskjbkjac",hide)
        if (hide) {
            sethide(false)
        }
        else {
            sethide(true)
        }
    }
    const arrow = () => {
        console.log("abaskjbkjac",disability)
        if (disability) {
            setDisability(false)
        }
        else {
            setDisability(true)
        }
    }
    return (
        <>
            <section className="main-banner">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-12 p-0">
                            <div className={hide ? "skfsdd" : "skfsd "} >
                                <div className="sbsnc">
                                    <img src="\pictures\logo1.svg" alt="" className="img-fluid shvxahvx" />
                                    <button type="button" className="sncanax" onClick={HideShow}><i class="fas fa-bars sbcashcb"></i></button>
                                </div>
                                <div className="sbsscsnc">
                                    <div className="adak">
                                        <button type="button" className="sjdb"><span className="pr-1"><img src="\pictures\ld1.svg" alt="" className="img-fluid " /></span><span className="pl-1">Fidenack</span></button>
                                       <button type="button" className="sjsdsdb"><span className="pr-1"><img src="\pictures\external_link.svg" alt="" className="img-fluid " /></span><span className="pl-1"> <Link to="/Login" className="text-white">Account</Link></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-9 col-12 p-0">
                            <div className="main-content">
                                <div className="upperdivss">
                                    <div className="geading">
                                        <div className="leftside">
                                            <div className="sjsjn d-flex justify-content-start align-items-center">
                                                <h6 className="mr-2">Settings</h6>
                                                <img src="\pictures\l5.png" alt="" className="img-fluid shvxahvx" />
                                            </div>
                                        </div>
                                        <div className="rightside">
                                            <button type="button" className="sndbshd" onClick={arrow}>
                                                <i class="fas fa-chevron-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {disability ?
                                        null
                                        :
                                        <div className="sdsjscc">
                                            <div className="row">
                                                <div className="col-lg-4 p-0">
                                                    <div className="ajbajb">
                                                        <div className="ajab">
                                                            <h5>Lemlist API key</h5>
                                                            <h6>update</h6>
                                                        </div>
                                                        <input type="text" disabled class="form-control" id="exampleInput" placeholder="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }


                                </div>
                                <div className="downdivss">
                                    <div className="sknkcs">
                                        <div class="dropdown jxjsfz mr-md-4">
                                            <button class="djhdvdc " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <p>Sender Name</p>
                                                <i class="fas fa-chevron-down"></i>
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                        <div class="dropdown jxjsfz">
                                            <button class="djhdvdc" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Dropdown button
                                                <i class="fas fa-chevron-down"></i>
                                            </button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sknssfkcs">
                                        <div className="ajaja mr-4">
                                            <button type="button">
                                                <img src="\pictures\l22.svg" alt="" className="img-fluid shvxahvx" />
                                            </button>
                                        </div>
                                        <div className="ajaja mr-4">
                                            <button type="button">
                                                <img src="\pictures\l33.svg" alt="" className="img-fluid shvxahvx" />
                                            </button>
                                        </div>
                                        <div className="ajaja sjhsa">
                                            <div class="dropdown jxjsfz  mr-md-4">
                                                <button class="djhdvdc" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <p>New</p>
                                                    <i class="fas fa-chevron-down"></i>
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="asdjaiaanc">
                                    <div className="downtabless">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Score</th>
                                                        <th scope="col">FullName</th>
                                                        <th scope="col">CompanyName</th>
                                                        <th scope="col">Phone</th>
                                                        <th scope="col">SenderName</th>
                                                        <th scope="col">CompaignName</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr className="ajbdjabda mb-4">

                                                        <td className="SNJNC">170</td>
                                                        <td>Eleanor Pena</td>
                                                        <td>Louis Vuitton</td>
                                                        <td>(208) 555-0112</td>
                                                        <td className="sjhdads">
                                                            <span className='sjsjc'>SenderName</span>
                                                        </td>
                                                        <td className="akjscn">
                                                            <span className='sjsjc'>CompaignName</span>
                                                        </td>
                                                        <td className="sbzcjbz">
                                                            <span className='sjsjc'>Unsub</span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td className="SNJNC">170</td>
                                                        <td>Eleanor Pena</td>
                                                        <td>Louis Vuitton</td>
                                                        <td>(208) 555-0112</td>
                                                        <td className="sjhdads">
                                                            <span className='sjsjc'>SenderName</span>
                                                        </td>
                                                        <td className="akjscn">
                                                            <span className='sjsjc'>CompaignName</span>
                                                        </td>
                                                        <td className="sbzcjbz">
                                                            <span className='sjsjc'>Unsub</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="SNJNC">170</td>
                                                        <td>Eleanor Pena</td>
                                                        <td>Louis Vuitton</td>
                                                        <td>(208) 555-0112</td>
                                                        <td className="sjhdads">
                                                            <span className='sjsjc'>SenderName</span>
                                                        </td>
                                                        <td className="akjscn">
                                                            <span className='sjsjc'>CompaignName</span>
                                                        </td>
                                                        <td className="sbzcjbz">
                                                            <span className='sjsjc'>Unsub</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="SNJNC">170</td>
                                                        <td>Eleanor Pena</td>
                                                        <td>Louis Vuitton</td>
                                                        <td>(208) 555-0112</td>
                                                        <td className="sjhdads">
                                                            <span className='sjsjc'>SenderName</span>
                                                        </td>
                                                        <td className="akjscn">
                                                            <span className='sjsjc'>CompaignName</span>
                                                        </td>
                                                        <td className="sbzcjbz">
                                                            <span className='sjsjc'>Unsub</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="SNJNC">170</td>
                                                        <td>Eleanor Pena</td>
                                                        <td>Louis Vuitton</td>
                                                        <td>(208) 555-0112</td>
                                                        <td className="sjhdads">
                                                            <span className='sjsjc'>SenderName</span>
                                                        </td>
                                                        <td className="akjscn">
                                                            <span className='sjsjc'>CompaignName</span>
                                                        </td>
                                                        <td className="sbzcjbz">
                                                            <span className='sjsjc'>Unsub</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="SNJNC">170</td>
                                                        <td>Eleanor Pena</td>
                                                        <td>Louis Vuitton</td>
                                                        <td>(208) 555-0112</td>
                                                        <td className="sjhdads">
                                                            <span className='sjsjc'>SenderName</span>
                                                        </td>
                                                        <td className="akjscn">
                                                            <span className='sjsjc'>CompaignName</span>
                                                        </td>
                                                        <td className="sbzcjbz">
                                                            <span className='sjsjc'>Unsub</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="SNJNC">170</td>
                                                        <td>Eleanor Pena</td>
                                                        <td>Louis Vuitton</td>
                                                        <td>(208) 555-0112</td>
                                                        <td className="sjhdads">
                                                            <span className='sjsjc'>SenderName</span>
                                                        </td>
                                                        <td className="akjscn">
                                                            <span className='sjsjc'>CompaignName</span>
                                                        </td>
                                                        <td className="sbzcjbz">
                                                            <span className='sjsjc'>Unsub</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="SNJNC">170</td>
                                                        <td>Eleanor Pena</td>
                                                        <td>Louis Vuitton</td>
                                                        <td>(208) 555-0112</td>
                                                        <td className="sjhdads">
                                                            <span className='sjsjc'>SenderName</span>
                                                        </td>
                                                        <td className="akjscn">
                                                            <span className='sjsjc'>CompaignName</span>
                                                        </td>
                                                        <td className="sbzcjbz">
                                                            <span className='sjsjc'>Unsub</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="SNJNC">170</td>
                                                        <td>Eleanor Pena</td>
                                                        <td>Louis Vuitton</td>
                                                        <td>(208) 555-0112</td>
                                                        <td className="sjhdads">
                                                            <span className='sjsjc'>SenderName</span>
                                                        </td>
                                                        <td className="akjscn">
                                                            <span className='sjsjc'>CompaignName</span>
                                                        </td>
                                                        <td className="sbzcjbz">
                                                            <span className='sjsjc'>Unsub</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="asjakbsc">
                                        <div className="ajasjhbc">
                                            <h6>2021© Salescore. Built by sales for sales.</h6>
                                            <a href="#"><h6>Confidentiality</h6></a>
                                            <a href="#"><h6>Conditions</h6></a>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="jasaksbkbas"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;
