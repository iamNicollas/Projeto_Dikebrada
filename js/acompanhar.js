$(function fullwindowpopup() {
    $(".rastreio").click(function () {
      var numerosro = document.getElementById("OrderTracking").value;
      var w = 650;
      var h = 650;
      var left = Number(screen.width / 2 - w / 2);
      var tops = Number(screen.height / 3 - h / 3);
      return window.open(
        "https://www.linkcorreios.com.br/" + numerosro,
        "",
        "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
          w +
          ", height=" +
          h +
          ", top=" +
          tops +
          ", left=" +
          left
      );
    });
    $(".dropdown").hover(
      function () {
        $(".dropdown-menu", this).stop(true, true).fadeIn("fast");
        $(this).toggleClass("open");
        $("b", this).toggleClass("caret caret-up");
      },
      function () {
        $(".dropdown-menu", this).stop(true, true).fadeOut("fast");
        $(this).toggleClass("open");
        $("b", this).toggleClass("caret caret-up");
      }
    );
  });
  