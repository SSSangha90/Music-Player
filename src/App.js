import React from 'react'

import { Grid } from '@material-ui/core'

import { SearchBar, VideoList, VideoDetail } from './Components'

import youtube from './API/YouTube'
// reference to axios instance

class App extends React.Component {
    render(){
        return(
            <Grid justify="centre" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            {/** Search Bar */}
                        </Grid>
                        <Grid item xs={8}>
                            {/** Video Details */}
                        </Grid>
                        <Grid item xs={4}>
                            {/** Video List */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App