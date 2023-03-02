import styles from './TextInput.module.css';

export const TextInput = ({ label, placeholder, onChange }) => {
    const labelLower = label.toLowerCase();

    return (
        <div className={styles.textField}>
            <label htmlFor={labelLower} >{label}</label>
            <input type="text" id={labelLower} name={labelLower} placeholder={`${placeholder}...`} onChange={onChange} required />
        </div>
    );
}