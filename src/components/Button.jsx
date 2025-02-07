// eslint-disable-next-line react/prop-types
function Button({ buttonText = "click me", buttonStyle = "" }) {
  return (
    <button className={`px-4 py-2 rounded ${buttonStyle}`}>{buttonText}</button>
  );
}

export default Button;
