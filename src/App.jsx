import { useState } from 'react'
import Form from "./components/Form.jsx"
import ThankyouCard from "./components/ThankyouCard.jsx"
import TheCredits from './components/TheCredits.jsx'

function App() {

  const [showComponent, setshowComponent] = useState(false)

  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: ''
  })

  const [error, setError] = useState({
    errorCardName: false,
    errorCardNumber: false,
    errorMonth: false,
    errorYear: false,
    errorCvc: false
  });

function validateValues() {
  let formValid = true

  setError({
    errorCardName: false,
    errorCardNumber: false,
    errorMonth: false,
    errorYear: false,
    errorCvc: false
  })

  if (formData.cardName == '') {
      setError((prevState) => {
        return {
            ...prevState,
            errorCardName: true,
        }
      })
      formValid = false
  }

  if (formData.cardNumber == '') {
    setError((prevState) => {
      return {
          ...prevState,
          errorCardNumber: true,
      }
    })
    formValid = false
  } 

  if (formData.month == '') {
    setError((prevState) => {
      return {
          ...prevState,
          errorMonth: true
      }
    })
    formValid = false
  } 

  if (formData.year == '') {
    setError((prevState) => {
      return {
          ...prevState,
          errorYear: true
      }
    })
    formValid = false
  } 

  if (formData.cvc == '') {
    setError((prevState) => {
      return {
          ...prevState,
          errorCvc: true
      }
    })
    formValid = false
  } 
  return formValid
}

function handleSubmit(event) {
  event.preventDefault();
  let formValid = validateValues();
  if (formValid) {
    setshowComponent(!showComponent)
  }
}

function handleContinue() {
  setshowComponent(!showComponent)
  setFormData('')
}

function handleChange(event) {
  const {name, value} = event.target
  setFormData((prevFormData) => {
      return {
          ...prevFormData,
          [name]: value
      }
  })
}

function handleCardNumber(event) {
  const cardValue = event.target.value
  .replace(/[^0-9]/gi, '')
  .replace(/(.{4})/g, '$1 ')
  .trim();
  setFormData((prevFormData) => {
    return {
        ...prevFormData,
        cardNumber: cardValue,
    }
  })
}

  return (
    <>
    <main className="lg:flex">
      <section className="relative px-6 md:px-28 text-white h-60 bg-[url('/bg-main-mobile.png')] bg-cover 
      md:h-72 lg:min-h-screen lg:w-[35%] lg:bg-[url('/bg-main-desktop.png')]">

          <div className="absolute shadow-lg right-[5%] top-[14%] px-10 text-sm pt-[4.3rem] bg-[url('/bg-card-back.png')] bg-cover
          bg-no-repeat rounded-lg h-[10rem] w-[18rem] md:right-[13%] md:top-[26.5%] md:w-[20rem] md:h-[11rem] md:pt-[4.8rem]
          lg:shadow-xl lg:w-[25rem] lg:h-[13rem] lg:right-[-40%] lg:top-[52%] lg:pt-[5.8rem] lg:px-12">
            <p className="float-right text-[.65rem] lg:text-lg tracking-widest">{formData.cvc ? formData.cvc : '000'}</p>
          </div>

          <div className="absolute shadow-lg bottom-[-18%] z-10 bg-[url('/bg-card-front.png')] bg-cover
          rounded-lg bg-no-repeat h-[10rem] p-4 w-[18rem] md:w-[20rem] md:h-[11rem] md:bottom-[-4rem] 
          lg:shadow-xl lg:w-[25rem] lg:right-[-20%] lg:bottom-[52%] lg:h-[13rem] lg:p-6 ">
            <img className="w-14 pb-9 md:pb-10 md:w-16 lg:w-[4.5rem] lg:pb-12 " src="/card-logo.svg" />
            <p className="font-semibold text-xl md:text-[1.5rem] lg:text-[1.75rem] tracking-wide">{formData.cardNumber ? formData.cardNumber : '0000 0000 0000 0000'} </p>
            <div className="flex justify-between tracking-wide text-[.65rem] lg:text-[.8rem] pt-4 md:pt-5 lg:pt-6">
              <p>{formData.cardName ? formData.cardName  : 'JANE APPLESSED'}</p>
              <p>{formData.month ? formData.month : '00'} / {formData.year ? formData.year : '00'}  </p>
            </div>
          </div>
      </section>

        <section className="pt-20 px-6 pb-8 md:px-28 md:pt-32 lg:pt-0 lg:pr-0 lg:pl-14 lg:w-[70%] lg:flex lg:flex-col lg:justify-center lg:items-center lg:min-h-screen">
            {showComponent ? 
              <ThankyouCard handleContinue={handleContinue} /> 
              :
              <Form 
                handleSubmit={handleSubmit} 
                handleChange={handleChange}
                handleCardNumber={handleCardNumber}
                cardName={formData.cardName}
                errorCardName={error.errorCardName}
                cardNumber={formData.cardNumber}
                errorCardNumber={error.errorCardNumber}
                month={formData.month} 
                errorMonth={error.errorMonth}
                year={formData.year} 
                errorYear={error.errorYear}
                cvc={formData.cvc}
                errorCvc={error.errorCvc}
              />
            }
          <TheCredits />
        </section>
        
    </main>
    </>
  )
}

export default App
