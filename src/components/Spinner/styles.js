
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    spinner: {
        display: "inline-block",
        width: "50px",
        height: "50px",
        border: "8px solid rgba(255,255,255,.3)",
        borderRadius: "50%",
        borderTopColor: "#fff",
        animation: "spin 1s linear infinite",
    },
    '@keyframes spin': {
        to: { transform: "rotate(360deg)" },
    }
}));

export default useStyles;