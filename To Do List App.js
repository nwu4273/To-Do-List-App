// Version 8: Refactoring

const todo = {
  todo: [],
  displayTodo: function() {
    if (this.todo.length === 0) {
      console.log("You have finished everything on your To Do List!")
    } else {
      console.log("My To do list:")
      for (let i = 0; i < this.todo.length; i++) {
        if (this.todo[i].completed === true) {
          console.log("(x)", this.todo[i].todoText)
        } else {
          console.log("()", this.todo[i].todoText)
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todo.push({
      todoText: todoText,
      completed: false
    })
    this.displayTodo()
  },
  changeTodo: function(position, todoText) {
    this.todo[position].todoText = todoText
    this.displayTodo()
  },
  deleteTodo: function(position) {
    this.todo.splice(position, 1)
    this.displayTodo()
  },
  toggleCompleted: function(position) {
    const todo = this.todo[position]
    todo.completed = !todo.completed
    this.displayTodo()
  },
  toggleAll: function() {
    const totalTodo = this.todo.length
    let completedTodo = 0
    // Count number of to dos that are completed
    for (let i = 0; i < this.todo.length; i++) {
      if (this.todo[i].completed === true) {
        completedTodo++
      }
    }
    // Case 1: If all items are finished(true), then uncheck all items(make every item false)
    if (completedTodo === totalTodo) {
      for (let i = 0; i < this.todo.length; i++) {
        this.todo[i].completed = false
      }
      // Case 2: Otherwise, check the rest of the items (make everything true)
    } else {
      for (let i = 0; i < this.todo.length; i++) {
        this.todo[i].completed = true
      }
    }

    this.displayTodo()
  }
}

// //Access to display to do button

// const displayTodoButton = document.getElementById("displayTodoButton")

// // It should run displayTodo method when user clicks display my to do list button

// displayTodoButton.addEventListener("click", function() {
//   todo.displayTodo()
// })

// //Access to toggle all/select all button and run toggleAll method when user clicks
// const toggleAllButton = document.getElementById("toggleAllButton")

// toggleAllButton.addEventListener("click", function() {
//   todo.toggleAll()
// })

// new object handlers whose methods will handle Events in html
const handlers = {
  displayTodo: function() {
    todo.displayTodo()
  },
  addTodo: function () {
    const addTodoTextInput = document.getElementById('addTodoTextInput')
    todo.addTodo(addTodoTextInput.value)
    // we want input text box to clear after adding an item so it is blank and ready to accept next item
    addTodoTextInput.value = ''
  },
  changeTodo: function() {
    const changeTodoPositionInput = document.getElementById('changeTodoPositionInput')
    const changeTodoTextInput = document.getElementById('changeTodoTextInput')
    todo.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
    changeTodoPositionInput.value = ''
    changeTodoTextInput.value = ''
  },
  deleteTodo: function() {
    const deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput')
    todo.deleteTodo(deleteTodoPositionInput.valueAsNumber)
    deleteTodoPositionInput.value = ''
  },
  toggleCompleted: function() {
    const toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput")
    todo.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
    toggleCompletedPositionInput.value = ''
  },
    toggleAll: function() {
    todo.toggleAll()
  }
}
