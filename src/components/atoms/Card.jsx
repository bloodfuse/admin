const Card = ({children, className}) => {
  return (
    <div className={`flex justify-center items-center shadow-sm rounded-md ${className}`}>
        {children}
    </div>
  )
}

export default Card