import React from 'react'
import TextField from '@material-ui/core/TextField'


const Dashboard = () => {
    return(
        <div className='dashContainer'>
            <TextField id="filled-basic" label="UserName" variant="filled" />
            <TextField id="filled-basic" label="Password" variant="filled" />
        </div>
    )
}

export default Dashboard;