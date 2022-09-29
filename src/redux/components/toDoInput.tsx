import { IconAlertCircle, IconAperture } from "@tabler/icons";
import { Alert, Button, Group } from "@mantine/core";
import { ChangeEvent, useState } from "react";
import { TextInput } from "@mantine/core";

interface ToDoInputProps {
  addToDo(toDo: string): void;
}
export const ToDoInput: React.FC<ToDoInputProps> = ({ addToDo }) => {
  const [newToDo, setNewToDo] = useState<string>("");

  const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(event.target.value);
  };

  const onAddToDoClick = () => {
    addToDo(newToDo);
    setNewToDo("");
  };

  return (
    <div>
      <Group position="center">
        <TextInput
          radius="md"
          size="lg"
          onChange={updateTodo}
          label="Describe what will you need"
          style={{ width: 500 }}
          value={newToDo}
        />
        <Button color="green" onClick={onAddToDoClick}>
          Add
        </Button>
      </Group>
    </div>
  );
};
