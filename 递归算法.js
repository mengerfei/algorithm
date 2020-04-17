// 算法---排序
/*将正整数数组从小到大排序
 *
 *  思路：
 *      用递归实现
 *      用循环实现
 *
 *   长度为2的数组排序
 *
 */

// 代码：
// let sort2 = ([a, b]) => {
//   if (a > b) {
//     return [a, b];
//   } else {
//     return [b, a];
//   }
// };

// 优化代码：
let sort2 = ([a, b]) => (a < b ? [a, b] : [b, a]);

// 长度为3的数组排序

// 代码：

// let sort3 = ([a,b,c]) =>{
//     return [min([a,b,c])], sort2([???])]
// }

// 改进代码

let sort3 = (numbers) => {
  let index = minIndex([numbers]);
  numbers.splice(index, 1); //从numbers 里删掉 min
  return [min].concat(sort2(numbers));
  //   return [numbers[index]].concat(sort2(numbers.splice(index, 1)));
};

// minIndex实现
let minIndex = (numbers) => numbers.indexOf(min(numbers));

// 长度为4的数组排序
let sort4 = (numbers) => {
  let index = minIndex(numbers);
  let min = numbers[index];
  numbers.splice(index, 1);
  return [min].concat(sort3(numbers.splice(index, 1)));
};

// 任意长度的数组排序

// 代码

let sort = (numbers) => {
  //判断数组长度
  if (numbers.length > 2) {
    //求出数组最小值的下标
    let index = minIndex(numbers);
    //求出数组最小值
    let min = numbers[index];
    //删掉数组最小值
    numbers.splice(index, 1);
    // 返回 数组最小值 + 对后面数组进行排序
    return [min].concat(sort(numbers));
  } else {
    // 返回 成立 当前数组  否则 当前数组倒序
    return numbers[0] < numbers[1] ? numbers : numbers.reverse();
  }
};
//用代入法分析 排序 sort([12,5,8,7,9])

// sort([12, 5,8, 7, 9])
//  = [5] + sort([12,8, 7, 9])
//  = [5] + （[7]+sort([12, 8, 9]))
//  = [5] + [7]+（[8]+sort([12, 9]))
//  = [5] + [7]+[8]+（[9，12]))
//  = [5] + [7]+[8]+[9]+[12]
//  = [5] + ([7]) + ([8,9,12])
//  = [5] +([7,8,9,12])
//  = [5,7,8,9,12]
