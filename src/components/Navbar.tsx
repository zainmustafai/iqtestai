
import logo from '/src/assets/logo.jpg';
type NavbarProps = {
    navItems: {
        title: string;
        url: string;
    }[];
}

const Languages = [
    {
        name: "English",
        value: "en"
    },
    {
        name: "French",
        value: "fr"
    },
    {
        name: "Spanish",
        value: "es"
    }
]


const Navbar = ({ navItems,
}: NavbarProps

) => {
    return (
        <nav className="sticky top-0 flex items-center justify-between w-full px-8 py-8 bg-white ">
            <img
                src={logo}
                alt="logo"
            />
            {/* NAV ITEMS */}
            <div className="nav-items hidden md:flex container gap-8 md:gap-12 lg:gap-20 flex-1 justify-center text-[16px]">
                {navItems.map((item) => (
                    <a
                        key={item.title}
                        href={item.url}
                    >
                        {item.title}
                    </a>
                ))}
            </div>

            {/* BUTTONS */}
            <section className="flex items-center gap-4">
                <select className="bg-[#E3E9F1] rounded-md px-4 py-2">
                    {Languages.map((lang) => (
                        <option
                            key={lang.value}
                            value={lang.value}
                        >
                            {lang.name}
                        </option>
                    ))}
                </select>
                <button type="button" className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-[#E2E8F0] transition-all duration-200">Login</button>
            </section>
        </nav>
    )
}

export default Navbar
