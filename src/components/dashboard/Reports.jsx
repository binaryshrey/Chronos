import React from 'react';
import { Grid, Box, Card, Flex, Avatar, Text } from '@radix-ui/themes';
import AnalyticsChart from '../AnalyticsChart';

const Reports = () => {
  const [taskData, setTaskData] = React.useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
  const [open, setOpen] = React.useState(0);
  const [inProgress, setInProgress] = React.useState(0);
  const [inReview, setInReview] = React.useState(0);
  const [done, setDone] = React.useState(0);
  const [totalTasks, setTotalTasks] = React.useState(0);

  React.useEffect(() => {
    setOpen(taskData.filter((task) => task.Status === 'Open').length);
    setInProgress(taskData.filter((task) => task.Status === 'InProgress').length);
    setInReview(taskData.filter((task) => task.Status === 'InReview').length);
    setDone(taskData.filter((task) => task.Status === 'Close').length);
    setTotalTasks(taskData.length);
  }, [open, inProgress, inReview, done, totalTasks]);

  return (
    <div>
      <p className="text-2xl font-semibold">Overview</p>
      <div className="flex justify-between flex-wrap mt-8">
        <Box className="m-1">
          <Card size="1">
            <Flex gap="3" align="center">
              <Avatar size="3" radius="full" fallback="O" color="indigo" />
              <Box>
                <Text as="div" size="2" color="gray">
                  {open}/{totalTasks}
                </Text>
                <Text as="div" size="2" weight="bold">
                  Open Tasks
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Box className="m-1">
          <Card size="1">
            <Flex gap="3" align="center">
              <Avatar size="3" radius="full" fallback="P" color="indigo" />
              <Box>
                <Text as="div" size="2" color="gray">
                  {inProgress}/{totalTasks}
                </Text>
                <Text as="div" size="2" weight="bold">
                  In-Progress Tasks
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Box className="m-1">
          <Card size="1">
            <Flex gap="3" align="center">
              <Avatar size="3" radius="full" fallback="R" color="indigo" />
              <Box>
                <Text as="div" size="2" color="gray">
                  {inReview}/{totalTasks}
                </Text>
                <Text as="div" size="2" weight="bold">
                  In-Review Tasks
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Box className="m-1">
          <Card size="1">
            <Flex gap="3" align="center">
              <Avatar size="3" radius="full" fallback="C" color="indigo" />
              <Box>
                <Text as="div" size="2" color="gray">
                  {done}/{totalTasks}
                </Text>
                <Text as="div" size="2" weight="bold">
                  Completed Tasks
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
      </div>
      <div className="flex justify-between flex-wrap mt-8">
        <Box className="m-1">
          <Card size="1">
            <AnalyticsChart open={open} inProgress={inProgress} inReview={inReview} done={done} type="pie" />
          </Card>
        </Box>
        <Box className="m-1">
          <Card size="1">
            <AnalyticsChart open={open} inProgress={inProgress} inReview={inReview} done={done} type="bar" />
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default Reports;
