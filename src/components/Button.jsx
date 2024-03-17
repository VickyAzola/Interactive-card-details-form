import PropTypes from 'prop-types'

function Button(props) {

    return (
    <>
    <button
        type={props.type}
        onClick={props.handleClick}
        className="bg-Very-dark-violet text-lg py-3 px-4 w-full text-white rounded-lg font-semibold">
            {props.textButton}
    </button>
    </>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func,
    textButton: PropTypes.string,
    type: PropTypes.string,
}

export default Button
