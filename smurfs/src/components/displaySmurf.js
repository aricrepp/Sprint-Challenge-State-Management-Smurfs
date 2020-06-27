import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../actions/actions';
import axios from 'axios';
import './displaySmurf.css';

const DisplaySmurf = ({getSmurf, isFetching, smurfs}) =>{  

    const handleDelete = e => {
        axios
          .delete(`http://localhost:3333/smurfs/${e}`)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      };
  


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
                <div className='smurf-card' onClick={handleDelete(index)}>
                    <p key={index}>{item.name}</p>
                    <p key={index}>{item.age} years old</p>
                    <p key={index}>{item.height}</p>
                </div>
            ))}
        </div>
    );
}


const mapStateIntoProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
    };
}

const mapDispatchToProps = {getSmurf};

export default connect(mapStateIntoProps, mapDispatchToProps)(DisplaySmurf);