import { withJsonFormsControlProps } from '@jsonforms/react';
import { FileUploadInput } from './FileUploadInput';

const FileUploadInputControl = (props) => <FileUploadInput {...props} />;

export default withJsonFormsControlProps(FileUploadInputControl);
