import { StyleSheet, TextInput, View, Button } from "react-native";
import TodoList from "./TodoList";
import { TodoItem } from "../model/Todo";
import { useState } from "react";

const HomeScreen = () => {
    const [task, setTask] = useState('');
    const [todoData, setTodoData] = useState<TodoItem[]>([]);
    const [editedItem, setEditedItem] = useState<TodoItem | null>(null);

    const onSubmit = () => {
        if (task) {
            setTodoData([...todoData, { title: task, id: Date.now().toString(), completed: false }]);
            setTask('');
        }
    }

    const handleDelete = (id: string) => {
        if (todoData && todoData.length > 0) {
            const data = todoData.filter((item) => item.id !== id);
            setTodoData(data);
        }
    };
    const editItem = (item: TodoItem) => {
        setEditedItem(item);
        setTask(item.title);
    };

    const handleUpdateItem = () => {
        const updateTodo = todoData.map((item) => {
            return { ...item, title: task };
        });
        setTodoData(updateTodo);
        setEditedItem(null);
        setTask('');
    }

    return <View>
        <TextInput style={styles.input} placeholder={'Type here...'} value={task} onChangeText={(value) => setTask(value)} onSubmitEditing={onSubmit} />
        {!editedItem ? <Button title={"Add"} onPress={onSubmit} /> : <Button title={"Update"} onPress={handleUpdateItem} />}
        <TodoList data={todoData} handleDelete={handleDelete} editItem={editItem} />
    </View>
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 16,
        borderWidth: 5,
        borderColor: 'gray',
    }
});
export default HomeScreen;