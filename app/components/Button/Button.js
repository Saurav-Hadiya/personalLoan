import button from './Button.module.css'

const Button = ({ text }) => {
  return (
    <>
      <button
        className={`${latoHeading.className} ${button.btn}`}
        onClick={navigateToPage}
      >
        {text}
      </button>
    </>
  );
};

export default Button;