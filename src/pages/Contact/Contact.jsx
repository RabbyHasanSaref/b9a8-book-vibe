
const Contact = () => {
    return (
        <div className="container mx-auto lg:px-14 px-5 ">
            <div className="h-[100px] flex justify-center items-center my-10 bg-[#f3f3f3] rounded-lg">
                <h2 className="text-center text-2xl font-bold">Contact</h2>
            </div>
            <div className="grid bg-[#f3f3f3] my-10 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Lets talk!</h2>
                        <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="text-sm font-bold">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 border-2 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label className="text-sm font-bold">Email</label>
                        <input id="email" type="email" className="w-full p-3 border-2 rounded dark:bg-gray-100" />
                    </div>
                    <div>
                        <label className="text-sm font-bold">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 border-2 rounded dark:bg-gray-100"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase bg-primary text-white rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
                </form>
            </div>
        </div>

    );
};

export default Contact;