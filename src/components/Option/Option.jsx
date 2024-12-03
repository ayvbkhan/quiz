export const Option = ({ id, answer, isSelected, onClick }) => {
    return (
        <li className="variant-wrapper" key={id}>
        <input
          type="radio"
          name={`variant-${id}`}
          id={`variant-${id}`}
          checked={isSelected} 
          onChange={onClick}
        />
        <label htmlFor={`variant-${id}`}>{answer}</label>
      </li>
    )
  }