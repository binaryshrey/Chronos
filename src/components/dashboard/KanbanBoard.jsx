import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import '../../styles/index.css';
import { UserAuth } from '../../hooks/AuthContext';
import { queryTasks } from '../../utils/utils';

const KanbanBoard = () => {
  const { googleSignIn, user } = UserAuth();

  const storedTasks = localStorage.getItem('tasks');
  const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];

  const [taskData, setTaskData] = React.useState(initialTasks);

  const getTasks = async () => {
    console.log(user);
    let allTasks = await queryTasks(user);
    if (allTasks === undefined) {
      setTaskData(initialTasks);
    } else {
      setTaskData(allTasks);
    }
  };

  React.useEffect(() => {
    getTasks();
  }, []);

  React.useEffect(() => {
    // Function to remove auto-generated license-warning div
    const removeAutoGeneratedDiv = () => {
      const autoGeneratedDiv = document.querySelector('div[style*="position: fixed;"][style*="top: 10px;"][style*="left: 10px;"]');
      if (autoGeneratedDiv) {
        autoGeneratedDiv.remove();
      }
    };
    removeAutoGeneratedDiv();
    const observer = new MutationObserver(() => {
      removeAutoGeneratedDiv();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    // Function to remove auto-generated license-warning div
    const removeAutoGeneratedDiv = () => {
      const autoGeneratedDiv = document.querySelector('div[style*="position: fixed;"][style*="width: 100%;"][style*="height: 100%;"]');
      if (autoGeneratedDiv) {
        autoGeneratedDiv.remove();
      }
    };
    removeAutoGeneratedDiv();
    const observer = new MutationObserver(() => {
      removeAutoGeneratedDiv();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const dataSetChanged = (change) => {
    if (change.requestType === 'cardChanged') {
      const updatedTasks = taskData.map((task) => {
        if (task.RankId === change.changedRecords.RankId) {
          return { ...task, ...change.data };
        }
        return task;
      });
      console.log(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTaskData(updatedTasks);
    }
  };

  return (
    <div>
      <div className="App">
        <KanbanComponent id="kanban" keyField="Status" enablePersistence={true} dataSource={taskData} dataSourceChanged={dataSetChanged} cardSettings={{ contentField: 'Summary', headerField: 'Id' }}>
          <ColumnsDirective>
            <ColumnDirective headerText="To Do" keyField="Open" />
            <ColumnDirective headerText="In Progress" keyField="InProgress" />
            <ColumnDirective headerText="In Review" keyField="InReview" />
            <ColumnDirective headerText="Done" keyField="Close" />
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  );
};

export default KanbanBoard;
