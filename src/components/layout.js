import React, { useEffect } from "react"
import Header from "./Header"
import $ from "jquery"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  useEffect(() => {
    // $(document).ready(function () {
    //   setTimeout(function () {
    //     $(".content").fadeOut();
    //   }, );
    // });

    $(document).ready(function() {
      $(".navbar-nav").click(function() {
        $("#navbarSupportedContent").close()
      })
    })

    // Cookie Strip
    $(document).ready(function() {
      $("#hide").click(function() {
        $(".content").hide()
      })
    })

    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
      if (
        !$(this)
          .next()
          .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show")
      }
      var $subMenu = $(this).next(".dropdown-menu")
      $subMenu.toggleClass("show")

      // NavLink HighLight
      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function(e) {
          $(".dropdown-submenu .show").removeClass("show")
        })
    })

    $(document).ready(function() {
      $(function() {
        $(".dropdown-item").on("click", function(e) {
          $(".nav-item .nav-link").removeClass("active")
          $(this)
            .parents(".nav-item")
            .find(".nav-link")
            .addClass("active")
        })
      })
    })

    //     $(document).ready(function() {
    //    $('#otherservice').hide();
    //    $("#otherservice").style.display = "none";
    // });
    //     $("#otherservice").hide();

    $(document).ready(function() {
      $("#otherservice").hide()
    })
    // $("#otherservice").style.display = "none";
    $("#service").change(function() {
      var val = $(this).val()
      $("#otherservice").hide()
      if (val == "Others") {
        $("#otherservice").show()
        // $("#otherservice").style.display = "block";
      } else {
        $("#otherservice").hide()
      }
    })

    $(document).ready(function() {
      $("#othersource").hide()
    })
    $("#source").change(function() {
      var val = $(this).val()
      $("#othersource").hide()
      if (val == "Othersource") {
        $("#othersource").show()
      } else {
        $("#othersource").hide()
      }
    })
  })
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
