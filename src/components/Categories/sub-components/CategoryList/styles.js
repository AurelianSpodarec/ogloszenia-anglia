import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    categoryWrap: {
        display: 'flex',
        flexWarp: 'nowrap',
        overflowY: 'auto',
        [theme.breakpoints.up('md')]: {
            direction: "row",
            justifyContent: "center",
            alignItems: "baseline",
            marginTop: '48px',
        }
    }
}));

export default useStyles;