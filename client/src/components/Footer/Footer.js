import React from "react";
// import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <h5 >Built with React</h5>
            <i className="fab fa-react" style={{color: "blue"}}></i>
            <h5 >Project By:</h5>
            <h5 ><a href="https://audijej.github.io/" target="blank">Jesse A.</a> || <a href="https://katgrace0808.github.io/Portfolio/" target="blank">Kathryn M.</a>  || <a href="https://kaitekelly.github.io/portfolio/" target="blank">Kaite M.</a> </h5>
            {/* <ul className="contacts"> */}
            <li className="social-media-icon"><a href="https://github.com/audijej" target="blank"><i
                className="fab fa-github"></i></a></li>
            <li className="social-media-icon"><a href="https://github.com/katgrace0808" target="blank"><i
                className="fab fa-github"></i></a></li>
            <li className="social-media-icon"><a href="https://github.com/kaitekelly" target="blank"><i
                className="fab fa-github"></i></a></li>
            {/* </ul> */}
        </footer>
    );
}

export default Footer;
