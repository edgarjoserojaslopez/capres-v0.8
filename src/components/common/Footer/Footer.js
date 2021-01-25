import { Grid, Link } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  MailOutlined,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>CAPRES</h4>
            <h1 className="list-unstyled">
              <li>+58-212-709-4747</li>
              <li>Caracas, Venezuela</li>
              <li>
                Av. Bolivia con Av. La Salle,{" "}
                <li>diagonal a la fuente Plaza</li>
                Venezuela
              </li>
              <li>
                <Link
                  underline="none"
                  component="a"
                  href="https://facebook.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    color: "#585858",
                  }}
                >
                  <Mail />

                  <span style={{ marginLeft: "8px" }}>
                    contactenos@capres.com.ve
                  </span>
                </Link>
              </li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Redes Sociales</h4>
            <ul className="list-unstyled">
              <li>
                <Link
                  underline="none"
                  component="a"
                  href="https://twitter.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    color: "#585858",
                  }}
                >
                  <Twitter />

                  <span style={{ marginLeft: "8px" }}>Twitter</span>
                </Link>
              </li>
              <li>
                <Link
                  underline="none"
                  component="a"
                  href="https://facebook.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    color: "#585858",
                  }}
                >
                  <Facebook />

                  <span style={{ marginLeft: "8px" }}>Facebook</span>
                </Link>
              </li>
              <li>
                <Link
                  underline="none"
                  component="a"
                  href="https://instagram.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    color: "#585858",
                  }}
                >
                  <Instagram />

                  <span style={{ marginLeft: "8px" }}>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  underline="none"
                  component="a"
                  href="https://youtube.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    color: "#585858",
                  }}
                >
                  <YouTube />

                  <span style={{ marginLeft: "8px" }}>Youtube</span>
                </Link>
              </li>
              <li>
                <Link
                  underline="none"
                  component="a"
                  href="https://inkedin.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    color: "#585858",
                  }}
                >
                  <LinkedIn />

                  <span style={{ marginLeft: "8px" }}>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} CAPRES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
