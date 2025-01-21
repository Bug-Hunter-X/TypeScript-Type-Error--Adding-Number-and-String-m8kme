# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript that occurs when attempting to add a number and a string.  TypeScript's type system prevents this operation, ensuring type safety.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, in the `result` variable, the function is called with a number and a string, causing a type error.

## Solution

The solution involves ensuring both arguments passed to `add` are numbers.  This can be done through type checking or explicit type conversions.