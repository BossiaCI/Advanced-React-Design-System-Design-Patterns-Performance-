import React, { useState } from "react";
import { useImmer } from "use-immer";
import { boardData } from "../board-data";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem 0;
  max-width: 4xl;
  margin: auto;
`;

const Header = styled.div`
  text-align: left;
`;

const HeaderBackground = styled.div`
  background-color: #34d399;
  padding: 1rem 4px 4px 4px;
`;

const BoardTitle = styled.h2`
  font-weight: bold;
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-left: 25px;
  background-color: #d8fff1;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
`;

const ColumnHeader = styled.h3`
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 70vh;
`;

const TaskButton = styled.button`
  border: 1px solid #e2e8f0;
  min-width: 200px;
  height: 50px;
  width: 100%;
  background-color: ${({ isSelected }) => (isSelected ? "#34d399" : "#fff")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: #e2e8f0;
  }
`;

const UpdateTaskHeader = styled.h2`
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const UpdateTaskInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
`;

const TasksBoard = (props) => {
  const [board, setBoard] = useImmer(boardData);
  const [selectedTask, setSelectedTask] = useState();
  const onSelectTask = (columnIdx, taskIdx) => {
    setSelectedTask({
      columnIdx,
      taskIdx,
    });
  };

  const onTaskNameChange = (e) => {
    if (!selectedTask) return;
    const { columnIdx, taskIdx } = selectedTask;

    setBoard((board) => {
      board.columns[columnIdx].tasks[taskIdx].name = e.target.value;
    });

    // setBoard((board) => {
    //   return {
    //     ...board,
    //     columns: [
    //       ...board.columns.map((column, _columnIdx) => {
    //         if (columnIdx !== _columnIdx) {
    //           return column;
    //         }
    //         return {
    //           ...column,
    //           tasks: column.tasks.map((task, _taskIdx) => {
    //             if (taskIdx !== _taskIdx) {
    //               return task;
    //             }
    //             return {
    //               ...task,
    //               name: e.target.value,
    //             };
    //           }),
    //         };
    //       }),
    //     ],
    //   };
    // });
  };

  return (
    <Container>
      <Header>
        <HeaderBackground>
          <BoardTitle>{board.name}</BoardTitle>
        </HeaderBackground>
        <Content>
          {board.columns.map((column, columnIdx) => (
            <ColumnContainer key={columnIdx}>
              <ColumnHeader>{column.name}</ColumnHeader>
              <TaskContainer>
                {column.tasks.map((task, taskIdx) => (
                  <TaskButton
                    key={taskIdx}
                    isSelected={
                      columnIdx === selectedTask?.columnIdx &&
                      taskIdx === selectedTask?.taskIdx
                    }
                    onClick={() => onSelectTask(columnIdx, taskIdx)}
                  >
                    <h4>{task.name}</h4>
                  </TaskButton>
                ))}
              </TaskContainer>
            </ColumnContainer>
          ))}
          <div>
            <UpdateTaskHeader>
              {selectedTask ? "Update task" : "Select a task to update"}
            </UpdateTaskHeader>
            {selectedTask ? (
              <UpdateTaskInput
                type="text"
                value={
                  board.columns[selectedTask.columnIdx].tasks[
                    selectedTask.taskIdx
                  ].name
                }
                onChange={onTaskNameChange}
              />
            ) : null}
          </div>
        </Content>
      </Header>
    </Container>
  );
};
export default TasksBoard;
