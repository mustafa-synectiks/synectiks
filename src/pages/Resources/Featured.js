import * as React from "react"
import Layout from "../../components/layout"
import Cr from "../../img/Careers.png"
import FS from "../../img/FeDevOps-Strategies.png"
import FT from "../../img/FeEnterprise-Transformation.png"
import FMP from "../../img/FeMicroservice-Platform.png"
import FP from "../../img/FeOpen-Platform.png"
import "../../components/layout.css"

export class Featured extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey">
          <div>
            <img
              className="text-center"
              src={Cr}
              width="100%"
              alt="Resources"
            />
            <div className="text-center centered ">
              <div className="text-white">
                <h3>Resources</h3>
              </div>
            </div>
          </div>

          <div className="px-5">
            <div className="d-flex justify-content-around pt-2 flex-fill  align-items-center flex-col">
              <div>
                <div className="p-5">
                  <img src={FS} width="100%" alt="Enterprise-DevOps" />{" "}
                  <div className="text-group align-self-center">
                    <h6 className="font-weight-bold pt-2">
                      Discover the business value of Synectiks Open Xformation
                      Platform and how it optimizes Enterprise DevOps
                      Strategies.{" "}
                    </h6>
                    <a
                      href="doc/Synectiks-Enterprise-DevOps-Strategies.pdf"
                      target="_blank"
                    >
                      Learn more <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-5">
                  <img
                    className="border-grey-2px"
                    src={FT}
                    width="100%"
                    alt="Enterprise-Transformation"
                  />{" "}
                  <div className="text-group align-self-center ">
                    <h6 className="font-weight-bold pt-2">
                      {" "}
                      Discover how Synectiks open products based service
                      delivery approach creating significant differences in
                      service sector.{" "}
                    </h6>
                    <a
                      href="doc/Synectiks-Enterprise-Transformation.pdf"
                      target="_blank"
                    >
                      Learn more <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="d-flex justify-content-around pt-2 flex-fill  align-items-center flex-col">
                <div>
                  <div className="p-5">
                    <img
                      src={FMP}
                      width="100%"
                      alt="Enterprise-Transformation"
                    />{" "}
                    <div className="text-group align-self-center">
                      <h6 className="font-weight-bold pt-2">
                        {" "}
                        Why to choose Synectiks as your preferred microservices
                        delivery partner.{" "}
                      </h6>

                      <a
                        href="doc/Synectiks-Microservice-Platform.pdf"
                        target="_blank"
                      >
                        Learn more <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="p-5">
                    <img
                      src={FP}
                      width="100%"
                      alt="Enterprise-Transformation"
                    />{" "}
                    <div className="text-group align-self-center">
                      <h6 className="font-weight-bold pt-2">
                        Synectiks Xformation Platform accelerate any
                        transformation project @50% cost &amp; Time.
                      </h6>

                      <a href="doc/Synectiks-Open-Platform.pdf" target="_blank">
                        Learn more <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Featured
