import React from "react"
import foot from "../css/footer.css"

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="text-center text-white fixed-bottom bg-logoblue content">
          <button
            className=" bg-logoblue text-white  fa fa-times float-right"
            type="submit"
            id="hide"
          ></button>
          <p className="mb-1 pt-2 px-3 fsize08">
            We use cookies for advertising, social media and analytics purposes.
            Read about how we use cookies in our updated
            <a className=" navfont  text-white" to="/privacypolicy">
              <small className="fsize07">
                &nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
              </small>
            </a>
            If you continue to use this site, you consent to our use of cookies
            and our
            <a className={foot.navfont} to="/privacypolicy">
              <small className="fsize07">
                &nbsp;<u>Privacy&nbsp;Policy.</u>&nbsp;
              </small>
            </a>
          </p>
        </div>

        <div className="d-flex justify-content-around bg-footer flex-col p-4 col-lg-12">
          <div className="col-md-4 pb2">
            <h5 className="text-white">Synectiks</h5>
            <small className="text-white">
              We are a team of highly qualified and experienced <br />{" "}
              professionals from various fields who are determined and dedicated
              to delivering world class professional services to our patrons.
            </small>
          </div>

          <div className="col-md-4 ftr pb2">
            <div>
              <h4 className="text-white">U.S.A</h4>
              <small className="text-white">
                300 Alexander Park Drive, Suite 215, <br /> Princeton, NJ 08540{" "}
                <br /> Sales: +1 (609) 608-0429 X 102 <br /> Office: +1 (609)
                608-0429
              </small>
              <br />{" "}
            </div>
          </div>

          <div className="col-md-4 ftr pb2">
            <div className="w-100">
              <div>
                <h4 className="text-white">INDIA</h4>
                <small className="text-white">
                  3rd Floor, Plot # 25 &amp; 26,
                  <br /> Survey # 71, Madhapur, <br /> Hyderabad, IN 500 081{" "}
                  <br /> Office: +91 (40) 4857 4411
                </small>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
