import React from 'react'

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`px-4 md:px-6 lg:px-8 py-2 md:py-4 lg:py-6 ${className || ''}`}>
      {children}
    </div>
  )
}

export default Container