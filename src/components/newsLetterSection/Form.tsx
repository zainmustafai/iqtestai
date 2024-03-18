

const Form = () => {
    return (
        <div className='w-full h-full space-y-8 text-center'>
            <h2 className='text-[1.5rem] font-semibold'>
                Stay up to date
            </h2>

            <form className='flex flex-col items-center w-full gap-6 sm:items-start sm:flex-row '>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className='px-8 py-4 rounded-full sm:w-[300px] focus:outline-1 outline-blue-500'
                />
                <button
                    type="submit"
                    className='px-2 py-1 w-[150px] h-[56px] rounded-full bg-blue-600 text-[24px] hover:bg-[#E2E8F0] transition-all duration-200'>
                    Subscribe
                </button>
            </form>
            <p className="text-[20px]">By subscribing you agree with our Privacy Policy</p>
        </div>
    )
}

export default Form
