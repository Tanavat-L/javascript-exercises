const removeFromArray = function(array, ...element) {
    let push = true;
    let arr = [];
    for(let i = 0; i < array.length; i++){
        for (const item of element){
            if(array[i] === item){
                push = false;
            }
        }
        if(push){
            arr.push(array[i]);
        }
        push = true;
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
