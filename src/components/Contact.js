const Contact = () => {
    return (
        <div className="text-center">
            <h1 className="m-4 p-4 text-2xl font-bold">I'm Contact us page</h1>
            <form>
                <input className="p-2 m-2 border border-black" type="text" placeholder="Name"></input>
                <input className="p-2 m-2 border border-black" type="text" placeholder="Description"></input>
                <button className="p-1 m-2 border bg-gray-200 rounded-lg">Submit</button>
            </form>
        </div>
    )
}
export default Contact;