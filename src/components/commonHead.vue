<template>
  <div class="todo-container">
    <div class="todo-header">
      <input type="text" v-model.trim="todoInput" class="todo-input" />
      <button class="add" @click="addTodo">增加</button>
    </div>
    <div class="todo-lists">
      <div class="todo-item" v-if="todos.length === 0">暂无待办事项</div>
      <TransitionGroup name="ani">
        <div
          :class="[
            'todo-item',
            {
              'todo-done': todo.done,
              'todo-undone': !todo.done,
            },
          ]"
          v-for="(todo, index) in todos"
          :key="index"
        >
          <span>
            {{ todo.content }}
            ---->
            {{ index }}
          </span>
          <div class="actions">
            <button @click="delTodo(index)">删除待办事项</button>
            <input type="checkbox" v-model="todo.done" />
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoInput: "",
      todos: [
        {
          content: "明天记得带伞",
          done: false,
        },
        {
          content: "内容2",
          done: true,
        },
        {
          content: "内容3",
          done: false,
        },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.todoInput === "") {
        return false;
      }
      this.todos.push({
        content: this.todoInput,
        done: false,
      });
      this.todoInput = "";
    },
    delTodo(index) {
      if (confirm("确定删除吗")) {
        this.todos.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.todo-container {
  max-width: 600px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
  margin: 20px auto;
}
.todo-header {
  height: 80px;
  display: flex;
  align-items: center;
}
.todo-input {
  flex: 1;
  height: 60px;
  border-radius: 10px;
}
.todo-lists {
  margin-top: 30px;
}
.todo-item {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #333;
}
.actions {
  float: right;
}
.todo-done {
  text-decoration: line-through;
  background-color: #beb9b9;
}
.todo-undone {
  background-color: #2bd689;
}

.ani-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.ani-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.ani-enter-active,
.ani-leave-active {
  transition: all 1s;
}
</style>
