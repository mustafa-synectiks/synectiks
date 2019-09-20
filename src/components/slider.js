import React from "react"
import "./layout.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
import s1 from "../img/Slider1.jpg"
import s2 from "../img/Slider2.jpg"
import s3 from "../img/Slider3.jpg"
import s4 from "../img/Slider4.jpg"
import s5 from "../img/Slider5.jpg"
import s6 from "../img/Slider6.jpg"
import OpenPlatform from "../img/OpenPlatform.png"
import Transformation from "../img/Transformation.png"
import Solutions from "../img/Solutions.png"
import PoweredBySynectiks from "../img/PoweredBySynectiks.png"
import SoftwareMigration from "../img/CS_Software_Migration.jpg"
import RealtimeMonitoring from "../img/CS_Realtime_Monitoring.jpg"
import SoftwareDefinedTransformation from "../img/CS_SoftwareDefinedTransformation.jpg"
import NetworkDesign from "../img/CS_NetworkDesign.jpg"
import StorageTier from "../img/CS_StorageTier.jpg"
import DisasterRecovery from "../img/CS_DisasterRecovery.jpg"

const Slider = () => {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s1}
            alt="Synectiks Open Xformation"
          />
          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/foundation"
                className="btn text-white bg-logoblue text-uppercase btnLearn float-left"
              >
                Learn More
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s2}
            alt="Enterprise Transformation"
          />

          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/devops"
                className="btn text-white bg-logoblue text-uppercase btnLearn float-left"
              >
                learn more
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s3} alt="AWS Security" />

          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/audit"
                className="btn text-white bg-logoblue text-uppercase btnLearn float-left"
              >
                learn more
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={s4}
            alt="Enterprise Managed Services"
          />

          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/enterprisemanagedservice"
                className="btn text-white bg-logoblue text-uppercase btnLearn float-left"
              >
                learn more
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s5} alt="Cloud Managed Backup" />
          <Carousel.Caption>
            <div className="clearfix">
              <a
                href="/CloudManagedBackup"
                className="btn text-white bg-yellow text-uppercase btnLearn float-left"
              >
                learn more
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={s6} alt="Why Synectiks" />
        </Carousel.Item>
      </Carousel>
      <div className="bg-lightgrey pt-1">
        <div className="text-center w-100 mb-2">
          <h4 className="mb-1 py-1 stripfont bg-logoblue text-white">
            ACCELERATING MULTICLOUD SOA TRANSFORMATION THROUGH OPEN PLATFORM
          </h4>
        </div>
        <div className="container">
          <div>
            <div className="text-center w-100 py-5 mt-1 txt mt-card ">
              <h3 className="">
                <b>Outcome-based Solution Offerings</b>
              </h3>
            </div>
            <div class="row">
              <div className="card-deck">
                <div className="card btn col-md-4 card-shadow mx-3 pt-3">
                  <a href="/foundation" className="noLine">
                    <img
                      className="card-img-top"
                      src={OpenPlatform}
                      alt="Foundation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">
                        Open Platform
                      </h2>
                    </div>
                  </a>
                </div>

                <div className="card btn col-md-4 card-shadow mx-3 pt-3">
                  <a href="/transformation" className="noLine">
                    <img
                      className="card-img-top"
                      src={Transformation}
                      alt="Transformation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">
                        Transformation
                      </h2>
                    </div>
                  </a>
                </div>

                <div className="card btn col-md-4 card-shadow mx-3 pt-3">
                  <a href="/operations" className="noLine">
                    <img
                      className="card-img-top"
                      src={Solutions}
                      alt="Operation"
                    />
                    <div className="card-body">
                      <h2 className="text-center text-uppercase">Solutions</h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <Button
              className="btn btn-demo noLine noLine text-white z"
              href="/askfordemo"
            >
              Ask For Demo
            </Button>
          </div>
          {/* Card Ends */}

          <div className="pt-5 flex-fill mt-8">
            <img
              src={PoweredBySynectiks}
              width="100%"
              alt=""
              className="w-100"
            />
            <div className="text-center text-white pt-4 ">
              <p>
                <a
                  href="/foundation"
                  className="btn text-white bg-logoblue text-uppercase btnLearn"
                >
                  learn more
                </a>
              </p>
            </div>
          </div>

          <div className="text-center w-100 pt-5 mt-1 txt mt-card ">
            <h3 className="">
              <b>Success Stories</b>
            </h3>
          </div>

          <div
            className="d-flex justify-content-around pt-2 flex-fill mt-2 align-items-center flex-col"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <a href="/softwaredefined" className="noLine w-75">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={SoftwareDefinedTransformation}
                      width="100%"
                      alt="Enterprise-DevOps"
                    />
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold pt-2 text-black">
                      Software Defined Transformation
                    </h4>
                    <p className="text-black">
                      Moving to AWS cloud with Data Center retirement for Motor
                      Industry.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/realtime" className="noLine w-75">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={RealtimeMonitoring}
                      width="100%"
                      alt="Enterprise-Transformation"
                    />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center ">
                    <h4 className="font-weight-bold pt-2 text-black">
                      Realtime Monitoring{" "}
                    </h4>
                    <p className="text-black">
                      Highly Scalable extremely customizable realtime monitoring
                      platform for a large telco.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/storagemigration" className="noLine w-75">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={SoftwareMigration}
                      width="100%"
                      alt="Enterprise-Transformation"
                    />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold pt-2 text-black">
                      Storage Migration{" "}
                    </h4>
                    <p className="text-black">
                      Zero downtime, Zero Fault Petabytes storage migration of
                      Largest Financial Sector.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            className="d-flex justify-content-around pt-2 flex-fill mt-3 pb-3 align-items-center flex-col"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <a href="/networkdesign" className="noLine w-75">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src={NetworkDesign} width="100%" alt="NetworkDesign" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Network Design{" "}
                    </h4>
                    <p className="text-black">
                      Complete Network Backbone Design with highest security for
                      retail.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/storagetier" className="noLine w-75">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img src={StorageTier} width="100%" alt="StorageTier" />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Storage Tier{" "}
                    </h4>
                    <p className="text-black">
                      Moving Bigdata Workloads to aggregated platform for a
                      large telco.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/disasterrecovery" className="noLine w-75">
              <div className="p-3">
                <div className="border-grey-2px cs_boxshadow">
                  <div className="img_zoom">
                    <img
                      src={DisasterRecovery}
                      width="100%"
                      alt="Disaster Recovery"
                    />{" "}
                  </div>
                  <div className="text-group p-3 align-self-center">
                    <h4 className="font-weight-bold text-black">
                      Disaster Recovery{" "}
                    </h4>
                    <p className="text-black">
                      Lightweight disaster recovery platform for Indian Defense.
                    </p>{" "}
                    Learn more <i className="fa fa-arrow-right" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
