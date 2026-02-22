const tasks = [
  // To-Do Column
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    title: 'Wireframes',
    description: 'Set up high-fidelity prototypes with conditional logic',
    tag: 'design',
    dueDate: '2024-08-26',
    status: 'todo',
    createdAt: new Date('2024-08-20'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    title: 'Data Entry',
    description: 'Data Entry Cleanup and validation',
    tag: 'operations',
    dueDate: '2024-08-27',
    status: 'todo',
    createdAt: new Date('2024-08-21'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    title: 'Social Media',
    description: 'Social Media Scheduling and posting',
    tag: 'marketing',
    dueDate: '2024-08-28',
    status: 'todo',
    createdAt: new Date('2024-08-22'),
  },

  // In Progress Column
  {
    id: '550e8400-e29b-41d4-a716-446655440004',
    title: 'Graphic Design',
    description: 'Graphic Design Edits and refinements',
    tag: 'creative',
    dueDate: '2024-08-27',
    status: 'in-progress',
    createdAt: new Date('2024-08-19'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    title: 'Presentation',
    description: 'Presentation Slide Design',
    tag: 'development',
    dueDate: '2024-08-30',
    status: 'in-progress',
    createdAt: new Date('2024-08-18'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440006',
    title: 'API Integration',
    description: 'Integrate payment gateway APIs',
    tag: 'backend',
    dueDate: '2024-08-29',
    status: 'in-progress',
    createdAt: new Date('2024-08-17'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440007',
    title: 'Software Installation',
    description: 'Install and configure development tools',
    tag: 'setup',
    dueDate: '2024-08-23',
    status: 'done',
    createdAt: new Date('2024-08-15'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440008',
    title: 'Database Design',
    description: 'Database schema and optimization',
    tag: 'infrastructure',
    dueDate: '2024-08-24',
    status: 'done',
    createdAt: new Date('2024-08-14'),
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440009',
    title: 'Documentation',
    description: 'Complete API documentation',
    tag: 'documentation',
    dueDate: '2024-08-25',
    status: 'done',
    createdAt: new Date('2024-08-13'),
  },
];

const boardColumns = [
  { key: 'todo', title: 'To-Do', status: 'todo' },
  { key: 'in-progress', title: 'In Progress', status: 'in-progress' },
  { key: 'done', title: 'Done', status: 'done' }
];

const getAllTasks = () => {
  return tasks;
}

const getAllTodoTasks = () => {
  return tasks.filter(task => task.status === 'todo');
}

const getAllInProgressTasks = () => {
  return tasks.filter(task => task.status === 'in-progress');
}

const getAllDoneTasks = () => {
  return tasks.filter(task => task.status === 'done');
}

const getBoardColumns = () => {
  return boardColumns;
}

const getOtherStatuses = (status) => {
  return boardColumns.filter(column => column.status !== status);
}

export { getAllDoneTasks, getAllInProgressTasks, getAllTasks, getAllTodoTasks, getBoardColumns, getOtherStatuses, tasks };

