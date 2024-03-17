import PropTypes from 'prop-types'
import Button from "./Button.jsx"
import Input from './Input.jsx'

function Form(props) {

    const classBaseInput = 'border w-full  py-2 px-3 rounded-md focus:border-Very-dark-violet focus:outline-none focus:ring-none'

    return (
    <>
        <form onSubmit={props.handleSubmit} className="space-y-4 lg:space-y-5 lg:min-w-[40%]">
            
            <div className="flex flex-col">
                <Input
                    className={`${classBaseInput} ${props.errorCardName ? 'border-red-input' : 'border-Light-grayish-viole' }`}
                    label='Cardholder Name'
                    type='text'
                    placeholder='e.g. Jane Appleseed'
                    id='cardName'
                    inputName='cardName'
                    value={props.cardName}
                    inputChange={props.handleChange}
                    pattern="\w{6,40}"
                    title="Name must be more than 6 letters"
                />
                {props.errorCardName && <p className='text-red-input text-xs mt-1'>Can&#39;t be blank</p>}
            </div>

            <div className="flex flex-col">
                <Input
                    className={`${classBaseInput} ${props.errorCardNumber ? 'border-red-input' : 'border-Light-grayish-viole' }`}
                    label='Card Number'
                    type='text'
                    placeholder='e.g. 1234 5678 9123 0000'
                    id='cardNumber'
                    inputName='cardNumber'
                    maxLength={19}
                    value={props.cardNumber}
                    inputChange={props.handleCardNumber}
                    pattern=".{19,19}"
                    title="Card number must be 16 numbers"
                />
                {props.errorCardNumber && <p className='text-red-input text-xs mt-1'>Can&#39;t be blank</p>}
            </div>
            
            <div className="grid grid-cols-4 gap-x-2">
                
                <div className="flex flex-col col-span-2">
                    <label className='text-Very-dark-violet uppercase text-xs font-bold mb-2 tracking-widest'>Exp. Date (MM/YY)</label>
                    <div className="flex gap-x-2">
                        <label htmlFor="MM" >
                            <input
                                className={`${classBaseInput} ${props.errorMonth ? 'border-red-input' : 'border-Light-grayish-viole' }`}
                                type="number"
                                min='01'
                                max='12'
                                id="MM"
                                placeholder="MM"
                                name="month"
                                value={props.month}
                                onChange={props.handleChange}
                                pattern='\d{2,2}'
                                title="Month must be 2 numbers e.g. 01"
                                aria-label="Introduce the month as two digits"
                            />
                        </label>
                        <label htmlFor="YY">
                            <input
                                className={`${classBaseInput} ${props.errorYear ? 'border-red-input' : 'border-Light-grayish-viole' }`}
                                type="number"
                                min='24'
                                max='40'
                                id="YY"  
                                placeholder="YY"
                                name="year"
                                value={props.year}
                                onChange={props.handleChange}
                                pattern='\d{2,2}'
                                title="Year must be the last 2 numbers e.g. 2024: 24"
                                aria-label="Introduce the last two digits of the year"
                            />
                        </label>
                    </div>
                    {props.errorMonth && props.errorYear ? <p className='text-red-input text-xs mt-1'>Can&#39;t be blank</p> : ''}
                </div>

                <div className="flex flex-col col-span-2 mb-2 lg:mb-4">
                    <Input
                        className={`${classBaseInput} ${props.errorCvc ? 'border-red-input' : 'border-Light-grayish-viole' }`}
                        label='CVC'
                        type='number'
                        placeholder='e.g. 123'
                        id='cvc'
                        inputName='cvc'
                        min="000"
                        max="999"
                        value={props.cvc}
                        inputChange={props.handleChange}
                        pattern='\d{3,3}'
                        title="Cvc must be 3 numbers"
                    /> 
                    {props.errorCvc && <p className='text-red-input text-xs mt-1'>Can&#39;t be blank</p>}
                </div>
            </div>
            <Button 
                textButton="Confirm"
            />
        </form>
    </>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleCardNumber: PropTypes.func,
    cardName: PropTypes.string,
    errorCardName: PropTypes.bool,
    cardNumber: PropTypes.string,
    errorCardNumber: PropTypes.bool,
    month: PropTypes.string,
    errorMonth: PropTypes.bool,
    year: PropTypes.string,
    errorYear: PropTypes.bool,
    cvc: PropTypes.string,
    errorCvc: PropTypes.bool,
}


export default Form
