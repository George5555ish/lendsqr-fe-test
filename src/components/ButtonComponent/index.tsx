import React from 'react'

interface ButtonPropsInterface{
    buttonText: string  
    buttonHandler: () => void
    type: 'button' | 'submit'
}
function Button({
    buttonText,
    buttonHandler,
    type
}:ButtonPropsInterface) {
  return (
    <button type={type} className='btn_container heading_font_family text_neutral_600 fw_600 fs_12 | toggle_btn'>{buttonText}</button>
  )
}

export default Button