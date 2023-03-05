import { withJsonFormsControlProps } from '@jsonforms/react';
import { CustomTags } from './CustomTags';

const CustomTagsControl = (props) => <CustomTags {...props} />;

export default withJsonFormsControlProps(CustomTagsControl);
