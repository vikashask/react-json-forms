import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Button, Grid } from '@mui/material';
import { FormattedMessage } from 'react-intl';

export const CustomButton = (props) => {
    const { schema, visible } = props;
    const onClick = () => {
        window.open(schema.link, '_blank');
    };
    if (!visible) {
        return null;
    }
    return (
        <Grid container direction="row" alignItems="center" justifyContent="flex-end">
            <Grid item>
                <img width="100" height="70" src="/Assets/Images/qualtrics.png" alt="card_img" />
            </Grid>
            <Grid item>
                <Button variant="outlined" color="primary" onClick={onClick} sx={schema.style}>
                    <FormattedMessage id={schema.title} />
                    <PlayCircleOutlineIcon fontSize="1em" />
                </Button>
            </Grid>
        </Grid>
    );
};
