const path = require("path")
module.exports = [
  {
    path: "/",
    component: path.resolve(`src/pages/index.js`),
  },
  {
    path: "/devops",
    component: path.resolve(`src/pages/Transformation/Devops.js`),
  },
  {
    path: "/foundation",
    component: path.resolve(`src/pages/Transformation/Foundation.js`),
  },
  {
    path: "/microservices",
    component: path.resolve(`src/pages/Transformation/Microservices.js`),
  },
  {
    path: "/transformation",
    component: path.resolve(`src/pages/Transformation/Transformation.js`),
  },
  {
    path: "/operations",
    component: path.resolve(`src/pages/Transformation/Operations.js`),
  },
  {
    path: "/migrations",
    component: path.resolve(`src/pages/Transformation/Migrations.js`),
  },
  {
    path: "/HostedInfrastructure",
    component: path.resolve(
      `src/pages/Cloud/CloudHostedServices/HostedInfrastructure.js`
    ),
  },
  {
    path: "/CloudManagedBackup",
    component: path.resolve(
      `src/pages/Cloud/CloudHostedServices/CloudManagedBackup.js`
    ),
  },
  {
    path: "/CloudDisasterRecovery",
    component: path.resolve(
      `src/pages/Cloud/CloudHostedServices/CloudDisasterRecovery.js`
    ),
  },
  {
    path: "/privatecloud",
    component: path.resolve(`src/pages/Cloud/Privatecloud.js`),
  },
  {
    path: "/hybridcloud",
    component: path.resolve(`src/pages/Cloud/Hybridcloud.js`),
  },
  {
    path: "/publiccloud",
    component: path.resolve(`src/pages/Cloud/Publiccloud.js`),
  },
  {
    path: "/colocation",
    component: path.resolve(`src/pages/Cloud/Colocation.js`),
  },
  {
    path: "/applicationservices",
    component: path.resolve(`src/pages/Services/Applicationservices.js`),
  },
  {
    path: "/managedservices",
    component: path.resolve(`src/pages/Services/Managedservices.js`),
  },
  {
    path: "/networkservices",
    component: path.resolve(`src/pages/Services/Networkservices.js`),
  },
  {
    path: "/casestudy",
    component: path.resolve(`src/pages/Resources/Casestudy.js`),
  },
  {
    path: "/featured",
    component: path.resolve(`src/pages/Resources/Featured.js`),
  },
  {
    path: "/about",
    component: path.resolve(`src/pages/Company/Aboutus.js`),
  },
  {
    path: "/careers",
    component: path.resolve(`src/pages/Company/Careers.js`),
  },
  {
    path: "/askfordemo",
    component: path.resolve(`src/pages/Mails/Askdemo.js`),
  },
  {
    path: "/contactus",
    component: path.resolve(`src/pages/Mails/Contact.js`),
  },
  {
    path: "/realtime",
    component: path.resolve(`src/pages/CaseStudies/Realtime.js`),
  },
  {
    path: "/networkdesign",
    component: path.resolve(`src/pages/CaseStudies/Networkdesign.js`),
  },
  {
    path: "/disasterrecovery",
    component: path.resolve(`src/pages/CaseStudies/Disasterrecovery.js`),
  },
  {
    path: "/storagetier",
    component: path.resolve(`src/pages/CaseStudies/Storagetier.js`),
  },
  {
    path: "/storagemigration",
    component: path.resolve(`src/pages/CaseStudies/Storagemigration.js`),
  },
  {
    path: "/softwaredefined",
    component: path.resolve(`src/pages/CaseStudies/Softwaredefined.js`),
  },
]
