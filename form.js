function Form(){
    const handleSubmit = (event)=>{
        event.preventDefault();
        event.target.reset();
    };
    return(
        <form className="form" onsubmit={handleSubmit}>
            <label htmlFor="todo">
            <input type="text" name="todo" id="todo"
            placeholder="Write your new task" />
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
                <svg>
                    <path d="" />
                
                </svg>
            </button>
        </form>
    )
}

export default Form;