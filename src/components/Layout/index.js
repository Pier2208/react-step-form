import React from 'react'
import PropTypes from 'prop-types'

//material-ui
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    withStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

//styles
const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
}

const Layout = props => {

    const { classes } = props

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        React-step-form
            </Typography>
                </Toolbar>
            </AppBar>
            {props.children}
        </React.Fragment>
    )
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Layout)