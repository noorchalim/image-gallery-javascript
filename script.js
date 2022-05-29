const kontener = document.querySelector('.container');
const jumbBes = document.querySelector('.besar');
const tumbers = document.querySelectorAll('.thumb');

kontener.addEventListener('click', function(event){
  // cek apakah yang di klik adalah thumb
  if (event.target.className == 'thumb'){
    //mengganti jumbo
    jumbBes.src = event.target.src;
    jumbBes.classList.add('fadeA');
    setTimeout(function(){
      jumbBes.classList.remove('fadeA');
    },500);


    tumbers.forEach(function(thumb) {
      // if (thumb.classList.contains('aktif')){
      //   thumb.classList.remove('aktif');
      //   }
      // });
      thumb.className = 'thumb';
    });


    event.target.classList.add('aktif');
  }
});
