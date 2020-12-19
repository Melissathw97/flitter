import styleClasses from '../../styles/buttons.module.scss';

const MainButton = ({ title, type, onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styleClasses.mainButton}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

const MainOutlinedButton = ({ title, type, onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styleClasses.mainOutlinedButton}
      disabled={disabled}
    >
      {title}
    </button>
  )
};

const ButtonLink = ({ title, type, onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styleClasses.buttonLink}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export {
  MainButton,
  MainOutlinedButton,
  ButtonLink
};