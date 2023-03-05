import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomDateInput } from './CustomDateInput';

const CustomDateInputControl = (props) => <CustomDateInput {...props} />;

export default withJsonFormsControlProps(CustomDateInputControl);
