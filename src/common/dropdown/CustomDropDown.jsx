import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const DropDownItem = (props) => {
    const { label, handleChange, data, schema, path } = props;

    const onSelectChange = (e) => {
        handleChange(path, e.target.value);
    };
    return (
        <FormControl fullWidth sx={{ marginY: '12px' }}>
            <InputLabel id="category" required sx={{ '& .MuiInputLabel-asterisk': { color: 'red' } }}>
                {label}
            </InputLabel>
            <Select labelId="category" label="category" fullWidth onChange={onSelectChange} value={data} defaultValue="">
                {schema?.meta?.options?.map((category) => (
                    <MenuItem value={category.value} key={category.value}>
                        {category.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export const CustomDropdown = (props) => {
    const { schema } = props;

    if (schema?.meta?.grid) {
        return (
            <Grid {...schema?.meta?.grid}>
                <DropDownItem {...props} />
            </Grid>
        );
    }

    return <DropDownItem {...props} />;
};
