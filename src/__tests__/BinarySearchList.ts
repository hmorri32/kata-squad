import binaryFn from "@code/BinarySearchList";

test("binary search array", function () {
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

  expect(binaryFn(foo, 69)).toEqual(true);
  expect(binaryFn(foo, 69420)).toEqual(true);
  expect(binaryFn(foo, 1)).toEqual(true);

  expect(binaryFn(foo, 1336)).toEqual(false);
  expect(binaryFn(foo, 69421)).toEqual(false);
  expect(binaryFn(foo, 0)).toEqual(false);
});
