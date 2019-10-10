import * as React from "react"
import { Helmet } from "react-helmet"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import ModalContact from "../../components/ModalContact"
import { FiAlignLeft } from "react-icons/fi"
import Layout from "../../components/layout"
import CloudCommon from "../../images/CloudCommon.png"
import HybridCloud from "../../images/HybridCloud.jpg"
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap"
import classnames from "classnames"

export class Hybridcloud extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      fields: {},
      errors: {},
      activeTab: "",
    }

    this.toggle = this.toggle.bind(this)
  }
  toggle(Modal) {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Layout>
        <div className="bg-lightgrey">
          <div className=" text-black w-100 container-fluid text-white px-5 flex-col d-flex text-justify">
            <div className="mt-2 pt-3 text-black">
              <div className="d-flex">
                <h1>CLOUD&nbsp; &#8208;</h1>
                <h1>
                  <i>&nbsp;Cloud Your Way!</i>
                </h1>
              </div>
              <p className="pht lineHeight-24">
                SYNECTIKS provides industry-leading expertise services and
                solutions that allow you to address your specific needs and
                execute on the best-agreed approach to build and manage a
                cloud-enabled enterprise, that aligns with your transformation
                goals.
              </p>
              <p className="pht lineHeight-24">
                Whether you are yet to explore or have already started your
                cloud journey, we help you to accelerate your company’s digital
                transformation and empower your business to stay ahead of the
                game.
              </p>
              <p className="pht lineHeight-24">
                With our expertise on Cloud Solutions we will deliver it the way
                you need it – on-premise or private, public or hybrid cloud. Get
                no-cost expert guidance.
              </p>
              <p className="pht lineHeight-24">
                We’ll listen to You! Your business objectives and growth
                strategy. Schedule a 30-minute consultation to get your
                expedition to cloud started.
              </p>
            </div>

            <div className=" pl-5 py-3 mt-3 w-60">
              <img
                height="auto"
                className="img100 img-fluid"
                src={CloudCommon}
                alt="Cloud"
              />
            </div>
          </div>

          <div className=" bg-white d-flex justify-content-around align-items-center px-2 flex-col text-center col-lg-12">
            <div className="py-3 col-md-2 nav-item dropdown">
              <a
                href="/HostedInfrastructure/index.html"
                className="text-black bg-white noLine"
              >
                <a className="noLine" href="#" id="" data-toggle="dropdown">
                  <b className="text-logoblue">
                    Cloud&nbsp;Hosted&nbsp;Services&nbsp;&#9660;
                  </b>
                </a>
                <div className="dropdown-menu w17em">
                  <a
                    className="dropdown-item"
                    href="/HostedInfrastructure/index.html"
                  >
                    {" "}
                    Hosted Infrastructure{" "}
                  </a>
                  <a
                    className="dropdown-item"
                    href="/CloudManagedBackup/index.html"
                  >
                    {" "}
                    Cloud Managed Backup{" "}
                  </a>
                  <a
                    className="dropdown-item"
                    href="/CloudDisasterRecovery/index.html"
                  >
                    {" "}
                    Cloud Disaster Recovery{" "}
                  </a>
                </div>
              </a>
            </div>

            <div className="py-3 col-md-2">
              <a
                href="/privatecloud/index.html"
                className="text-logoblue bg-white noLine"
              >
                <b>Private Cloud</b>
              </a>
            </div>
            <div className="py-3 col-md-2 bg-logoblue brdr025">
              <a
                href="/hybridcloud/index.html"
                id="hybrid"
                className="text-white noLine"
              >
                Hybrid Cloud
              </a>
            </div>
            <div className="py-3 col-md-2">
              <a
                href="/publiccloud/index.html"
                className="text-logoblue bg-white noLine"
              >
                <b>Public Cloud</b>
              </a>
            </div>
            <div className="py-3 col-md-2">
              <a
                href="/colocation/index.html"
                className="text-logoblue bg-white noLine"
              >
                <b>Colocation</b>
              </a>
            </div>
          </div>

          <div className="text-center mt-3 lineHeight-24"></div>
          <div className=" text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify">
            <div className="w-100 ">
              <img
                height="auto"
                width="100%"
                className=""
                src={HybridCloud}
                alt="Hybrid Cloud"
              />
            </div>

            <div className="w-100 px-5 text-black">
              <h2>Hybrid Cloud</h2>
              <p>
                <b>
                  <i>Bridge Your Clouds, Build Your Future!</i>
                </b>
              </p>
              <p className="lineHeight-24">
                Synectiks hybrid cloud offers a company with a complete cloud
                solution.Our hybrid cloud merges the benefits of both the
                private cloud and the public cloud. It delivers the private
                cloud’s high-security features coupled with the fast connection
                and easy-to-access features of the public cloud. Enterprises are
                adopting a hybrid, multi-cloud approach to enable greater
                flexibility and application modernization, which include the use
                of multiple cloud providers like AWS, Azure or Google Cloud, or
                traditional on-premises environments.
              </p>
            </div>
          </div>
          <div className="px-5 py-2 text-justify">
            <h5 className="lineHeight-24 text-center">
              You can now be able to leverage some of the existing low-cost
              cloud solutions without compromising your security.
            </h5>
          </div>
          <div
            className="container-fluid px-5 pt-3"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="row justify-content-around align-items-center">
              <div className="card card-hybcld mx-2">
                <div className="w-100 card-bd py-4 text-white bg-logoblue text-center">
                  <span>Simple</span>
                </div>
                <div className="card-body">
                  <p className="lineHeight-24">
                    Standardize and automate orchestration workflows and becloud
                    the boundaries across hybrid cloud locations.
                    <br />{" "}
                  </p>
                </div>
              </div>
              <div className="card card-hybcld mx-2">
                <div className="w-100 card-bd py-4 text-white bg-logoblue text-center">
                  <span>Scalable</span>
                </div>
                <div className="card-body">
                  <p className="lineHeight-24">
                    The pay-as-you-go scalability is ideal for heavy or
                    unpredictable traffic - and can reduce IT costs.
                    <br />{" "}
                  </p>
                </div>
              </div>
              <div className="card card-hybcld mx-2">
                <div className="w-100 card-bd py-4 text-white bg-logoblue text-center">
                  <span>Secure</span>
                </div>
                <div className="card-body">
                  <p className="lineHeight-24">
                    When you need enhanced security and ultimate control for
                    business-critical apps and data, incorporate a private
                    cloud.
                    <br />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-fluid px-5 pt-3"
            data-aos="fade-up"
            data-aos-duration="2000"
          ></div>
          <div className="w-100 p-5 text-black text-justify">
            <p className="lineHeight-24">
              Begin your journey with SYNECTIKS Hybrid Cloud.
              <a
                className="navlink navfont noLine text-logoblue cursPoint"
                onClick={this.toggle}
              >
                <small> Contact&nbsp;Us&nbsp;</small>
              </a>
              to learn more.
              <br />{" "}
            </p>
          </div>

          <div className="">
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader className="bg-lightgrey" toggle={this.toggle}>
                Contact Us
              </ModalHeader>
              <ModalBody className="bg-lightgrey brdr-btm-030">
                <ModalContact />
              </ModalBody>
            </Modal>
          </div>
        </div>
        <Helmet>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var vv_base_id = 'q00IB13hyn';
var vv_ext_id = '5d53ed9a';
var __ibaseUrl = (("https:" == document.location.protocol) ? "https://frontend.id-visitors.com" : "http://frontend.id-visitors.com");
(function () {
var va = document.createElement('script'); va.type = 'text/javascript'; va.async = true; va.src = __ibaseUrl + '/cscripts/' + vv_base_id + '-' + vv_ext_id + '.js'; var sv = document.getElementsByTagName('script')[0]; sv.parentNode.insertBefore(va, sv); })();
        `,
            }}
          />
        </Helmet>
      </Layout>
    )
  }
}

export default Hybridcloud
