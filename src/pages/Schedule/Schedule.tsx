import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToDo } from "../../redux/actions/addToDo";
import { Group } from "@mantine/core";
import { ToDoInput } from "../../redux/components/toDoInput";
import { ToDoList } from "../../redux/components/toDoList";

export const Schedule = () => {
  const dispatch = useDispatch();
  const onAddToDo = (toDo: string) => {
    dispatch(addToDo(toDo));
  };

  return (
    <div>
      <h2>Your Appointments</h2>
      <ToDoInput addToDo={onAddToDo}></ToDoInput>
      <ToDoList></ToDoList>
    </div>
  );
};
