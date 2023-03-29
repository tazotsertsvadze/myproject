autoplay:false
autoplayTimeout:5000
autoplayHoverPause:false


var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


// count js 
class Slider {
  constructor (rangeElement, valueElement, options) {
    this.rangeElement = rangeElement
    this.valueElement = valueElement
    this.options = options

  
    this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
  }

  
  init() {
    this.rangeElement.setAttribute('min', options.min)
    this.rangeElement.setAttribute('max', options.max)
    this.rangeElement.value = options.cur

    this.updateSlider()
  }

 
  asMoney(value) {
    return '$' + parseFloat(value)
      .toLocaleString('en-US', { maximumFractionDigits: 2 })
  }

  generateBackground(rangeElement) {   
    if (this.rangeElement.value === this.options.min) {
      return
    }

    let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
    return 'background: linear-gradient(to right, #50299c, #7a00ff ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
  }

  updateSlider (newValue) {
    this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
    this.rangeElement.style = this.generateBackground(this.rangeElement.value)
  }
}

let rangeElement = document.querySelector('.range [type="range"]')
let valueElement = document.querySelector('.range .range__value span') 

let options = {
  min: 2000,
  max: 75000,
  cur: 37500
}

if (rangeElement) {
  let slider = new Slider(rangeElement, valueElement, options)

  slider.init()
}





// scroll js 



  let bred = document.querySelectorAll('.bred')

document.addEventListener('scroll', function(){
  let scrollTop = document.documentElement.scrollTop;
  for(var i = 0; i < bred.length; i++){
  let elementTop = bred[i].getBoundingClientRect().top;
  if (scrollTop > elementTop + 200){
   bred [i].classList.add('show');
   }else{
    bred[i].classList.remove('show');
  } }
  })


  

  let flicker1 = document.querySelectorAll('.flicker1')

  document.addEventListener('scroll', function(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0; i < flicker1.length; i++){
    let elementTop = flicker1[i].getBoundingClientRect().top;
    if (scrollTop > elementTop + 200){
      flicker1 [i].classList.add('show');
     }else{
      flicker1[i].classList.remove('show');
    } }
    })
  
    let asude = document.querySelectorAll('.asude')

    document.addEventListener('scroll', function(){
      let scrollTop = document.documentElement.scrollTop;
      for(var i = 0; i < asude.length; i++){
      let elementTop = asude[i].getBoundingClientRect().top;
      if (scrollTop > elementTop + 500){
        asude [i].classList.add('show');
       }else{
        asude[i].classList.remove('show');
      } }
      })
    
    

      let footer2 = document.querySelectorAll('.footer2')

    document.addEventListener('scroll', function(){
      let scrollTop = document.documentElement.scrollTop;
      for(var i = 0; i < footer2.length; i++){
      let elementTop = footer2[i].getBoundingClientRect().top;
      if (scrollTop > elementTop + 500){
        footer2 [i].classList.add('show');
       }else{
        footer2[i].classList.remove('show');
      } }
      })
     
// conter js 

        
        
$(document).ready(function() {

  $('.counter').each(function () {
$(this).prop('Counter',0).animate({
  Counter: $(this).text()
}, {
  duration: 4000,
  easing: 'swing',
  step: function (now) {
      $(this).text(Math.ceil(now));
  }
});
});

});  









let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itembox");
let boxFancy = document.querySelectorAll(".fancybox");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
    for (let m = 0; m < boxFancy.length; m++) {
      boxFancy[m].classList.remove("active");
      Fancybox.bind("[data-fancybox].active", {
        groupAll: false
      });
      if (
        boxFancy[m].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        boxFancy[m].classList.add("active");
        Fancybox.bind("[data-fancybox].active", {
          groupAll: true
        });
      }
    }
  });
}









$(function() {
  $('.owl-carousel.testimonial-carousel').owlCarousel({
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      }
    }
  });
});