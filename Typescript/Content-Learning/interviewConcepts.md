# Understanding Interfaces and Types in TypeScript

Interfaces and types are both used in TypeScript to define the structure of objects, but they serve different purposes:

## Interfaces
Interfaces are primarily used to define the shape or structure of objects in TypeScript. They describe the contract that an object must adhere to, specifying the names and types of its properties and methods. Interfaces are especially useful when you want to ensure that an object conforms to a specific structure.

## Types
Type aliases, created using the `type` keyword, are used for more dynamic and complex type definitions. They can represent unions, intersections, and other advanced type compositions. Types provide flexibility and can be helpful when working with complex data transformations or defining custom types that are not strictly object shapes.

## Constant Enum Expressions
In TypeScript, it is a compile-time error for constant enum expressions to be evaluated to `NaN` or `Infinity`. For example:

```typescript
enum ExampleEnum {
  Value1 = 1 / 0, // Division by zero results in Infinity
}
