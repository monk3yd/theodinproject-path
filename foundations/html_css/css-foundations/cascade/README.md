# The Cascade of CSS
> The cascade is what determines which rules actually get applied to our HTML. There are different factors that the cascade uses to determine this:

- Specificity: A CSS declaration that is more specific will take precedence over less specific ones.
    1. ID selectors (most specific selector)
    2. Class selector
    3. Type selector

- Inheritance: refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants.
    1. color
    2. font-size
    3. font-family
    4. generally typography based properties, most other properties aren't
    > Directly targeting an element always beats inheritance.

- Rule Order: tie-breaker. When specificity and inheritance are the same, the rule that was last defined is the winner.