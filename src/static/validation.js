function f() {
  var f = document.getElementById("first_name")
  var fn = document.getElementsByClassName("error")
  if (f.value.length === 0) {
    fn[0].innerHTML = "Please Enter Your First Name"
  } else if (f.value.length < 3) {
    fn[0].innerHTML = "Please Enter Your Correct Name"
  } else {
    fn[0].innerHTML = ""
  }
}
function l() {
  var l = document.getElementById("last_name")
  var fn = document.getElementsByClassName("error")
  if (l.value.length === 0) {
    fn[1].innerHTML = "Please Enter Your last Name"
  } else if (l.value.length < 3) {
    fn[1].innerHTML = "Please Enter Your Correct Name"
  } else {
    fn[1].innerHTML = ""
  }
}

function c() {
  var c = document.getElementById("company")
  var fn = document.getElementsByClassName("errorc")
  if (c.value.length === 0) {
    fn[0].innerHTML = "Please Enter Your Company Name"
  } else if (c.value.length < 2) {
    fn[0].innerHTML = "Please Enter Correct Company Name"
  } else {
    fn[0].innerHTML = ""
  }
}

function ct() {
  var ct = document.getElementById("city")
  var fn = document.getElementsByClassName("errorct")
  if (ct.value.length === 0) {
    fn[0].innerHTML = "Please Enter Your City Name"
  } else if (ct.value.length < 3) {
    fn[0].innerHTML = "Please Enter Correct City Name"
  } else {
    fn[0].innerHTML = ""
  }
}
function mb() {
  var mb = document.getElementById("mobile")
  var fn = document.getElementsByClassName("errormb")
  if (mb.value.length === 0) {
    fn[0].innerHTML = "Please Enter Your Mobile Number"
  } else if (mb.value.length < 10) {
    fn[0].innerHTML = "Please 10 digits Number"
  } else {
    fn[0].innerHTML = ""
  }
}
function ml(vEmail) {
  var ml = document.getElementById("email")
  var fn = document.getElementsByClassName("errorml")
  var valEmail = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2, 4})?$/
  if (!vEmail.match(valEmail)) {
    fn[0].innerHTML = "Please Enter Corporate Email Id"
  } else {
    if (ml.value.length === 0) {
      fn[0].innerHTML = "Please Enter Email Id"
      console.log("text")
    } else {
      fn[0].innerHTML = ""
    }
  }
}
function src() {
  var sl = document.getElementById("lead_source")
  var fn = document.getElementsByClassName("errorms")
  var ds = document.getElementsByClassName("src")
  console.log("testing", fn[0].className)
  if (sl.value == "") {
    fn[0].innerHTML = "Please Select any One Source"
    ds[0].style.display = "none"
  } else if (
    sl.value === "Advertisement" ||
    sl.value === "CustomerEvent" ||
    sl.value === "EmployeeReferral" ||
    sl.value === "GoogleAdwords" ||
    sl.value === "Partner" ||
    sl.value === "PurchasedList" ||
    sl.value === "TradeShow" ||
    sl.value === "Webinar" ||
    sl.value === "Website"
  ) {
    fn[0].innerHTML = ""
  } else {
    fn[0].innerHTML = ""
  }
}

function inds() {
  var ind = document.getElementById("industry")
  var fn = document.getElementsByClassName("errormss")
  var ds = document.getElementsByClassName("inds")
  console.log("testing", fn[0].className)
  if (ind.value == "") {
    fn[0].innerHTML = "Please Select any One Service"
    ds[0].style.display = "none"
  } else if (ind.value === "Others") {
    ds[0].style.display = "block"
    ds[0].style.position = "relative"
    ds[0].style.left = "-5%"
    ds[0].style.top = "0"
    fn[0].innerHTML = ""
  } else if (
    ind.value === "Cloud" ||
    ind.value === "Foundation" ||
    ind.value === "EnterpriseTransformation" ||
    ind.value === "MigrationDeployment" ||
    ind.value === "Optimization" ||
    ind.value === "Operations"
  ) {
    fn[0].innerHTML = ""
    ds[0].style.display = "none"
  } else if (ind.value !== "Others") {
    ds[0].style.display = "none"
  } else {
    fn[0].innerHTML = ""
  }
}
