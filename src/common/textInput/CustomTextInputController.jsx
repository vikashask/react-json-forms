import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomTextInput } from './CustomTextInput';

const CustomTextInputControl = (props) => <CustomTextInput {...props} />;

export default withJsonFormsControlProps(CustomTextInputControl);
