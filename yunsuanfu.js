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
  return [numbers[index]].concat(sort2(numbers.splice(index, 1)));
};
