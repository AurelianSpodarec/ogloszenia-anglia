
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    spinner: {
        display: "inline-block",
        padding: '5px',
        border: "3px solid rgba(255,255,255,.3)",
        borderRadius: "50%",
        borderTopColor: "#fff",
        animationName: '$spin',
        animationDuration: '0.4s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
    },
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    }
}));

export default useStyles;