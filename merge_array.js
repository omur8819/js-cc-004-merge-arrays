document.querySelector("button").addEventListener("click", mergeArray);

function mergeArray() {
    const array1 = document.querySelector("#array1").value.trim(" ");
    const array2 = document.querySelector("#array2").value.trim(" ");
    let result;

    if(array1 === ""){
        result = array2.split(" ");
    };
    else if(array2 === ""){
        result = array1.split(" ");
    };
    else {result = [...array1.split(" "), ...array2.split(" ")]};

    let unique
    
};