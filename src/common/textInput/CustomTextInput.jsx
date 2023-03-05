import { TextField } from '@mui/material';
import { FormattedMessage } from 'react-intl';

export const CustomTextInput = (props) => {
    const { label, handleChange, data, schema, path, id, required, name, rootSchema, visible } = props;

    const onInputChange = (e) => {
        // rootSchema?.properties[path].currValue = e.target.value;
        handleChange(path, e.target.value);
    };

    if (!visible) {
        return null;
    }

    return (
        <TextField
            fullWidth
            id={id}
            label={<FormattedMessage id={label} />}
            required={required}
            sx={{ '& .MuiInputLabel-asterisk': { color: 'red' }, marginY: '12px' }}
            value={data}
            name={name}
            onChange={onInputChange}
            InputProps={{ readOnly: schema?.meta?.viewOnly }}
        />
    );
};
