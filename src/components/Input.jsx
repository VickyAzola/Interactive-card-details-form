import PropTypes from 'prop-types'

function Input(props) {

    const classLabel = 'uppercase text-Very-dark-violet text-xs font-bold mb-2 tracking-widest'

    return (
    <>
        <label htmlFor={props.id} className={classLabel}>{props.label} </label>
        <input
            type={props.type} 
            placeholder={props.placeholder}
            id={props.id}
            name={props.inputName}
            value={props.value}
            onChange={props.inputChange}
            className={props.className}
            min={props.min}
            max={props.max}
            maxLength={props.maxLength}
            pattern={props.pattern}
            title={props.title}
                />
    </>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    inputName: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    maxLength: PropTypes.number,
    min: PropTypes.string,
    max: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
    inputChange: PropTypes.func
}

export default Input
