import React, { useState } from 'react'
import uuid from 'react-uuid'
import { connect } from 'react-redux'
import { postSmurfs } from '../store/actions'

const initialFormValues = {
    name: '',
    age: '',
    height: '',
}

function SmurfForm() {

    const [formValues, setFormValues] = useState(initialFormValues)

    const inputChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const submit = evt => {
        evt.preventDefault();
        const newSmurf = {
            name: formValues.name.trim(),
            age: formValues.age.trim(),
            height: formValues.height.trim(),
            id: uuid()
        }
        console.log(newSmurf);
        postSmurfs(newSmurf)
    }

    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    return (
        <form onSubmit={submit} >
            <h2>Add a smurf</h2>
            <label>Name&nbsp;
          <input
                    value={formValues.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                />
            </label>
            <label>Age&nbsp;
          <input
                    value={formValues.age}
                    onChange={onInputChange}
                    name='age'
                    type='text'
                />
            </label>
            <label>Height&nbsp;
          <input
                    value={formValues.height}
                    onChange={onInputChange}
                    name='height'
                    type='text'
                />
            </label>
            <button>Submit</button>

        </form>
    )

}

function mapStateToProps(state) {
    return {
        smurf: state.smurfs
    }
}

export default connect(mapStateToProps, { postSmurfs })(SmurfForm)