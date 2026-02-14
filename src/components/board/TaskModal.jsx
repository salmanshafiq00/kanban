
import { useState } from 'react';
import { getAllTags } from '../../utils/tag';
import {
  FormDateElement,
  FormInputElement,
  FormSelectElement
} from '../common/form/index';

function TaskModal({ task, setTask, onClose }) {

  const [errors, setErrors] = useState({});
  const isEditing = Object.is(task, null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts editing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (name === 'description') {
      return;
    }
    if (!task[name]?.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      }));
    }
  };


  const validateForm = () => {
    const newErrors = {};

    if (!task.title.trim()) {
      newErrors.title = 'Task title is required';
    }

    if (!task.status) {
      newErrors.status = 'Status is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
  };


  const statusOptions = [
    { value: 'todo', label: 'To-do' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' },
  ];

  const tagOptions = getAllTags().map((tag) => ({
    value: tag.value,
    label: tag.label,
  }));

  return (
    <div className="task-modal fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-3xl">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-8">
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h1 className="text-3xl font-bold text-gray-900">
              {isEditing ? 'Edit Task' : 'Add Task'}
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              {isEditing
                ? 'Update the task details below.'
                : 'Create a new card for your board.'}
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <FormInputElement
                id="title"
                label="Task Title"
                name="title"
                type="text"
                value={task.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Wireframes"
                required={true}
                error={errors.title}
              />

              <FormInputElement
                id="description"
                label="Task Description"
                name="description"
                type="text"
                value={task.description}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Add context or acceptance criteria"
                error={errors.description}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormSelectElement
                id="tag"
                label="Tag"
                name="tag"
                value={task.tag}
                onChange={handleChange}
                onBlur={handleBlur}
                options={tagOptions}
                placeholder="Select a tag"
                required={true}
                error={errors.tag}
              />

              <FormDateElement
                id="dueDate"
                label="Due Date"
                name="dueDate"
                type="date"
                value={task.dueDate}
                onChange={handleChange}
                onBlur={handleBlur}
                required={true}
                error={errors.dueDate}
              />

              <FormSelectElement
                id="status"
                label="Status"
                name="status"
                value={task.status}
                onChange={handleChange}
                onBlur={handleBlur}
                options={statusOptions}
                placeholder="Select status"
                required={true}
                error={errors.status}
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setErrors({});
                  onClose();
                }}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors cursor-pointer"
              >
                {isEditing ? 'Update Task' : 'Add Task'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;