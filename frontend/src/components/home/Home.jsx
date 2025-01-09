import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="to-be-done-tasks">
                <ul>
                    <li>Time</li>
                    <li>Task</li>
                    <li>status</li>
                </ul>
                <ul>
                    <li>6:00 - 7:00</li>
                    <li>Wake up get Ready</li>
                    <li><button>Done</button></li>
                </ul>
            </div>
            <div className="done-tasks">

            </div>
        </div>
    )
}
export default Home