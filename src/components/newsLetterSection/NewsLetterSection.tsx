import List from "./List";
import Form from "./Form"
import MessageSection from "./MessageSection"

const LIST1 = [" IQTEST", "Quiz", "Results", "Pricing"];
const LIST2 = ["Support", "Help", "FAQ", "Contact"];
const List3 = ["Legal", "Privacy Policy", "Terms of Service", "Cookies Policy"];

const NewsLetterSection = () => {
    return (
        <div className="px-4 pt-8 mb-8 lg:px-16">
            <div className="bg-[#090808] text-white min-h-[700px] rounded-3xl p-4 md:p-10 lg:p-20 container m-auto flex flex-col ">
                
                {/* UPPER SECTION */}
                <section className="flex flex-col items-center justify-between w-full lg:flex-row gap-y-10">
                    <MessageSection />
                    <div className="flex flex-col items-center justify-start">
                        <Form />
                    </div>
                </section>
                
                {/* DIVIDER */}
                <div className="border-b-[1px] border-gray-400 my-16 " />
                
                {/* LOWER SECTION */}
                <section className="flex flex-col items-start justify-between flex-1 gap-4 p-5 md:flex-row ">
                    <div className="flex-1">
                        <div className="flex items-center justify-start gap-2 text-[30px] ">
                            <img src="/src/assets/logo2.png" alt="logo2" width={36} height={36} />
                            <span>IQTEST.ai</span>
                        </div>
                        <p
                            className="text-gray-600 text-[20px] mt-2">
                            Test your IQ in a very easy and <br />
                            simple step not complex.
                        </p>
                    </div>

                    {/* GRID / Lists */}
                    <div className="grid flex-1 w-full h-full grid-cols-3 ">
                        <List linksArray={LIST1} />
                        <List linksArray={LIST2} />
                        <List linksArray={List3} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NewsLetterSection
