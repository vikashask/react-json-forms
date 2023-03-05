import React from 'react';
import { withJsonFormsCellProps } from '@jsonforms/react';
import { CustomDropdown } from './CustomDropDown';

export const CustomDropdownCell = (props) => <CustomDropdown {...props} />;

export default withJsonFormsCellProps(CustomDropdownCell);
