let name = '상현';
console.log(name)

connectString('study', 'hoisting')
function connectString(str1, str2){
    console.log(str1 + str2)
}




// 함수 선언식
// 호이스팅 O
function func(){
    console.log('함수 선언식');
}

// 함수 표현식
// 호이스팅 X
// 호이스팅 시 const func 가 상단으로 올라가지만 초기값을 가지기 전까진 TDZ로 이동하여 사용할 수 없다
const func1 = function () {
    console.log('함수 표현식');
}
const func2 =  () => {
    console.log('함수 표현식');
}

const add = function(a, b){
    return a + b
}
console.log(add(1,2))


// 콜백함수
// 다른 함수의 매개변수로 넘겨준 함수
const calculate = (a, b, callback) => {
    let result = a + b;
    callback(result);
}

const  printResult = (result) => {
    console.log('결과 : ' + result);
}
const doubleResult = (result) => {
    console.log('결과에 2를 곱한 값 : ' + result * 2);
}

calculate(5, 3, printResult);
calculate(5, 3, doubleResult);


