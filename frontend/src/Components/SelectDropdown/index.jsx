import styles from './SelectDropdown.module.css';

export const SelectDropdown = ({ label, placeholder, options, onChange }) => {
  let labelLower = label.toLowerCase();

  return (
    <div className={styles.list} >
      <label htmlFor={labelLower}>{ label }</label>
      <select name={labelLower} id={labelLower} onChange={onChange} required >
        <option value="" key="" selected disabled>{ placeholder }</option>
        {options.map(option => {
          return (
            <option key={option.id} value={option.id} >
              { option.name }
            </option>
          )
        })}
      </select>
    </div>
  );
}