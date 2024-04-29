const Inbox = ({name, date, subject, body}) => {

return (
    <div>
        <div className="flex">
            <h3>{name}</h3>
            <h3>{date}</h3>
        </div>
        <p>{subject}</p>
        <p>{body}</p>

    </div>
)    
}

export default Inbox