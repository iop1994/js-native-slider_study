import Carousel from './carousel.js';

class SwipeCarousel extends Carousel {
    constructor(...args) {
        super(...args);
        this.slidesContainer = this.slideItems[0].parentElement;
    }

    _initListeners() {
        super._initListeners();
        this.container.addEventListener('touchstart', this._swipeStart.bind(this));
        this.container.addEventListener('touchend', this._swipeEnd.bind(this));
    }


    _swipeStart(e) {
        this.swipeStartX = e.changedTouches[0].pageX;
    }


    _swipeEnd(e) {
        this.swipeEndX = e.changedTouches[0].pageX;
        this.swipeStartX - this.swipeEndX > 100 && this.next();
        this.swipeStartX - this.swipeEndX < -100 && this.prev();
    }
}

export default SwipeCarousel;
