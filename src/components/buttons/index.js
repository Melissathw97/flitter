import styleClasses from '../../styles/buttons.module.scss';

const MainButton = ({ title, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styleClasses.mainButton}
    >
      {title}
    </button>
  )
}

export {
  MainButton
};