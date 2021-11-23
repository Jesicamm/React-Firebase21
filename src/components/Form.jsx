import React, {useState} from 'react';

const Form = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const Check = (event) => {
        event.preventDefault()
        console.log('hi, I am the button pressed')

        if (!name.trim()){
            console.log('The name is empty')
            return
        }
        if (!age.trim()){
            console.log('The age is empty')
            return
        }
    } 
    

    return (
        <div className='container'>
            <form onSubmit={Check} className='form-group'>
                <input 
                    placeholder='Introduce el nombre' 
                    className='form-control mb-3' 
                    type='text'
                    onChange={ (e) => {setName(e.target.value)}}
                />
                <input 
                    placeholder='Introduce la edad'
                    className='form-control mb-3' 
                    type='text'
                    onChange={ (e) => {setAge(e.target.value)}}
                 />
                <input className='btn btn-info btn-block mb-3' type='submit'/>
            </form>



        </div>
    )
}

export default Form