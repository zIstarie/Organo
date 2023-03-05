import styles from './Form.module.css';
import { TextInput } from '../TextInput';
import { SelectDropdown } from '../SelectDropdown';
import { useEffect, useState } from 'react';

export const Form = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState(0);
    
    const fetchData = async () => {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/teams`)
            .then(async res => await res.json())
            .then(teams => setItems(teams.map(team => ({ id: team.id, name: team.name }))))
            .catch(err => console.log(err.message));
    }

    const handleChange = event => {
        const index = event.target.selectedIndex;

        setTeam(event.target[index].value);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const data = {
            name: name,
            role: role,
            image: image,
            teamId: team
        };
        const user = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
          .then(async res => await res.json())
          .then(res => console.log('Success'))
          .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className={styles.form}>
            <form onSubmit={event => handleSubmit(event)} >
                <h1>Preencha os dados para criar o card do colaborador</h1>
                <TextInput label="Nome" placeholder="Digite seu nome" onChange={e => setName(e.target.value)} />
                <TextInput label="Cargo" placeholder="Digite seu cargo" onChange={e => setRole(e.target.value)} />
                <TextInput label="Imagem" placeholder="Informe o endereço da imagem" onChange={e => setImage(e.target.value)} />
                <SelectDropdown
                    label="Times"
                    placeholder="Selecione o Time"
                    options={items}
                    onChange={handleChange}
                />
                <button type='submit' className={styles.btnSubmit} >Criar Card</button>
            </form>
        </section>
    );
}