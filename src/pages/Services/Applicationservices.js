import * as React from "react";
import Layout from '../../components/layout'
import ApplicationServices from '../../img/ApplicationServices.jpg'
import Growth from '../../img/Growth.png'
import Migration from '../../img/Migration.png'
import Replatform from '../../img/Replatform.png'
import Remedition from '../../img/Remedition.png'
import Discovery from '../../img/Discovery.png'
import Office365 from '../../img/Office365.jpg'
import CheckMark from '../../img/CheckMark.png'
import ApplicationServicesErp from '../../img/ApplicationServices_Erp.jpg'


    export class Applicationservices extends React.Component {

        componentDidMount() {
            window.scrollTo(0, 0)
          }

        render() {
            return (
                <Layout>

        <div className='bg-lightgrey'>

            <div className="w-100 pb-3" >
                <img height="auto" width="100%"
                    className=""
                    src={ApplicationServices}
                    alt="Application Services"
                />
            </div>

            <div className=' text-black w-100  text-white px-5  flex-col d-flex text-justify'>
                <div className="w-100  text-black">
<p className="w-100  text-black"><h2 className='mt-3'>Application Services - Overview</h2></p>
                    <p className="lineHeight-24">
                    Applications are the lifeline of your organization. Our innovation-led approach to Application
                    Services helps you to reinvent your enterprise application portfolio, making use of emerging
                    technology and building with speed and agility to enable you to meet business needs, now and in the future.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    SYNECTIKS delivers integrated Application Development and Maintenance services across the full
                    range of your business and technical requirements. We serve as your trusted partner throughout
                    your journey to continuous evolution - delivering flexible service options tailored to your business priorities.
                    <br />{" "}
                    </p>

                </div>
            </div>

            <div className=' text-black w-100 text-white px-5 py-2 flex-col d-flex text-justify'
            data-aos="fade-up" data-aos-duration="2000">

                <div className="w-100 pr-5 text-black">
                <p className="w-100  text-black"><h2 className='mt-3'>Application Services</h2></p>
                    <p className="lineHeight-24">
                    Our application managed services allow you rethink your portfolio and achieve a simplified, standardized,
                    future-ready enterprise application environment. We help address critical questions, such as whether
                    to migrate, re-platform or remediate legacy applications.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    Ultimately, we add value from existing applications while reducing costs, limiting disruptions
                    and decreasing risk. The outcome transforms legacy applications to achieve high performance.
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24 ">
                    <p>We help you tomorrow-proof your existing IT systems while cutting
                        costs and maintaining smooth operations.</p>
                    <ul className="lineHeight-34">
                        <li>With business-driven IT and application development using Agile and DevOps.</li>
                        <li>Through automation, continuous delivery, application modernization and leveraging next-generation technologies.</li>
                        <li>Enhanced cost optimization through cost-efficient ways to host applications and adapt platforms.</li>
                    </ul>
                    </p>
                </div>
                <div className="text-center">
                    <img height="auto" width="100%"
                        className="pt-5"
                        src={Growth}
                        alt="Growth"
                        />
                </div>
            </div>
            <div className="w-100 px-5 pt-3 text-black text-justify"
            data-aos="fade-up" data-aos-duration="2000">
                <p className="lineHeight-24">
                    <h4>We offer a range of services to help companies get the most value from their existing applications :</h4>
                    <br />{" "}
                </p>
            </div>

            <div className="d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12"
            data-aos="fade-up" data-aos-duration="2000">
                <div className="p-3 col-sm-3 " >
                    <div className="w-100 ">
                        <img height="auto" width="50%"
                            className=""
                            src={Discovery}
                            alt="First slide"
                        />
                        <p  className="pt-2"><b>Discovery and Assessment</b></p>
                        <p className="text-center">
                        Provides an accurate understanding of your legacy systems, enabling us to develop
                        the business case around renewing existing applications.
                    </p>
                    </div>
                </div>

                <div className="p-3 col-sm-3" >
                    <div className="w-100 ">
                        <img height="auto" width="40%"
                            className=""
                                        src={Remedition}
                            alt="First slide"
                            />
                        <p  className="pt-2"><b>Remediation</b></p>
                        <p className="text-center">Enhances your applications functionality, which
                        makes them easier to maintain and part of a highly-scalable framework.
                    </p>
                    </div>
                </div>

                <div className="p-3 col-sm-3" >
                    <div className="w-100">
                                    <img height="auto" width="55%"
                                        className=""
                                        src={Replatform}
                                    alt="First slide"
                                />
                        <p  className="pt-2"><b>Re-Platform</b></p>
                        <p className="text-center">Use cloud-native services to optimize enterprise applications without rewriting application code.
                        </p>
                    </div>
                </div>

                <div className="p-3 col-sm-3" >
                    <div className="w-100">
                        <img height="auto" width="50%"
                            className=""
                                        src={Migration}
                                    alt="First slide"
                                />
                        <p  className="pt-2"><b>Migration</b></p>
                        <p className="text-center">Migrates you to a standards-based environment while minimizing disruption to the business.
                    </p>
                    </div>
                </div>

                </div>

            <div className=" pb-5 px-5" >
                <p className="seperator-grey"></p>
            </div>

            <div className="" data-aos="fade-up" data-aos-duration="2000">
            <div className="text-center">
                    <div className=" ">
                        <img src={ApplicationServicesErp} width="100%" alt="Application Services-Erp" />{" "}
                    </div>
                </div>
                </div>

                <div className="px-5 pt-4 text-center"  data-aos="fade-up" data-aos-duration="2000">
                <h4><i>
                We Focus on What Matters!
                </i></h4>
            </div>
            <div className="px-5 pt-3"  data-aos="fade-up" data-aos-duration="2000">
            <p className="lineHeight-24">
            Enterprise Resource Planning (ERP) applications are essential to run your business, but they
            can be time consuming and expensive to create, customize and maintain. We offer ERP Solutions for
            businesses of all sizes - small, midsize and large. We also provide industry and company-specific
            functionality to meet unique business needs.
            </p>
            </div>

                <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
                data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
                <p className="w-100  text-black"><h2 className='mt-3'>Education Management System</h2></p>
                    <p className="lineHeight-24">
                    Easy-to-use All-in-One College and School Management Software, to help you save time!
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    SYNECTIKS EMS is a cloud-based education management solution designed for individual instructors, schools
                    and colleges. Key features include Student and Class Management, Grade Management, Attendance and Timetable, Communication tool and more...
                    <br />{" "}
                    </p>
                    <p className="lineHeight-24">
                    Simple, Powerful and Cost-Effective Education Management System.
                    <br />{" "}
                    </p>

                </div>
            </div>

            <div className="d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12">
                <div className="pb-3 col-sm-4" >
                    <div className="w-100 ">
                        <img height="auto" width="100%"
                            className="w-25 pl-3"
                                        src={CheckMark}
                            alt="Simple"
                        />
                        <p><b>Simple</b></p>
                        <p className="text-center">
                        Designed to engage Teachers, Parents and Students. No expertise required.
                    </p>
                    </div>
                </div>
                <div className="pb-3 col-sm-4" >
                    <div className="w-100 ">
                        <img height="auto" width="100%"
                            className="w-25 pl-3"
                                        src={CheckMark}
                                    alt="Powerful"
                                    />
                        <p><b>Powerful</b></p>
                        <p className="text-center">
                        With efficient operations and ready access to real-time data, you
                        can streamline and automate your core business processes.
                    </p>
                    </div>
                </div>
                <div className="pb-3 col-sm-4" >
                    <div className="w-100 ">
                                    <img height="auto" width="100%"
                                        className="w-25 pl-3"
                                        src={CheckMark}
                                    alt="Cost-Effective"
                                />
                        <p><b>Cost-Effective</b></p>
                        <p className="text-center">
                        Our plans are affordable. We have no hidden fees, no catches and no fine prints.
                    </p>
                    </div>
                </div>

                </div>

            <div className=" p-5" >
                <p className="seperator-grey"></p>
            </div>
            <div className="px-1 " data-aos="fade-up" data-aos-duration="2000">
            <div className="">
                    <div className=" text-center">
                                    <img src={Office365}                                         width="100%" alt="Office365" />{" "}
                    </div>
                </div>
                </div>

                <div className=' text-black w-100 mt-3 text-white px-5 pb-2 pt-5 flex-col d-flex text-justify'
                data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
                    <p className="lineHeight-24">
                        Microsoft is the recognized leader in cloud productivity solutions for business with Office 365 - transforming the workplace experience.
                    </p>
                    <p className="lineHeight-24">
                    With a certified team of Microsoft Partner Professionals, SYNECTIKS delivers on all Microsoft Cloud Solutions, including
                    Office 365, SharePoint, Skype for Business, Teams, Power BI, Microsoft 365 (Office 365 + Enterprise Mobility + Security) and Azure.
                    <br />
                    </p>
                    <p className="lineHeight-24">
                    Imagine what we can do for you!
                    <br />
                    </p>
                    <p className="lineHeight-24">
                    We don’t just move you to Office 365. We help you create and sustain a cost-efficient, highly responsive and
                    secure evergreen workplace platform. We provide a holistic set of transformational and managed services to modernize your workplace.
                    <br />
                    </p>
                    <p className="lineHeight-24">
                    <p><b>We can help accelerate your move to a digital workplace through our :</b>
                    </p>
                    <ul className="lineHeight-34">
                        <li>Experience in unlocking the full productivity potential of Office 365</li>
                        <li>Giving you cost-effective and collaborative tools, including Microsoft Teams, Skype for Business and SharePoint Online.</li>
                        <li>Insights from self-service and data discovery with Microsoft Power BI for Office 365.</li>
                        <li>Ability to extend standard Office 365 service offerings with managed services</li>
                    </ul>
                    </p>

                </div>
            </div>

            <div className="w-100 px-5  text-black" data-aos="fade-up" data-aos-duration="2000">
            <p className="lineHeight-24">
                    <b>Find Out Why Users Are Choosing Office 365</b>
                    </p>
                    </div>
            <div className="d-flex px-5 py-3 flex-col text-center col-lg-12" data-aos="fade-up" data-aos-duration="2000">

                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                    <div className="w-100 ">
                        <p><b>Work Better Together</b></p>
                        <p>
                        Work Anywhere, Anytime, on Any Device with Office 365. Empower your employees the tools they need.
                    </p>
                    </div>
                </div>

                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                    <div className="w-100 ">
                        <p><b>Get More Done</b></p>
                        <p >
                        Enjoy access to the latest versions, security updates and feature releases.
                    </p>
                    </div>
                </div>

                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                    <div className="w-100 ">
                        <p><b>Work Securely</b></p>
                        <p>
                        Work and Share files confidently with built-in security and privacy controls that help keep your data safe and secure.
                    </p>
                    </div>
                </div>
                <div className="p-3 m-1 col-sm-3 border-grey-2px text-center" >
                    <div className="w-100 ">
                        <p><b>Simplified for You</b></p>
                        <p >
                        Choose solutions that are right for your business. Get more value for your money.
                    </p>
                    </div>
                </div>
                </div>

                <div className=' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify'
                data-aos="fade-up" data-aos-duration="2000">
                <div className="w-100  text-black">
                <p className="lineHeight-24 ">
                    <p><b>Built by Microsoft, Made Easy by SYNECTIKS</b>
                    </p>
                    <ul className="lineHeight-34">
                        <li><b>Reliable Support:</b> 24x7x365 support via phone or ticket. 15-minute response time
                            on Sev-1 tickets. SLA based proactive support with Microsoft support escalations.</li>
                        <li><b>Migration Assistance:</b> Let our dedicated team of specialists help you plan and perform your email data migration.</li>
                        <li><b>Dedicated to Your Success:</b> It’s our mission to enable your continued success by advising you and your team on the right technologies &amp; tools to deliver the desired results.</li>
                        <li><b>Licensing Management:</b> We can provide all required Office 365 licensing for your organization on one consolidated invoice.</li>
                    </ul>
                    </p>
                </div>
                </div>
                 </div>
              </Layout>
    );
};
    }

export default Applicationservices;
