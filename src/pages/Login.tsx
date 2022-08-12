/* eslint-disable */

export const Login = () => {
  var removeElement = function (nums: any[]) {
    // let tt: any = [];
    // let copyArr = [...nums];

    // nums.forEach((item, i) => {
    //   const test = nums.filter((element) => element === item);

    //   console.log('test', test);

    //   if (tt.includes(item)) {
    //     copyArr.splice(i + tt.length, test.length);
    //   } else {
    //     tt.push(item);
    //   }
    // });

    // console.log('copyArr', copyArr);

    // let tt: any = new Set([...nums]);

    nums.splice(0, nums.length, ...Array.from(new Set([...nums])));

    console.log('nums', nums);

    return nums;
  };

  console.log('sortedSquares', removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

  return <div>Login!!!</div>;
};
