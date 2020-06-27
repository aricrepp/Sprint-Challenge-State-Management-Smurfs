import React, {useState} from 'react';
import axios from 'axios';
import './newSmurf.css';

const NewSmurf = props =>{

    const [smurfs, addSmurf] = useState([]);

    const handleChanges = e => {
      addSmurf({ ...smurfs, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = e => {
      axios
        .post("http://localhost:3333/smurfs", {
          name: smurfs.name,
          age: smurfs.age,
          height: smurfs.height
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };

    return(
        <div className='form-container'>
             <form className='form-smurf'>
                <label>
                Name:
                <input 
                name="name" 
                value={smurfs.name} 
                onChange={handleChanges} />
                </label>
                <label>
                Age(in years):
                <input 
                name="age" 
                value={smurfs.age} 
                onChange={handleChanges} />
                </label>
                <label>
                Height(in cm):
                <input 
                name="height" 
                value={smurfs.height} 
                onChange={handleChanges} />
                </label>
                <input 
                type="submit" 
                placeholder="Add Smurf" 
                onClick={handleSubmit} />
            </form>
        </div>
    );
}


export default NewSmurf;