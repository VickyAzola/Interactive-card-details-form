import PropTypes from 'prop-types'
import Button from "./Button.jsx"

function ThankyouCard(props) {

    return (
    <>
    <section className="flex flex-col items-center gap-y-4">
        <img src="/icon-complete.svg" alt="" />
        <h1 className="uppercase mt-3 tracking-widest text-2xl font-bold text-Very-dark-violet">Thank you!</h1>
        <p className="text-Dark-grayish-violet font-semibold mb-7">We&#39;ve added your card details</p>
        <Button 
            handleClick={props.handleContinue}
            textButton="Continue"
        />
    </section>
    </>
    )
}

ThankyouCard.propTypes = {
    handleContinue: PropTypes.func,
}


export default ThankyouCard
