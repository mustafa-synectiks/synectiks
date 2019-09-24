import * as React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Layout from '../../components/layout'
import NiceToMeet from '../../images/NiceToMeet.png'
import "../../components/layout.css"

function validate(firstname, lastname, email, company, jobtitle, country, contact, source, service, otherservice, othersource) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];

    if (firstname.length === 0) {
        errors.push("First Name can't be empty");
    }
    if (lastname.length === 0) {
        errors.push("Last Name can't be empty");
    }
    if (jobtitle.length === 0) {
        errors.push("Job Title can't be empty");
    }
    if (country.length === 0) {
        errors.push("Country can't be empty");
    }
    if (contact.length === 0) {
        errors.push("Contact number can't be empty");
    }

    if (email.length < 3) {
        errors.push("Email should be at least 3 charcters long");
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
        errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
        errors.push("Email should contain at least one dot");
    }

    if (company.length < 6) {
        errors.push("Company name should be mentioned");
    }
    if (source.length < 6) {
        errors.push("Select following option");
    }
    if (service.length < 6) {
        errors.push("Select following option");
    }
    if (otherservice.length < 6) {
        errors.push("Please mention service");
    }
    if (othersource.length < 6) {
        errors.push("Please mention source");
    }

    return errors;
}

export class Contact extends React.Component {

    render() {
        return (
            <Layout>
            <Formik
                initialValues={{
                    firstname: '', lastname: '', email: '', company: '',
                    city: '', contact: '',  source: '', service: '', otherservice: '', othersource:''
                }}
                onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
                    setTimeout(() => {
                        console.log("Logging in", values);
                        // alert("Thank you");
                        resetForm();
                        setStatus({ success: "Thank You ! We will get in touch with you soon." });
                        setSubmitting(false);
                    }, 500);
                }}

                //********Using Yum for validation********/
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required("Email Id is Required")
                        // .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(?!gmail.com)(?!yahoo.com)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/, "Enter valid Email address"),
                        .matches(`/^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/`,"Enter valid Business Email address"),
                        contact: Yup.string()
                        .required("No Contact Number  provided.")
                        .min(10, "Contact number should be 10 numerics minimum.")
                        .matches(`/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/`, "Contact number should be 10 numerics"),
                    firstname: Yup.string()
                        .required("No First Name provided."),
                    lastname: Yup.string()
                        .required("No Last Name provided."),
                    company: Yup.string()
                        .required("No Company Name provided."),
                    city: Yup.string()
                        .required("No City Name provided."),
                        // .matches(/^[a-zA-Z0-9_-]+[a-zA-Z0-9_-]*$/, "Enter your City"),
                    source: Yup.string()
                        .required("No Option selected.")
                        .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Select your option"),
                    service: Yup.string()
                        .required("No Option selected.")
                        .matches(/^[a-zA-Z0-9]+[a-zA-Z0-9]*$/, "Select your option"),
                    // otherservice:Yup.string()
                    //     .required("No Service Name provided."),

                })}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        status
                    } = props;
                        return (
                            <section>
                        <div><img className="text-center" src={NiceToMeet} width="100%" alt="Card Foundation" />

                        </div>
                        <div ><h2 className="text-center text-black">Contact Us</h2></div>

                        <form id="contactform" className="py-3" onSubmit={handleSubmit} action="https://formspree.io/samanth.krotha@synectiks.com" method="POST">
                        <input type="hidden" name="oid" value="00D1I000000kz7k"/>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>First&nbsp;Name</label>
                                        <input id="firstname"
                                            name="firstname"
                                            type="text"
                                            placeholder="Enter Your First Name"
                                            value={values.firstname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.firstname && touched.firstname && "error"}
                                        />
                                        {errors.firstname && touched.firstname && (
                                            <div className="input-feedback">{errors.firstname}</div>
                                        )}
                                    </div>
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>Last&nbsp;Name</label>
                                        <input id="lastname"
                                            name="lastname"
                                            type="text"
                                            placeholder="Enter Your Last Name"
                                            value={values.lastname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.lastname && touched.lastname && "error"}
                                        />
                                        {errors.lastname && touched.lastname && (
                                            <div className="input-feedback">{errors.lastname}</div>
                                        )}
                                    </div>
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label htmlFor="email">Email</label>
                                        <input id="email"
                                            name="email"
                                            type="text"
                                            placeholder="Enter your Business Email Address"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.email && touched.email && "error"}
                                        />
                                        {errors.email && touched.email && (
                                            <div className="input-feedback">{errors.email}</div>
                                        )}
                                    </div>
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>Company</label>
                                        <input id="company"
                                            name="company"
                                            type="text"
                                            placeholder="Enter Your Company Name"
                                            value={values.company}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.company && touched.company && "error"}
                                        />
                                        {errors.company && touched.company && (
                                            <div className="input-feedback">{errors.company}</div>
                                        )}
                                    </div>
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>City</label>
                                        <input id="city"
                                            name="city"
                                            type="text"
                                            placeholder="Enter Your Country/Region"
                                            value={values.city}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.city && touched.city && "error"}
                                        />
                                        {errors.city && touched.city && (
                                            <div className="input-feedback">{errors.city}</div>
                                        )}
                                    </div>
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>Contact Number</label>
                                        <input id="contact"
                                            name="contact"
                                            type="tel"
                                            placeholder="Enter Your Contact Number"
                                            maxLength={10}
                                            value={values.contact}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.contact && touched.contact && "error"}
                                        />
                                            {errors.contact && touched.contact && (
                                                <div className="input-feedback">{errors.contact}</div>
                                        )}
                                    </div>
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>Contact&nbsp;Source</label>
                                        <select name="source" id="source" value={values.source}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.source && touched.source && "error"}>
                                            <option value="" className="bg-logoblue text-white">&nbsp;Contact&nbsp;Source</option>
                                            <option value="Advertisement">&nbsp;Advertisement</option>
                                            <option value="CustomerEvent">&nbsp;Customer&nbsp;Event</option>
                                            <option value="EmployeeReferral">&nbsp;Employee&nbsp;Referral</option>
                                            <option value="GoogleAdwords">&nbsp;Google&nbsp;Adwords</option>
                                            <option value="Partner">&nbsp;Partner</option>
                                            <option value="PurchasedList">&nbsp;Purchased&nbsp;List</option>
                                            <option value="TradeShow">&nbsp;Trade&nbsp;Show</option>
                                            <option value="Webinar">&nbsp;Webinar</option>
                                            <option value="Website">&nbsp;Website</option>
                                            <option value="Othersource" id="othersrc">&nbsp;Other</option>
                                        </select>
                                        <textarea form="input" id="othersource" style={{display:'none'}}   placeholder="Enter your source here..."
                                        name="othersource" onChange={handleChange} onBlur={handleBlur}  value={values.othersource}
                                        className={errors.othersource && touched.othersource && "error"}>
                                        </textarea>
                                        {errors.source && touched.source && (
                                            <div className="input-feedback">{errors.source}</div>
                                        )}
                                    </div>
                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group'>
                                        <label>Select&nbsp;Service</label>
                                        <select name="service" id="service" value={values.service}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.service && touched.service && "error"}>
                                            <option value="" className="bg-logoblue text-white">&nbsp;Select&nbsp;Service</option>
                                            <option value="Cloud">&nbsp;Cloud</option>
                                            <option value="EnterpriseTransformation">&nbsp;Enterprise&nbsp;Transformation</option>
                                            <option value="Foundation">&nbsp;Foundation</option>
                                            <option value="MigrationDeployment">&nbsp;Migration&nbsp;&amp;&nbsp;Deployment</option>
                                            <option value="Operations">&nbsp;Operations</option>
                                            <option value="Optimization">&nbsp;Optimization</option>
                                            <option value="Others" id="others" >&nbsp;Others</option>
                                        </select>
                                        {/* <div  style={{display:'none'}} onChange={handleChange}> */}
                                        <textarea form="input" id="otherservice" style={{display:'none'}}   placeholder="Enter required service here..."
                                        name="otherservice" onChange={handleChange} onBlur={handleBlur}  value={values.otherservice}
                                        className={errors.otherservice && touched.otherservice && "error"}>
                                        </textarea>
                                        {errors.otherservice && touched.otherservice && (
                                        <div className="input-feedback">{errors.otherservice}</div>
                                        )}
                                        {/* </div> */}
                                        {errors.service && touched.service && (
                                            <div className="input-feedback">{errors.service}</div>
                                        )}
                                    </div>

                                    <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4 field-group pt-3'>
                                    <button type="submit" id="submit" className="btn bg-green text-white btnSend mt-3 mx-auto" disabled={isSubmitting} >
                                        Submit
                                    </button>
                                    </div>

                                </div>
                            </div>
                            <div className="text-center text-logoblue"><h3>{status ? status.success : ""}</h3></div>
                        </form>
                    </section>
                    );
                }}
                </Formik>
            </Layout>
        )
    }
}

export default Contact;

