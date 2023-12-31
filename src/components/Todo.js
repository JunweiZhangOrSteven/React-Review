function Todo(props) {
    function deleteHandler(){
        console.log('clicked');
    }
    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <span>A Span</span>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;