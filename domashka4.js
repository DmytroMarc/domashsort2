const array = [12, 105, -8, 96, -27, -15, 198, 18];

function Sort(array){
  for (let j = 0; j < array.length; j++){
    for (let i = 0; i < array.length - 1; i++){
      if (array[i] < array[i + 1]){
        const result = array[i]
        array[i] = array[i + 1]
        array[i + 1] = result
      }
    }
  }
  console.log(array)}

Sort(array);


bubbleSort(array);