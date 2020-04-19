// 请写一个 min 函数，要求 min(numbers) 能返回数组 numbers 中的最小数字。

// 2个：

// if（a>b）{
//     return a
// }else
// {
//     return b
// }

// a>b ? a : b

// 找出数组最小数

let min = (numbers) => {
  if (numbers.length > 2) {
    return min([numbers[0], min(numbers.slice(1))]);
  } else {
    return Math.min.apply(null, numbers);
  }
};
