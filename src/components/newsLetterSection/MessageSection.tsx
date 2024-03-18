
const MessageSection = () => {
    return (
        <div className=' lg:w-[45%] space-y-6 text-center md:text-left flex flex-col items-center lg:items-start justify-start '>
            <img
                alt='message'
                src='/src/assets/message.png'
                width={72}
                height={72}
            />
            <h1 className='text-[30px] md:text-[60px] leading-[72px] text-center lg:text-left ' >Keep up with the latest</h1>

            <p className='text-[1.25rem]'>
                Join our newsletter to stay up to date on features and releases.
            </p>
        </div>
    )
}

export default MessageSection
