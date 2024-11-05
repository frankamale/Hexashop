type Props = {
    content: string;
}

const Button = ({content}:Props) => {
  return (
    <div className="py-2 px-5 border-4 border-[#F6F6F6] text-[#F6F6F6] font-semibold text-center w-40 hover:bg-[#F6F6F6] hover:opacity-70 hover:text-black transition-colors duration-300 hover:border-[#1E1E1E]">
        <p>{content}</p>
    </div>
  )
}


export default Button