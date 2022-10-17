import React from 'react'

interface InputPropsInterface{
        inputType: 'text' | 'password'|'email' 
        placeholder: string
        child?: React.ReactNode | JSX.Element
        childHandler?: () => void
        required: boolean
        showPassword?: boolean
        containerStyles?:{}
        inputStyle?:{}
}
function Input({
    inputType,
    child,
    placeholder,
    required,
    showPassword,
    containerStyles,
    inputStyle
}:InputPropsInterface) {
  return (
    <div className='input_container' style={containerStyles}>
        <input type={showPassword !== undefined ? (showPassword ? 'text': 'password'): inputType}  placeholder={placeholder} autoComplete={'off'} required={required} style={inputStyle}/>
        {child}
    </div>
  )
}

export default Input