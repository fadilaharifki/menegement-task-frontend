export const statusEnum = Object.freeze({
  WAITING_FOR_REVIEW: "Waiting for Review",
  IN_PROGRESS: "In Progress",
  READY_TO_START: "Ready to Start",
  PENDING_DEPLOY: "Pending Deploy",
  DONE: "Done",
  STUCK: "Stuck",
});

export const priorityEnum = Object.freeze({
  CRITICAL: "Critical",
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
  BEST_EFFORT: "Best effort",
});

export const typeEnum = Object.freeze({
  FUTURE: "Future",
  BUG: "Bug",
  OTHER: "Other",
});

export const getStatusClass = (status: string) => {
  switch (status) {
    case "WAITING_FOR_REVIEW":
      return "bg-orange-600";
    case "IN_PROGRESS":
      return "bg-yellow-600";
    case "READY_TO_START":
      return "bg-green-600";
    case "PENDING_DEPLOY":
      return "bg-blue-600";
    case "DONE":
      return "bg-gray-600";
    case "STUCK":
      return "bg-red-600";
    default:
      return "bg-zinc-800";
  }
};

export const getPriorityClass = (priority: string) => {
  switch (priority) {
    case "CRITICAL":
      return "bg-red-700";
    case "HIGH":
      return "bg-orange-600";
    case "MEDIUM":
      return "bg-yellow-500";
    case "LOW":
      return "bg-green-500";
    case "BEST_EFFORT":
      return "bg-slate-400";
    default:
      return "bg-zinc-800";
  }
};

export const getTypeClass = (type: string) => {
  switch (type) {
    case "FUTURE":
      return "bg-purple-700";
    case "BUG":
      return "bg-red-700";
    case "OTHER":
      return "bg-blue-700";
    default:
      return "bg-zinc-800";
  }
};
