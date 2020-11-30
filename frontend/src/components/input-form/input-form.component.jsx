// styles
import './input-form.styles.scss';

const InputForm = ({ handleChange, label, error, display, ...otherProps }) => {
  return (
    <div className={`${display ? 'show' : 'hide'} input-container`}>
      <input
        className={`${error.length > 0 ? 'input-error' : 'input-normal'} `}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} input-label`}
        >
          {label}
        </label>
      ) : null}

      {error ? <p className='input-form-error'>{error}</p> : null}
    </div>
  );
};

export default InputForm;
