const InputBox = ({onChange, id, type, placeHolder, isIcon = false, Icon, className = ''}) => {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }
    return (
    <>
    <div className={`flex ${className} rounded`}>
        {isIcon&&(<span className='inline-flex items-center px-3 text-[#C4C4C4]'>{Icon}</span>)}
        <input type={type} onChange={(e) => onChange(e.target.value)} 
        id={id} placeholder={placeHolder} className={classNames(isIcon ? 'block w-full flex-1':'', 'focus:outline-0')}/>
    </div>
    </>
  )
}

export default InputBox