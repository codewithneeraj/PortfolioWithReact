import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer_nav">
      <div className="footer-column navigation">
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    </div>

    <div className="footer-column contact">
      <p>Email: neerajc003@gmail.com</p>
    </div>
    <div className="footer-column quote">
      <h4>This moment is our chance to craft something extraordinary.</h4>
    </div>
      </div>
    <div className="footer-social">
    <a href="https://github.com/codewithneeraj" target="_blank" rel="noreferrer" className="footer__logo"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github"/></a>
    <a href="https://codepen.io/codewithneeraj" target="_blank" rel="noreferrer" className="footer__logo"><img src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Codepen-512.png" alt="Codepen"/></a>
    <a href="https://www.linkedin.com/in/codewithneeraj/" target="_blank" rel="noreferrer" className="footer__logo"><img src="https://cdn.icon-icons.com/icons2/1233/PNG/512/1492718749-linkedin_83603.png" alt="linkedin"/></a>
    <a href="https://twitter.com/codewithneeraj" target="_blank" rel="noreferrer" className="footer__logo"><img src="https://seeklogo.com/images/T/twitter-icon-circle-blue-logo-0902F48837-seeklogo.com.png" alt="twitter"/></a>
    </div>
  </footer>
  )
}

export default Footer