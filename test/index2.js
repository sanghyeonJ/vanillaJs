// let response = fetch('https://jsonplaceholder.typicode.com/users')
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

const getData = async() => {
    // let response = await fetch('https://jsonplaceholder.typicode.com/users');
    // let data = await response.json(); // json 파일을 자바스크립트가 활용할 수 있는 객체형태로 변환 / fetch가 완전히 완료된 후 변환하도록 await 적용
    // console.log(data)

    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data =  await response.json();
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
getData();