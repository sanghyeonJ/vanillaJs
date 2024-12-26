// let $color = document.getElementById('color')
// console.log($color)

// let $animalInfo = document.querySelector('div.animal-info');
// let ageElement = document.querySelector('div#age');
// console.log($animalInfo, ageElement)

// let $infoItem = document.querySelectorAll('div.info-item');
// console.log($infoItem)


//////// this /////////
// 전역 //
// console.log(this) // window객체

// 함수 //
// function func() {
//     console.log(this) 
// }
// func(); // window객체

// 메서드 //
// const cafe = {
//     brand: '이디야',
//     menu: '아메리카노',
//     print: function() {
//         console.log(this)
//     },

// }
// cafe.print(); // cafe객체
// const myCafe = cafe.print;
// myCafe(); // window객체

// 생성자 함수 //
// function Cafe(menu){
//     console.log(this);
//     this.menu = menu;
// }
// let myCafe = new Cafe('latte'); // cafe 객체
// console.log(myCafe) // latte 가 들어간 cafe 객체

// 콜백함수 //
// const cafe = {
//     brand: '이디야',
//     menu: '',
//     setMenu: function(menu){
//         this.menu = menu;
//     }
// }
// function getMenu(menu, callback){
//     callback(menu); // 일반함수로 호출되면 전역객체인 window를 반환하기때문에 cafe 객체에 메뉴가 추가되지 않는다
// }
// getMenu('hot chocolete', cafe.setMenu);
// console.log(cafe)


///// 정리 /////
// 함수 호출 방식  ->  this 에 바인딩 되는 값
// 1. 일반 함수 호출  ->  전역 객체
// 2. 메서드 호출  ->  메서드를 포함하고 있는 객체
// 3. 생성자 함수 호출  ->  생성할 객체
// 4. 콜백 함수 호출  ->  전역 객체


//  화살표 함수 //
function Counter(){
    this.count = 0;
    setInterval(function(){
        this.count++; // 일반함수로 호출되었기때문에 window 전역객체 바인딩
        console.log(this.count);
    }, 2000);

    // 함수 선언 위치에 의해 스코프 결정 => 렉시컬 스코프
    setInterval(() => {
        this.count++; // 화살표함수에서는 상위 스코프를 따라간다 따라서 setInterval내부에 선언된 this는 상위의 Counter함수를 참조한다.
        console.log(this.count);
    }, 2000);
}
const counter = new Counter();

const cafe = {
    brand: '이디야',
    menu: '아메리카노',
    print: () => {
        console.log(this)
    }
}
cafe.print(); // 메서드 호출이지만 화살표함수로 호출되었기 때문에 print 메서드가 선언된 위치인 cafe 객체의 상위스코프인 window 객체가 출력된다.