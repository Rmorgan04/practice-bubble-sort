
function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        console.log(arr.join(','));
      }
    }
    
  }
  return arr;
    

      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

bubbleSort([4, 2, 1, 3, 0]);

module.exports = bubbleSort;