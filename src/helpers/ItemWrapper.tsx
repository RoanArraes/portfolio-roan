type Props = {
  children: React.ReactNode;
  className?: string
  display?: string;
  maxWidth?: string
  minWidth?: string
}

const ItemWrapper = ({
  children, 
  className
}: Props) => {
  return(
    <div 
      className={className}
    >
      {children}
    </div>
  )
}

export default ItemWrapper;