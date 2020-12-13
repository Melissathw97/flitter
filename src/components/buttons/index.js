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

export {
  MainButton
};