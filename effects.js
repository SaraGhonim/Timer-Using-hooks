import {useState, useEffect} from 'react';
export default function create_random_uniqe ()  {
  var nums = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
    ],
    ranNums1 = [],
    i = nums.length,
    j = 0;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums1.push(nums[j]);
    nums.splice(j, 1);
  }
};

// export default function useFetch() {
//   create_random_uniqe();
//   const [minutes_Counter, set_minutes_Counter] = useState(0);
//   const [seconds_Counter, set_seconds_Counter] = useState(0);

//   useEffect(() => {
//     var i = 0;
//     var num = 0;
//     var count = 0;

//     setInterval(() => {
//       num++;
//       if (num == 59) {
//         count++;
//         num = 0;
//       }
//       set_seconds_Counter(num);
//       set_minutes_Counter(count);
//      }, 1000);
//   }, []);
//   return [seconds_Counter.toString(), minutes_Counter.toString()];
// }
