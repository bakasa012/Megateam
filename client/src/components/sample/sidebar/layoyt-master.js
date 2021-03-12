import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "../page/home-page"
class LayoytMaster extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">
                    <header id="header">
                        <h1 id="site-logo">
                            <a href="#">
                            <img src={process.env.PUBLIC_URL+"/img/logos/logo.png"} alt="Site Logo" />
                            </a>
                        </h1>	
                        <a href="#" data-toggle="collapse" data-target=".top-bar-collapse" id="top-bar-toggle" className="navbar-toggle collapsed">
                            <i className="fa fa-cog" />
                        </a>
                        <a href="#" data-toggle="collapse" data-target=".sidebar-collapse" id="sidebar-toggle" className="navbar-toggle collapsed">
                            <i className="fa fa-reorder" />
                        </a>
                    </header>
                    {/* header */}
                    <nav id="top-bar" className="collapse top-bar-collapse">
                        <ul className="nav navbar-nav pull-left">
                            <li className>
                                <a href="./index.html">
                                <i className="fa fa-home" /> 
                                Home
                                </a>
                            </li>
                            <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            Dropdown <span className="caret" />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                            <li><a href="#"><i className="fa fa-user" />&nbsp;&nbsp;Example #1</a></li>
                            <li><a href="#"><i className="fa fa-calendar" />&nbsp;&nbsp;Example #2</a></li>
                            <li className="divider" />
                            <li><a href="#"><i className="fa fa-tasks" />&nbsp;&nbsp;Example #3</a></li>
                            </ul>
                        </li>
                        </ul>
                        <ul className="nav navbar-nav pull-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-user" />
                            Rod Howard 
                            <span className="caret" />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                            <li>
                                <a href="./page-profile.html">
                                <i className="fa fa-user" /> 
                                &nbsp;&nbsp;My Profile
                                </a>
                            </li>
                            <li>
                                <a href="./page-calendar.html">
                                <i className="fa fa-calendar" /> 
                                &nbsp;&nbsp;My Calendar
                                </a>
                            </li>
                            <li>
                                <a href="./page-settings.html">
                                <i className="fa fa-cogs" /> 
                                &nbsp;&nbsp;Settings
                                </a>
                            </li>
                            <li className="divider" />
                            <li>
                                <a href="./page-login.html">
                                <i className="fa fa-sign-out" /> 
                                &nbsp;&nbsp;Logout
                                </a>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </nav> {/* /#top-bar */}
                    <div id="sidebar-wrapper" className="collapse sidebar-collapse">
                        <div id="search">
                            <form>
                                <input className="form-control input-sm" type="text" name="search" placeholder="Search..." />
                                <button type="submit" id="search-btn" className="btn"><i className="fa fa-search" /></button>
                            </form>		
                        </div> {/* #search */}
                        <nav id="sidebar">		
                            <ul id="main-nav" className="open-active">			
                                <li className="active" disabled={true}>				
                                <Link to={"/home"} id="main-nav" className="open-active" disabled="disabled">
                                    <i className="fa fa-dashboard" />
                                    Dashboard
                                </Link>			
                                </li>

                                <li  disabled={true} className="dropdown">
                                    <a href="javascript:;">
                                    <i className="fa fa-file-text" />
                                    Example Pages
                                    <span className="caret" />
                                    </a>				
                                    <ul className="sub-nav">
                                    <li>
                                        <a href="./page-profile.html">
                                        <i className="fa fa-user" /> 
                                        Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./page-invoice.html">
                                        <i className="fa fa-money" /> 
                                        Invoice
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./page-pricing.html">
                                        <i className="fa fa-dollar" /> 
                                        Pricing Plans
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./page-support.html">
                                        <i className="fa fa-question" /> 
                                        Support Page
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./page-gallery.html">
                                        <i className="fa fa-picture-o" /> 
                                        Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./page-settings.html">
                                        <i className="fa fa-cogs" /> 
                                        Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./page-calendar.html">
                                        <i className="fa fa-calendar" /> 
                                        Calendar
                                        </a>
                                    </li>
                                    </ul>						
                                </li>
                                
                            </ul>
                        </nav> {/* #sidebar */}
                    </div> {/* /#sidebar-wrapper */}
                        <Switch>
                            <Route exact path={["/", "/home"]} component={HomePage} />
                        </Switch>
                </div> {/* #wrapper */}
                <footer id="footer">
                    <ul className="nav pull-right">
                        <li>
                        Copyright © 2013, Jumpstart Themes.
                        </li>
                    </ul>
                </footer>
            </div>
        );
    }
}

export default LayoytMaster;