const Inbox = ({name, date, subject, body}) => {

return (
    <div className="border-solid border-2 border-white bg-gray-600 text-white p-2">
        <div className="flex justify-between text-sm">
            <h3>{name}</h3>
            <h3>{date}</h3>
        </div>
        <p className="text-xs">{subject}</p>
        <p className="text-xs">{body}</p>

    </div>
)    
}

export default Inbox