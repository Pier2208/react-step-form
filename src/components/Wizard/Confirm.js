import React from 'react'
import PropTypes from 'prop-types'

//material-ui
import {
    Button,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core'

const Confirm = ({ prevStep, nextStep, values }) => {

    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            width: '600px',
            margin: '0 auto'
        }}>
            <h1 style={{ color: 'darkblue' }}>Step 3: Confirm</h1>

            <List component='ul'>
                {
                    Object.keys(values).map(key =>
                        <ListItem key={key}>
                            <ListItemText
                                primary={key.toUpperCase()}
                                secondary={values[key]}
                            />
                        </ListItem>)
                }
            </List>


            <div style={{ display: 'flex' }}>
                <Button
                    style={{ width: "100px", marginTop: '30px', marginRight: '30px' }}
                    variant="contained"
                    onClick={prevStep}
                >
                    Back
            </Button>

                <Button
                    style={{ width: "fit-content", marginTop: '30px' }}
                    variant="contained"
                    color="primary"
                    onClick={nextStep}
                >
                    Confirm & Continue
            </Button>
            </div>
        </div>
    )
}

Confirm.propTypes = {
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired
}

export default Confirm
