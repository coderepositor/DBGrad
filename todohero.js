function TODOHero({todos_completed,total_todos}){
    const title = "Task Done"
    return (
        <section>
            <div>
                <p>{title}</p>
                {/* <p>Keep it up</p> */}
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    )
}

export default TODOHero;