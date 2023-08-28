// const answer = document.getElementById("ans");
// const btnValue = document.querySelectorAll("button");
// const del = document.getElementById("del");
// const clr = document.getElementById("clr");

// del.addEventListener("click", () => {
//   let result = answer.innerText;
//   result = result.slice(0, -1);
//   answer.innerText = result;
// });
// clr.addEventListener("click", () => {
//   answer.innerText = "";
// });

// btnValue.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (button.value === "=") {
//       let result = eval(answer.innerText);
//       answer.textContent = result;
//     } else {
//       answer.textContent += button.value;
//     }
//   });
// });

const first = {
  Partner: "partner",
  "Total FTEs": "total_fte",
  Total: {
    "30 Day Period": "total_30_day_status",
    "% Inactive": "total_30_day_inactive_percentage",
  },
};

const second = {
  Partner: "partner",
  "Total FTE Count": "total_fte_count",
  "Active FTE": {
    "With Threshold": {
      Count: "new_ftes_count",
      Percentage: "new_ftes_percentage",
    },
    "Without Threshold": {
      Count: "new_ftes_count",
      Percentage: "new_ftes_percentage",
    },
  },
  "Inactive FTE": {
    "With Threshold": {
      Count: "new_ftes_count",
      Percentage: "new_ftes_percentage",
    },
    "Without Threshold": {
      Count: "new_ftes_count",
      Percentage: "new_ftes_percentage",
    },
  },
  "New FTE": {
    Count: "new_ftes_count",
    Percentage: "new_ftes_percentage",
  },
};

// function deepCompare(object1) {
//   const obj1Keys1 = Object.keys(object1);
//   for (let key of obj1Keys1) {
//     const keys1 = object1[key];
//     const areObjects = isObject(keys1);
//     if (areObjects) {
//       for (key in keys1) {
//         const keys2 = keys1[key];
//         const areObjects = isObject(keys2);
//         if (areObjects) {
//           return true;
//         } else {
//           return false;
//         }
//       }
//     }
//   }
// }
// function isObject(obj) {
//   return obj !== null && typeof obj === "object";
// }

function deepCompare(object) {
  for (const key in object) {
    if (isObject(object[key])) {
      for (const nestedKey in object[key]) {
        if (isObject(object[key][nestedKey])) {
          return true;
        }
      }
      return true;
    }
  }
  return false;
}

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
console.log(deepCompare(first));

// const firstClone = {
//   a: {
//     Partner: "partner",
//     "Total FTEs": "total_fte",
//   },
//   Total: {
//     "30 Day Period": "total_30_day_status",
//     "% Inactive": "total_30_day_inactive_percentage",
//   },
// };

const HeadingConfigItemsClone = {
  a: {
    a: {
      Partner: "partner",
      "Total FTE Count": "total_fte_count",
    },
  },
  b: {
    "New FTE": {
      Count: "new_ftes_count",
      Percentage: "new_ftes_percentage",
    },
  },
  "Active FTE": {
    "With Threshold": {
      Count: "new_ftes_count",
      Percentage: "new_ftes_percentage",
    },
    "Without Threshold": {
      Count: "new_ftes_count",
      Percentage: "new_ftes_percentage",
    },
  },

  "Inactive FTE": {
    "with Threshold": {
      Count: "new_ftes_count",
      Percentage: "new_ftes_percentage",
    },
    "without Threshold": {
      Count: "new_ftes_count",
      Percentage: "new_ftes_percentage",
    },
  },
};

let count = 1;

const newCopy = (obj, count) => {
  const newObj = {};
  if (count === 1) {
  } else if (count === 2) {
  }
};
