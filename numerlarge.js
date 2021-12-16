/*Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.*/

var arr = [3,5,7,1,6];
function largeNumb(arr){
    if (arr[0] > arr[1] && arr[0] > arr[2] && arr[0] > arr[3] && arr[0] > arr[4])
        console.log(arr[0])
    else if (arr[1] > arr[0] && arr[1] > arr[2] && arr[1] > arr[3] && arr[1] > arr[4])
        console.log(arr[1])
    
    else if (arr[2] > arr[0] && arr[2] > arr[1] && arr[2] > arr[3] && arr[2] > arr[4])  /*Comparamos cada nuero con los demas para sacar el mayor */
        console.log(arr[2])
    else if (arr[3] > arr[0] && arr[3] > arr[1] && arr[3] > arr[2] && arr[3] > arr[4])
        console.log(arr[3])
    else if (arr[4] > arr[0] && arr[4] > arr[1] && arr[4] > arr[2] && arr[4] > arr[3])
        console.log(arr[4])
largeNumb(arr);
}