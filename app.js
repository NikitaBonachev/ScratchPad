function getSums(arr) { 
    arr.reduce(function(prevElement, currentElement) {
        prevElement[prevElement.length] = prevElement[prevElement.length] + currentElement;
        prevElement.push(currentElement);
        return prevElement;
    }, [0]);
}

function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}