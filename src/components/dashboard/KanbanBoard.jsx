import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import '../../styles/index.css';
import { UserAuth } from '../../hooks/AuthContext';
import { queryTasks } from '../../utils/utils';

const KanbanBoard = () => {
  const { googleSignIn, user } = UserAuth();
  const [taskData, setTaskData] = React.useState([]);

  const getTasks = async () => {
    let allTasks = await queryTasks(user);
    setTaskData(allTasks);
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

  return (
    <div>
      <div className="App">
        <KanbanComponent id="kanban" keyField="Status" dataSource={taskData} cardSettings={{ contentField: 'Summary', headerField: 'Id' }}>
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
