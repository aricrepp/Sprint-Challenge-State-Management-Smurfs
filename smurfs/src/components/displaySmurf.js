import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../actions/actions';
import './displaySmurf.css';

const DisplaySmurf = ({getSmurf, isFetching, smurfs}) =>{

useEffect(() => {
    getSmurf();
}, [getSmurf]);

    if(!isFetching){
        return(
        <div>Loading...</div> 
        );
    }
    
    return(
        <div className='smurf'>
            {smurfs.map((item, index) => (
                <div className='smurf-card'>
                    <p key={index}>{item.name}</p>
                    <p key={index}>{item.age} years old</p>
                    <p key={index}>{item.height}</p>
                </div>
            ))}
        </div>
    );
}


const mapStatetoProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
    };
}

export default connect(mapStatetoProps, {getSmurf})(DisplaySmurf);