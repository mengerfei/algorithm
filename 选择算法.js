// minIndex重写
let minIndex = (numbers) => {
  let index = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i;
    }
  }
  return index;
};

// 所有的递归都可以改成循环

// 调换位置
let swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

// 调用：swap(numbers,1,2)

let sort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    let index = minIndex(numbers.slice(i) + i);
    swap(numbers, index, i);
  }
};
