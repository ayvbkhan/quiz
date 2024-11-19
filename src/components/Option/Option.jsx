export const Option = ({id, answer}) => {
    return (
        <li className="variant-wrapper" key={id}>
        <input required type="radio" name={`variant-${id}`} id={`variant-${id}`} />
        <label htmlFor={`variant-${id}`}>{answer}</label>
      </li>
    )
  }