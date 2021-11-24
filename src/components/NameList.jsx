import React, {useState} from 'react';
import uniqid from 'uniqid';

const NameList = () => {

    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const [updateName, setUpdateName] = useState(false)
    const [id, setId] = useState('')

    const addName = (e) => {
        e.preventDefault()
        const newName = {
            id: uniqid(),
            name
        }
        setList([...list,newName])
        setName('')
    }

    const deleteName = (id) => {
        const newList = list.filter( item => item.id !== id)
        setList(newList)
    }

    const update = (item) => {
        setUpdateName(true)
        setName(item.name)
        setId(item.id)
    } 
    const editName = (e) =>{
        e.preventDefault()
        const newUpdateList = list.map (item => item.id === id ? {id:id, name:name} : item)
        setList(newUpdateList)
    }
    return(
        <div>
            Hola soy el name list
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {

                            list.map(item =>
                            <li key={item.id} className="list-group-item">{item.name}
                                <button onClick={()=>deleteName(item.id)} className="btn btn-danger float-right">BORRAR</button>
                                <button onClick={()=>update(item)} className="btn btn-info float-right">ACTUALIZAR</button> 
                            </li> 

                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={updateName ? editName : addName} className="form-group">
                        <input onChange={(e)=>setName(e.target.value)} className="form-control mb-3" type="text" placeholder="Introduce el nombre" value={name}/>
                        <input className="btn btn-info btn-block" type="submit" value={updateName ? 'Actualizar nombre' : 'Introducir nombre'}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NameList