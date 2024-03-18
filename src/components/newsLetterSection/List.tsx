
interface ListProps {
    linksArray: string[]
}
const List = ({ linksArray }: ListProps
) => {
    return (
        <ul className='col-span-1 space-y-3 text-gray-600'>
            {linksArray.map((link: string, index: number) => (
                <li key={link} className={`  ${index === 0 ? "text-white font-semibold" : ""} text-[1rem] cursor-pointer `}>{link}</li>
            ))}
        </ul>
    )
}

export default List
