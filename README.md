# Educational Typescript Decorators
Educational repository with an small set of typescript decorators.

There are four types of decorators:
* Class decorator
* Method decorator
* Parameter decorator
* Property decorator

As the name implies, each decorator is applied on a different level, with its own purpose and meaning. I will go deeper with further details in the next sections.

## Where can these decorators be applied? How they work?
Lorem ipsum

## Decorators. Technical uses
Lorem ipsum

### Class decorator
Lorem ipsum
Examples:
- Logger: it will log new class instances creation.

### Method decorator
Lorem ipsum
Examples:
- Logger: it will print all method calls with inobstrusive code, I mean, without modifying your function code.
- Cache: it is recommended for pure functions (where given an input, it will always return the same output). 
  So, it will cache the inputs and the computed output to return the results very quickly.
- Performance: it will measure the time elapsed between the start and the end of the function execution.

### Parameter decorator
Lorem ipsum
Examples:
- Logger: xxx.

### Property decorator
Lorem ipsum
Examples:
- Logger: it will log either setting or getting operations, printing either the value set or the value obtained.
- Constraints: it will apply some validations over a property, based on the validator specified on the constraint. Some of 
  these validators are related to numeric values (min, max, positive...), to string values (length, upper chars...) or even
  to any kind of properties (like not null validation).
