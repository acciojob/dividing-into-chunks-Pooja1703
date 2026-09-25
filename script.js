const arr = [4, 3, 2, 1];

function divide(arr, n) {

  let ans = [];
  let temp = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {

    if (sum + arr[i] <= n) {
      temp.push(arr[i]);
      sum = sum + arr[i];
    } else {
      ans.push(temp);

      temp = [];
      temp.push(arr[i]);

      sum = arr[i];
    }
  }

  if (temp.length > 0) {
    ans.push(temp);
  }

  return ans;
}
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));