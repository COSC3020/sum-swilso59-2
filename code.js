function sum(a) {
    var sum = 0; // Changing the value for the variable sum to 0, instead of having it set to the first value in the array. 
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
