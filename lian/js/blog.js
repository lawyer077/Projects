let like = document.getElementsByClassName('i-like');

for( let i=0; i < like.length; i++) {
    like[i].onclick = function () {
        if (this.classList.contains('red-heart')) {
            this.classList.remove('red-heart');
        } else {
            this.classList.add('red-heart')
        }
    }
}