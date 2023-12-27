
$(function() {
  $('.home-categories').slick({
    nextArrow: '<i class="ri-arrow-right-s-line slick-next"></i>',
    prevArrow: '<i class="ri-arrow-left-s-line slick-prev"></i>',
    arrows: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 6,
    spaceBetween:10,
    accessibility: true,
    variableWidth: false,
    focusOnSelect: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1.5
        }
      }
    ]
  });
});  

$(function() {
  $('.slide-products').slick({
    nextArrow: '<i class="ri-arrow-right-s-line slick-next"></i>',
    prevArrow: '<i class="ri-arrow-left-s-line slick-prev"></i>',
    arrows: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 5,
    spaceBetween:10,
    accessibility: true,
    variableWidth: false,
    focusOnSelect: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });
});  


// side modal 
var openProfileSidebtn = document.getElementById('openProfileSidebtn');
var openProfileSideOffcanvas = document.getElementById('openProfileSideOffcanvas');
var overlay = document.getElementById('overlay');
var closeIcon = document.getElementById('closeIcon');

openProfileSidebtn.addEventListener('click', () => {
    console.log('open modal');
    openProfileSideOffcanvas.style.left = "0";
    openProfileSideOffcanvas.style.opacity = "1";
    overlay.style.display = "block"
    console.log("openProfileSide");
});
overlay.addEventListener('click', closeModal);
closeIcon.addEventListener('click', closeModal);

function closeModal() {
    openProfileSideOffcanvas.style.left = "-414px";
    overlay.style.display = "none"
}

var locationModal = document.getElementById('locationModal');






// count quandity itmes 
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }


 
  


  