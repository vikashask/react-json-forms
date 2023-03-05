import { rankWith, scopeEndsWith } from '@jsonforms/core';

const FileUploadInputTester =
    (scope) =>
    (...args) =>
        rankWith(
            5, // increase rank as needed
            scopeEndsWith(scope)
        )(...args);

export default FileUploadInputTester;
