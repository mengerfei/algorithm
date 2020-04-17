var sort = (numbers) => {
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
    numbers.reverse();
  }
};
// 找出数组最小值
let min = (numbers) => {
  if (numbers.length > 2) {
    return min([numbers[0], min(numbers.slice(1))]);
  } else {
    return Math.min.apply(null, numbers);
  }
};

// minIndex实现
let minIndex = (numbers) => numbers.indexOf(min(numbers));
