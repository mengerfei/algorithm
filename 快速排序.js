// quick sort
// 使用递归思想;

// 以某某为基准
// 想想你是一个体育委员
//     你面对的同学为[12,3,7,21,5,94,6]
//        【以某某为基准，小的去前面，大的去后面】
// 你只需要重复说这句话，就能排序
let quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};
