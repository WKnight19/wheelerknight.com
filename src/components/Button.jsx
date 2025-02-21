import PropTypes from 'prop-types'

const Button = ({ title, id, leftIcon, containerClass, onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  leftIcon: PropTypes.node,
  containerClass: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
