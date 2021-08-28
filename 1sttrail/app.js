//generate radoum backgorund color 
// var r = () => Math.random() * 256 >> 0;
// var color = `rgb(${r()}, ${r()}, ${r()})`;
let sliderItems=document.querySelectorAll('.slider-item');
var randomColor ;
sliderItems.forEach(item=>{
    randomColor =`#${ Math.floor(Math.random()*16777215).toString(16)}`;
    //** */ item.style.backgroundColor=randomColor;
    // randomColor =`#${ Math.floor(Math.random()*16777215).toString(16)}`;
    // item.style.border=`2px solid ${randomColor}`;
})
// start codeing
class Slider{
    constructor(sliderElem){
        this.slider = sliderElem;
        this.sliderItems = sliderElem.getElementsByClassName('slider-item');
        this.nextBtn = sliderElem.querySelector('.slider-control-next');
        this.prevBtn = sliderElem.querySelector('.slider-control-prev');
        this.currentIdex = 0;
        this.prevItemIdex = this.sliderItems.length-1;
        this.nextItemIdex = 1 ;
        this.isSliding = false ;
        this.setEventListeners()
    }
    // ///////////////
    setEventListeners(){
        this.prevBtn.addEventListener('click',() =>{
            // console.log(
            //     // this.slider ,
            //     // this.sliderItems,
            //  //   this.nextBtn,
            //  //   this.prevBtn,
            //   this.prevItemIdex,
            //     this.currentIdex,
            //     this.nextItemIdex 
            // )
            this.prev();
        });
        this.nextBtn.addEventListener('click' , ()=>{
            this.next();
            console.log(
                // "el"
            //     // this.slider ,
            //     // this.sliderItems,
            //  //   this.nextBtn,
            //  //   this.prevBtn,
            //    this.prevItemIdex,
            //     this.currentIdex,
            //     this.nextItemIdex 
            )
        });
    }
    // //////////////////
    next(){
        if(this.isSliding) return;
        this.isSliding = !this.isSliding;
        // this.sliderItems[this.nextItemIndex].classList.add("next-item");
        setTimeout(() => {
            this.sliderItems[this.currentIdex].classList.add('slide-next');
            // this.sliderItems[this.nextItemIdex].classList.add('next-item');
            this.sliderItems[this.nextItemIdex].classList.add('slide-end');
            this.sliderItems[this.nextItemIdex].classList.add('active');
        }, 20);
        // remove classses The delay will be the same as the transition time in our CSS, 400 ms.
        setTimeout(() => {
            this.sliderItems[this.nextItemIdex].classList.remove('next-item','slide-end');
            this.sliderItems[this.currentIdex].classList.remove('slide-next','active');
            this.isSliding = false;

            this.setIdices("NEXT");
        }, 400);
    }
    // //////////////////
    prev(){
        if(this.isSliding) return;
        this.isSliding = !this.isSliding;
        // this.sliderItems[this.prevItemIndex].classList.add("prev-item");
        setTimeout(() => {
            this.sliderItems[this.currentIdex].classList.add('slide-prev');
            // this.sliderItems[this.prevItemIdex].classList.add('prev-item');
            this.sliderItems[this.prevItemIdex].classList.add('slide-end');
            this.sliderItems[this.prevItemIdex].classList.add('active');
        }, 20);
     // remove classses The delay will be the same as the transition time in our CSS, 1000 ms.
        setTimeout(() => {
            this.sliderItems[this.prevItemIdex].classList.remove('prev-item','slide-end');
            this.sliderItems[this.currentIdex].classList.remove('slide-prev','active');
            this.isSliding = false;

            this.setIdices("PREV")
        }, 400);
    }
//  ////////////////// reset the indexes ////////////////////////////////
        setIdices(direction){
            let index;
            if(direction === 'NEXT'){
                index = this.currentIdex === this.sliderItems.length-1? 0:this.currentIdex+1;
            }
            if(direction === "PREV"){
                index = this.currentIdex === 0 ?this.sliderItems.length-1:this.currentIdex-1;
            }
            if(index ===0){
                this.currentIdex=index;
                this.nextItemIdex=index+1;
                this.prevItemIdex= this.sliderItems.length-1;
            }else if(index === this.sliderItems.length-1){
                this.currentIdex = this.sliderItems.length-1;
                this.nextItemIdex = 0;
                this.prevItemIdex = this.currentIdex-1;
            }else{
                this.currentIdex = index ;
                this.nextItemIdex = index + 1;
                this.prevItemIdex = index - 1;
            }
        }

}


const slider = new Slider(
    document.querySelector('.slider')
)