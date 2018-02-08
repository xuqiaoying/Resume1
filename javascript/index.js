window.onload = function (){

    var $item = document.querySelectorAll('.item');
    var $content = document.querySelectorAll('.content');
    
    for (var i = 0; i < $item.length; i++) {
        $item[i].index = i;
        $item[i].onclick = function () {
            for (var i = 0; i < $content.length; i++) {
                var star = this.index;
                $item[i].classList.remove('active');
                $content[i].classList.remove('show');
            }
            this.classList.add('active');
            $content[star].classList.add('show');
        }
    }
}
