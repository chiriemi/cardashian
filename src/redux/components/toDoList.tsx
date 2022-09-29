import {
  Checkbox,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Key } from "react";
import { deleteToDo } from "../actions/deleteToDo";
import { ToDosState } from "../reducers/toDosReducer";
import { IconTrash } from "@tabler/icons";
import { ActionIcon, Container, Group, Paper, Space } from "@mantine/core";
import { List } from "@mantine/core";

export const ToDoList = () => {
  const toDos = useSelector((state: ToDosState) => state.toDos);
  const dispatch = useDispatch();
  const onDeleteToDo = (toDo: string) => {
    dispatch(deleteToDo(toDo));
  };

  return (
    <Paper>
      {toDos.map((value: string) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <List size="xl" withPadding spacing="xl">
            <Group>
              <List.Item key={value}>{value}</List.Item>
              <ActionIcon onClick={() => onDeleteToDo(value)} size="lg">
                <IconTrash size={26} />
              </ActionIcon>
            </Group>
            <Space h="md" />
          </List>
        );
      })}
    </Paper>
  );
};
