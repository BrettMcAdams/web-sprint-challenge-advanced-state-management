import React from 'react'
import { connect } from 'react-redux'
import SmurfCard from './SmurfCard'
import uuid from 'react-uuid'

function SmurfCards(props) {
    console.log('Props Log', props);
    return (
        <>
            <h2>Smurfs:</h2>
            {props.smurfs.map(item => {
                return <SmurfCard key={uuid()} smurf={item} />
            })}
        </>
    )
}

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfCards)