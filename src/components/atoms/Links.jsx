import { Link } from 'react-router-dom'
const Links = ({className,children, href, isIcon = false, Icon}) => {
    return (
        <Link to={href} className={`${className} text-[24px] no-underline`}>
            {children}
            {isIcon && <span className={`w-[12px] h-[12px] ${className}`}>{ Icon}</span>}
        </Link>
  )
}

export default Links