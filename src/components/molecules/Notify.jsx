import { Alert,NoAlert } from '../atoms/Icons'

const Notify = ({isNotify = !1, children}) => {
  return (
    <>
        {isNotify ? (<div className='inline-flex relative'>
        <span className='absolute animate-bounce w-[16px] h-[16px] justify-center items-center  top-[-6px] right-[-12px] bottom-auto font-medium inline-flex bg-red-500 text-white text-[10px] rounded-full z-50 px-3 py-3'>{children}</span>
        <Alert className={`block w-[28px]`}/>
        </div>) : <NoAlert  className={`block w-[28px]`}/> }
    </>
  )
}

export default Notify