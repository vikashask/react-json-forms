import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomButton } from './CustomButton';

const CustomButtonControl = (props) => <CustomButton {...props} />;

export default withJsonFormsControlProps(CustomButtonControl);
