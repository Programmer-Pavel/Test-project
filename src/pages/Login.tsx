/* eslint-disable */

export const Login = () => {
  var removeElement = function (nums: any[]) {
    nums.splice(0, nums.length, ...Array.from(new Set([...nums])));

    console.log('nums', nums);

    return nums;
  };

  console.log('sortedSquares', removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

  return <div>Login!!!</div>;
};
