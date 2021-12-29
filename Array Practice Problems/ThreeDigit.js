first = Math.floor(Math.random() * 1000);
second = Math.floor(Math.random() * 1000);
third = Math.floor(Math.random() * 1000);

array = [first, second, third];
console.log(array)

if (first > second && first > third) {
    if (second < third)
        console.log(third);
    else
        console.log(second);
}

else if (second > first && second > third) {
    if (first < third)
        console.log(third);
    else
        console.log(first);
}

else {
    if (first < second)
        console.log(second);
    else
        console.log(first);
}