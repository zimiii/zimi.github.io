var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
   
    },
    
    mounted:function(){        
        swiper = new Swiper('.carousel', {
            loop: true,
            effect: 'cards',

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                
            },
        })     

        }
  });
