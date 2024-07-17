interface CompleteTaskValues {
  title: string;
  description: string;
  assigned_to: string;
  stage: string;
  priority_level: string;
  due_date: string;
  user_id: number;
  assigned_by: string;
  task_id?: number;
}

interface TaskValues {
  title: string;
  description: string;
  assigned_to: string;
  stage: string;
  priority_level: string;
  due_date: string;
}

type Tasks = {
  task_id: number;
  title: string;
  user_id?: number;
  assigned_to: string;
  description: string;
  assigned_by?: string;
  created_at?: string;
  due_date: string;
  priority_level: string;
  stage: string;
};

interface ITasks {
  tasks: {
    tasks: Tasks[];
  };
}

interface MarkAsCompleteValues {
  task_id: number;
  stage: string;
}

interface EditTask {
  editTask: {
    editTask: Tasks;
  };
}

interface EditTaskValues {
  title: string;
  assigned_to: string;
  stage: string;
  priority_level: string;
  due_date: string;
  description: string;
  task_id: number;
}
