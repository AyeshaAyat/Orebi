

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1320px] m-auto px-70 pt-2 ${className}`}>{children}</div>
  )
}

export default Container