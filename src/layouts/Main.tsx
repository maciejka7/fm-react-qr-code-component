import React from 'react'

type Props = {
    children: React.ReactNode
}

const MainLayout = (props: Props) => {

const { children } = props;

  return (
    <div className="shadow w-[320px] h-[497px] bg-white rounded-20 p-4 text-center">
        {children}
    </div>
  )
}

export default MainLayout