import styles from './SelectDropdown.module.css';

export const SelectDropdown = ({ label, placeholder, options, onClick }) => {
  let labelLower = label.toLowerCase();

  return (
    <div className={styles.list} >
      <label htmlFor={labelLower}>{ label }</label>
      <select name={labelLower} id={labelLower} required >
        <option value="" key="" selected disabled>{ placeholder }</option>
        {options.map(option => {
          return (
            <option key={option.id} value={option.name} onClick={onClick} >
              { option.name }
            </option>
          )
        })}
      </select>
    </div>
  );
}