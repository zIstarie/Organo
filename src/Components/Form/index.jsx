import styles from './Form.module.css';
import { TextInput } from '../TextInput';
import { SelectDropdown } from '../SelectDropdown';
import { useEffect, useState } from 'react';

export const Form = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    
    async function fetchData() {
        await fetch('https://jsonplaceholder.typicode.com/albums')
            .then(async res => await res.json())
            .then(teams => setItems(teams.map(team => ({ id: team.id, name: team.title }))))
            .catch(err => console.log(err.message));
    }

    const handleSubmit = event => {
        event.preventDefault();
        const data = {
            name: name,
            role: role,
            image: image,
            team: team
        };
        console.log(data);
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
                    onClick={e => setTeam(e.target.value)}
                />
                <button type='submit' className={styles.btnSubmit} >Criar Card</button>
            </form>
        </section>
    );
}