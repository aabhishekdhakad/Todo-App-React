function TodoItem2() {
    let todoName = 'Buy Pulse'
    let todoDate = '30/12/2023'
    return(
        <div class="container ">


        <div class="row kg-row">
          <div class="col-6">
            {todoName}
          </div>
          <div class="col-4">
            {todoDate}
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger Kg-button">Delete</button>
          </div>
        </div>
        </div>

    )
}

export default TodoItem2