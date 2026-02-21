import { useContext } from 'react';
import { TaskModalContext } from '../contexts';

function useTaskModalContext() {
  const context = useContext(TaskModalContext);
  if (!context) {
    throw new Error('useTaskModalContext must be used within a TaskModalProvider');
  }
  return context;
};
export default useTaskModalContext;