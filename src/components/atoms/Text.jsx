const Text = ({className,children, isIcon = !1, Icon}) => {
  return (
      <p className={`text-[18px] ${className}`}>{isIcon&&(<span className='inline-flex items-center px-3 text-[#C4C4C4]'>{Icon}</span>)}{children}</p>
  )
}

export default Text