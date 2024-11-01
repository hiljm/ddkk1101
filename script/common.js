//tab
function openTab(tabName) {
  let target = event.currentTarget;
  let tabcontent = document.getElementsByClassName("main_tab_con");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  $(target).addClass("on");
  $(target).siblings().removeClass("on");
}

//floating
$(window)
  .resize(function () {
    if (window.innerWidth > 1566) {
      var currentPosition = parseInt($(".floating").css("top"));

      $(window).scroll(function () {
        // 스크롤할때 배너가 따라다니게 하기
        var position = $(window).scrollTop();
        $(".floating")
          .stop()
          .animate({ top: position + currentPosition + "px" }, 500);
      });
    } else {
    }
  })
  .resize();

//modal
const body = document.querySelector("body");

function openModal(n) {
  const modal = document.querySelector(".modal" + n);
  modal.classList.add("show");
  setTimeout(() => modal.classList.add("modal_evt"), 50);
}

function closeModal(n) {
  const modal = document.querySelector(".modal" + n);
  modal.classList.remove("show");
  modal.classList.remove("modal_evt");
}

//m_button
$(document).ready(function () {
  $(".m_button").hide();
  $(".m_check_input_wrap").hide();

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        $(".m_button").fadeIn();
      } else {
        $(".m_button").hide();
      }
    });

    $(".m_button").click(function () {
      $(".m_button").hide();
      $(".m_check_input_wrap").fadeIn();
    });
    $(".input_title > img").click(function () {
      $(".m_check_input_wrap").hide();
    });
  });
});
