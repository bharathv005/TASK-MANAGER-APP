import { useEffect, useState, useCallback } from "react";
import API from "../api";
import toast from "react-hot-toast";
import { Trash2, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const stages = ["Todo", "In Progress", "Done"];

  const fetchTasks = useCallback(async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/");
        toast.error("Session expired. Please login again.");
      } else {
        toast.error(error.response?.data?.message || "Failed to fetch tasks");
      }
    }
  }, [navigate]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fetchTasks();
  }, [fetchTasks]);

  const createTask = async () => {
    if (!title || title.trim() === "") {
      return toast.error("Please enter a task title");
    }

    try {
      await API.post("/tasks", {
        title: title.trim(),
        stage: "Todo",
      });

      toast.success("Task created successfully");
      setTitle("");
      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || "Task creation failed");
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      toast.success("Task deleted successfully");
      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete task");
    }
  };

  const updateStage = async (id, stage) => {
    try {
      await API.put(`/tasks/${id}`, {
        stage,
      });
      toast.success("Task updated successfully");
      fetchTasks();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update task");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="min-h-screen p-6">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-700">
          Task Manager
        </h1>

        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md mb-8 flex gap-3">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task..."
          className="flex-1 border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={createTask}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-lg"
        >
          Add
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {stages.map((stage) => (

          <div
            key={stage}
            className="bg-white rounded-2xl shadow-md p-5"
          >

            <h2 className="text-2xl font-bold mb-5 text-gray-700">
              {stage}
            </h2>

            {tasks.filter((task) => task.stage === stage).length === 0 && (
              <p className="text-gray-400">
                No tasks here
              </p>
            )}

            {tasks
              .filter((task) => task.stage === stage)
              .map((task) => (

                <div
                  key={task._id}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4 hover:shadow-md transition"
                >

                  <p className="font-medium text-gray-800">
                    {task.title}
                  </p>

                  <div className="flex justify-between items-center mt-4">

                    <select
                      value={task.stage}
                      onChange={(e) =>
                        updateStage(task._id, e.target.value)
                      }
                      className="border rounded-lg p-2"
                    >
                      {stages.map((s) => (
                        <option key={s}>
                          {s}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() => deleteTask(task._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 />
                    </button>

                  </div>

                </div>

              ))}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;