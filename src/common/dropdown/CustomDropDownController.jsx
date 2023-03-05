import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomDropdown } from './CustomDropDown';

const CustomDropdownControl = (props) => <CustomDropdown {...props} />;

export default withJsonFormsControlProps(CustomDropdownControl);
