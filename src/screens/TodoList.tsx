import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { TodoItem } from "../model/Todo";
import { IconButton } from "react-native-paper";

type TodoProps = {
    data: TodoItem[];
    handleDelete: (id: string) => void;
    editItem: (id: TodoItem) => void
}
const TodoList = (props: TodoProps) => {

    const renderItem = ({ item }: { item: TodoItem }) => {
        return <View style={style.container}>
            <Text style={style.text}>{item.title}</Text>
            <Button color={'blue'} title="Edit" onPress={() => props.editItem(item)}></Button>
            <Button color={'blue'} title="delete" onPress={() => props.handleDelete(item.id)}></Button>
            {/* <IconButton icon={"trash-can"}/>        */}
        </View>
    }

    return <FlatList
        renderItem={renderItem}
        data={props.data}
        keyExtractor={(value) => value.title} />
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 16
    },
    text: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'flex-end'
    }
});
export default TodoList;