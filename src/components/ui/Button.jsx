import React from 'react'


function Button({children, onClick, className, disabled}) {

  return (
    <button disabled={disabled} onClick={onClick} className={className ? `[z-index:1] border-[1px] border-[solid] p-[5px] relative cursor-pointer [transition:color_ease-in-out_0.3s] font-bold font-mina hover:text-[white] before:content-[''] before:absolute before:bottom-[0] before:left-[0] before:w-full before:h-[0] before:[transition:height_ease-in-out_0.3s] hover:before:h-full before:[z-index:-1] ${className}` : `[z-index:1] border-[1px] border-[solid] p-[5px] relative cursor-pointer [transition:color_ease-in-out_0.3s] font-bold font-mina hover:text-[white] before:content-[''] before:absolute before:bottom-[0] before:left-[0] before:w-full before:h-[0] before:[transition:height_ease-in-out_0.3s] hover:before:h-full before:[z-index:-1] border-edit-blue before:bg-edit-blue text-edit-blue`}>
    {children}
    </button>
  )
}

export default Button