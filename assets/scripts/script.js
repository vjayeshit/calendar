document.querySelectorAll('.button-group a').forEach( function( el ) {
    el.addEventListener('click',function(e){
        document.querySelectorAll('.button-group a').forEach( function( all_el ) {
            all_el.classList.remove('active')
        })
        this.classList.add('active');
        let className = this.dataset.class;
        let cal_el = document.getElementById('calendar');
        if(cal_el){
            cal_el.classList.remove("size1x");
            cal_el.classList.remove("size2x");
            cal_el.classList.remove("size3x");
            cal_el.classList.add(className)
        }
    })
 });
 