let arr = [
    {
        brand: "samsung",
        name: "a30",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
    },
    {
        brand: "samsung",
        name: "a31",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
    },
    {
        brand: "samsung",
        name: "a32",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
    },
    {
        brand: "oppo",
        name: "a54",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
    },
    {
        brand: "oppo",
        name: "a55",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
    },
    {
        brand: "iphone",
        name: "iphone10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
    },
    {
        brand: "iphone",
        name: "iphone11",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
    },
    {
        brand: "iphone",
        name: "iphone12",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
    },
]
let data;
let inp = document.getElementById("inp")
let categories = document.getElementById("categories")
let details = document.getElementById("details")
let a = Object.keys(arr[0])


function select() {
    console.log(a)

    a.forEach((x) => (categories.innerHTML += `<option value="${x}">${x}</option>`));
}

select()

function filter() {
    let myArr = arr.filter((x) => x[categories.value] == inp.value);
    console.log(myArr)
    for (var i = 0; i < myArr.length; i++) {
        data = Object.values(myArr[i])
    }

    // data = myArr.forEach((x) => Object.values(x))

    console.log(data)

    for (var i = 0; i < data.length; i++) {
        details.innerHTML += `<li>${a[i]}: ${data[i]}</li>`
    }
}



