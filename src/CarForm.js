import { useState } from 'react'

export default function CarForm({ handleSubmit, initialForm }){
    const [form, setForm] = useState(initialForm)
    return(
        <div>
            <form onSubmit={e => handleSubmit(e, form, setForm)}>
                <label htmlFor="make">Make:</label>
                <input 
                type="text"
                id="make"
                value={form.make}
                onChange={e => setForm({...form, make: e.target.value})}
                />
                <label htmlFor="model">model:</label>
                <input 
                type="text"
                id="model"
                value={form.model}
                onChange={e => setForm({...form, model: e.target.value})}
                />
                <label htmlFor="type">type:</label>
                <input 
                type="text"
                id="type"
                value={form.type}
                onChange={e => setForm({...form, type: e.target.value})}
                />
                <label htmlFor="year">year:</label>
                <input 
                type="number"
                id="year"
                value={form.year}
                onChange={e => setForm({...form, year: e.target.value})}
                />
                <button type="submit">Enter</button>

            </form>
        </div>
    )
}