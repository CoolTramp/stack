import { StackTest } from "./sv1.js";

test("the show method: 1 -> 2 -> 3", () => {
  const stack = new StackTest();
  const writeSpy = jest
    .spyOn(process.stdout, "write")
    .mockImplementation(() => {});

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.show();

  expect(writeSpy).toHaveBeenCalledWith("1 <- 2 <- 3");

  writeSpy.mockRestore();
});

test("the showMin method ", () => {
  const stack = new StackTest();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.pop();
  expect(stack.showMin).toBe(2);
});

test("the length getter ", () => {
  const stack = new StackTest();

  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.pop();
  expect(stack.length).toBe(3);
});

test("the length getter ", () => {
  const stack = new StackTest();

  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  expect(stack.length).toBe(4);
});
