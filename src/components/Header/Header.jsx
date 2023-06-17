import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <section className="h-wrapper">
        <nav className=" h-container">
          <motion.img
            initial={{ x: "-5rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            src="./acklogo.png"
            alt="logo"
            className="logo"
          />

          <div id="mobile" onClick={this.handleClick}>
            <motion.div
              initial={{ x: "5rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 4, type: "spring" }}
            >
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: "5rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            className={this.state.clicked ? "nav-menu active" : "nav-menu "}
          >
            <Link className="links" to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>

            <Link className="links" to="/staff">
              <i className="fa-solid fa-person"></i> Staff
            </Link>
            <Link className="links" to="/partners">
              <i className="fa-regular fa-handshake"></i>Partners
            </Link>
            <Link className="links" to="/donate">
              <i className="fa-sharp fa-solid fa-circle-dollar-to-slot"></i>
              Donate
            </Link>
          </motion.div>
        </nav>
      </section>
    );
  }
}

export default Header;
