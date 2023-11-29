import { useState, useEffect } from "react"
import { InputForm } from "./InputForm"

import { Anchor } from "./Anchor"

function textFormat(lang, name = '', email = '', message = '') {
  const text =
    `${lang.contactform_message1} ${name}
${message}
    
Email: ${email}
    
${lang.contactform_message2}`

  return text
}
const ContactForm = ({lang}) => {
  const [whatsAppLink, setWhatsAppLink] = useState('')
  const [smsLink, setSmsLink] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleChange(event) {

    switch (event.target.id) {
      case 'name':
        setName(event.target.value)
      case 'email':
        setEmail(event.target.value)
      case 'message':
        setMessage(event.target.value)
    }
  }
  useEffect(() => {
    const textURI = encodeURIComponent(textFormat(lang, name, email, message))
    setWhatsAppLink(`https://wa.me/13053910750?text=${textURI}`)
    setSmsLink(`sms:+13053910750?body=${textURI}`)
  }, [name, email, message])

  return (
    <div className=' w-full px-5 py-12 max-md:max-w-full justify-center flex flex-col items-center'>

      <span className="text-mc-black font-bold text-3xl py-5 leading-4 self-center whitespace-nowrap min-w-lg text-center">
        {lang.contactform_title}
      </span>
      <InputForm placeholder={lang.contactform_nameinput} type='text' inputId='name' extraClass='' onChange={handleChange} />
      <InputForm placeholder='Email' type='email' inputId='email' extraClass='' onChange={handleChange} />
      <InputForm placeholder={lang.contactform_messageinput} type='text' inputId='message' extraClass='' onChange={handleChange} />
      <div className="flex">
      <Anchor
          extraClass="bg-mc-forth text-mc-bg max-w-sm m-1 text-transparent"
          text={lang.contactform_anchorwhatsapp}
          iconSrc=''
          href={whatsAppLink}
          target="_blank"
        />

        <Anchor
          extraClass="bg-mc-forth text-mc-bg max-w-sm m-1 text-transparent"
          text={lang.contactform_anchortext}
          iconSrc=''
          href={smsLink}
          target="_blank"
        />
      </div>

    </div>
  )
}

export default ContactForm