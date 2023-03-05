import { rankWith, scopeEndsWith } from '@jsonforms/core';

const customTagsTester =
    (scope) =>
    (...args) =>
        rankWith(
            5, // increase rank as needed
            scopeEndsWith(scope)
        )(...args);

export default customTagsTester;
