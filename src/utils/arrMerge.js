export default function arrMerge(arr) {
  const resultArr = [];
  let flag = false;
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    cnt = 0;
    flag = false;
    for (let value in resultArr) {
      // 중복 체크
      if (resultArr[value].publisher === arr[i].publisher && resultArr[value].timestamp === arr[i].timestamp) {
        flag = true;
      }
      if (flag) {
        ++cnt;
        resultArr[value].count += Number(arr[i].count);
        if (resultArr[value].shop_order_status === 1) {
          resultArr[value].reply_count += Number(arr[i].reply_count);
        } else {
          if (arr[i].order_check === true) {
            resultArr[value].reply_count += Number(arr[i].reply_count);
          }
        }
      }
    }
    if (cnt === 0) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}
