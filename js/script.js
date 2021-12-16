$(".search-inp").on("click", function() {
    $(".search").css({
      "display": "block",
    });
  })
  
  $(".button-close").on("click", function() {
    $(".search").css({
      "display": "none"
    });
  })


  
  /*$(".freesbes").on("click", function() {
 
    var lable = $(".freesbes").value();
 
    if(lable == "show") {
      $(".freesbes").value("hide");
      $(".nav-dr").css({
        "display": "block"
      });
      $(".freesbes").css({
        "transform": "rotate(180deg)",
        "transition": "transform 150ms ease"
      });
    }
    else {
      $(".freesbes").value("show");
      $(".nav-dr").css({
        "display": "none"
      });
      $(".freesbes").css({
        "transform": "rotate(180deg)",
        "transition": "transform 150ms ease"
      });
    }
  });*/


  
  $(".freesbes").on("click", function() {
    $(".nav-dr-close").addClass("nav-dr-open")
    $(".freesbes").addClass("freesbes-fliped")
  })

 /* $(".freesbes").on("click", function() {
    $(".nav-dr-close").removeClass("nav-dr-open")
    $(".freesbes").removeClass("freesbes-fliped")
  })*/




  $(".minicart-inp").on("click", function() {
    $(".minicart").css({
      "display": "block"
    });
  })
  
  $(".minicart-close").on("click", function() {
    $(".minicart").css({
      "display": "none"
    });
  })





  $(".list-btn").on("click", function() {
    $(".product-cards").addClass("product-cards-list")
    $(".product-card").addClass("product-card-list")
    $(".prod-img").css({
      "padding-top": "25px",
      "padding-left": "20px"
    });
    $(".prod-con").css({
      "padding-top": "50px",
      "padding-left": "20px"
    });
    $(".xy").css({
      "display": "flex",
    });
    $(".sym").css({
      "display": "inline-flex",
      "align-items": "center"
    });
    $(".product-symbols").css({
      "align-items": "center",
      "padding-left" : "5px",
      "padding-bottom" : "20px"
    });
    $(".list").css({
      "background-color": "#12167a"
    });
    $(".grid").css({
      "background-color": "lightgrey"
    });
  })
  
  $(".grid-btn").on("click", function() {
    $(".product-cards").removeClass("product-cards-list")
    $(".product-card").removeClass("product-card-list")
    $(".prod-img").css({
      "padding-top": "0px",
      "padding-left": "0px"
    });
    $(".prod-con").css({
      "padding-top": "0px",
      "padding-left": "0px"
    });
    $(".xy").css({
      "display": "block",
    });
    $(".sym").css({
      "display": "block",
    });
    $("product-symbols").css({
    });
    $(".list").css({
      "background-color": "white"
    });
    $(".grid").css({
      "background-color": "#12167a"
    });
  })