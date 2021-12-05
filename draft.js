  //Checks if the form inputs are filled in correctly every time form changes 
  checkActive();

  $("#give-money-form").change(function(){
      $("#errors").empty();

      if($("#value").val() < 1){
          $("#errors").append("<p> Môžete darovať najmenej 1€ a najviac 9999€ </p>");
          $("#value").val(1);

      } else if ($("#value").val() > 9999){
          $("#errors").append("<p> Môžete darovať najmenej 1€ a najviac 9999€ </p>");
          $("#value").val(9999);
      }

  })

  //TODO -> Make this more efficient, tidy up the code!!! Break it into functions
  function checkActive(){

      if($("#onetime").hasClass("active")){

          $(".method_select").$(".radio-group-onetime").show();
          $(".method_select").$(".radio-group-periodical").hide();
          $(".main-opt-onetime").prop("selected", true)

          if($("#custom-onetime").hasClass("active")){
              $("#value-send").val($("#custom-onetime").val())
              $("#custom-onetime").change(function(){
                  $("#value-send").val($("#custom-onetime").val())
              })
          }else {
              $("#value-send").val($(".onetimes").find(".active").attr("id").slice(-3));
          }
      
      }else if ($("#periodical").hasClass("active")){

          $(".method_select").$(".radio-group-onetime").hide();
          $(".method_select").$(".radio-group-periodical").show();
          $(".main-opt-periodical").prop("selected", true)

          if($("#custom-periodical").hasClass("active")){
              $("#value-send").val($("#custom-periodical").val())
              $("#custom-periodical").change(function(){
                  $("#value-send").val($("#custom-periodical").val())
              })
          }else {
              $("#value-send").val($(".periodicals").find(".active").attr("id").slice(-2));
          }
  
      }
  }

  $("#onetime").click(function(){
      $("#onetime").addClass("active");
      $("#periodical").removeClass("active");
      $(".onetime-divs").removeClass("hidden");
      $(".periodical-divs").addClass("hidden");
      checkActive();

  })

  $("#periodical").click(function(){
      $("#periodical").addClass("active");
      $("#onetime").removeClass("active");
      $(".periodical-divs").removeClass("hidden");
      $(".onetime-divs").addClass("hidden");
      checkActive();
  })

  var $onetime_divs = $('.onetime-divs').click(function(e) {
      $onetime_divs.removeClass("active");
      $(this).addClass("active");
      checkActive();
  });

  var $periodical_divs = $('.periodical-divs').click(function(e) {
      $periodical_divs.removeClass("active");
      $(this).addClass("active");
  
      checkActive();
  });
  