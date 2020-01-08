import { fade, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import { fade, makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    customMenu: {
        border: '1px solid #ccc',
        backgroundColor: '#000'
    },
    userInfo: {
        display: 'flex',
        color: 'black',
        alignItems: 'center',
        marginLeft: '10px'
    },
    userInfoName: {
        marginRight: '4px'
    },
    userInfoName: {
        width: '40px',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block'
        }
    }
}));

export default useStyles;


// const StyledMenu = withStyles({
//     paper: {
//         border: '1px solid #d3d4d5',
//     },
// })(props => (
//     <Menu
//         elevation={0}
//         getContentAnchorEl={null}
//         anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'center',
//         }}
//         transformOrigin={{
//             vertical: 'top',
//             horizontal: 'center',
//         }}
//         {...props}
//     />
// ));

// const StyledMenuItem = withStyles(theme => ({
//     root: {
//         '&:focus': {
//             backgroundColor: theme.palette.primary.main,
//             '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//                 color: theme.palette.common.white,
//             },
//         },
//     },
// }))(MenuItem);

// export {
//     StyledMenu,
//     StyledMenuItem
// }