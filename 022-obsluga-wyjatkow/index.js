function distanceBetween({ min, max }) {
  if (!min && min !== 0) {
    throw "Field min is empty!";
  }

  if (!max && max !== 0) {
    throw "Field max is empty!";
  }

  if (max < min) {
    throw "Max must be greater than min";
  }

  return max - min;
}

try {
  console.log(distanceBetween({ max: 100 }));
} catch (e) {
  console.log(e);
}

try {
  console.log(distanceBetween({ min: 100 }));
} catch (e) {
  console.log(e);
}

try {
  console.log(distanceBetween({ min: 120, max: 100 }));
} catch (e) {
  console.log(e);
}

try {
  console.log(distanceBetween({ min: 50, max: 100 }));
  console.log(distanceBetween({ min: 100, max: 100 }));
} catch (e) {
  console.log(e);
}
