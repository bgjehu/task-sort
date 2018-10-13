const getTasks = function () {
    return JSON.parse(localStorage.getItem('TASKS'));
}

const selectVectorOption = function (taskId, vectorName, optionValue) {
    const task = app.tasks.find(function (task) {
        return task.id === taskId;
    });
    const vector = app.config.vectors.find(function (vector) {
        return vector.name === vectorName;
    });
    const option = vector.options.find(function (option) {
        return option.value === parseInt(optionValue);
    });
    task[vectorName] = option.name;
}

const taskScore = function (task) {
    return app.config.vectors.reduce(function (sum, vector) {
        const option = vector.options.find(function (option) {
            return task[vector.name] === option.name
        });
        return sum + option.value * vector.weight;
    }, 0).toFixed(2);
}

const sortedTasks = function (tasks) {
    return tasks.sort(function (a, b) {
        return taskScore(b) - taskScore(a);
    });
}

const deleteTask = function (taskId) {
    app.tasks = app.tasks.filter(function (task) {
        return task.id !== taskId;
    });
}

const addTask = function () {
    const task = {
        id: Math.max(...app.tasks.map(function(task){
            return task.id
        })) + 1,
        title: null
    };
    app.config.vectors.forEach(function(vector){
        task[vector.name] = vector.options[0].name;
    });
    app.tasks.push(task);
}

const app = new Vue({
    el: '#app',
    data: {
        config: {},
        tasks: [],
    },
    watch: {
        tasks: {
            handler: function (tasks) {
                localStorage.setItem('TASKS', JSON.stringify(tasks));
            },
            deep: true
        }
    },
    methods: {
        taskScore,
        sortedTasks,
        deleteTask,
        addTask
    }
});

app.tasks = getTasks();
app.config = config;