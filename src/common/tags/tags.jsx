import { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './tags.css';

const Tags = ({ tagList, handleTag, disabled, sx }) => {
    const [receivers, setReceivers] = useState(tagList);
    const handleTags = (arrayOfTags) => {
        setReceivers(arrayOfTags);
        handleTag(arrayOfTags);
    };
    return (
        <Autocomplete
            multiple
            sx={sx}
            id="tagsMain"
            options={[]}
            defaultValue={receivers}
            freeSolo
            onChange={(e, value) => handleTags(value)}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />)
            }
            renderInput={(params) => <TextField {...params} label="Add Tags" placeholder="Add Tags" />}
            disabled={disabled}
        />
    );
};

export default Tags;
