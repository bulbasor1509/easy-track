export interface UserType {
    id: string
    avatar: string
    name: string
}

export interface TaskType{
    id: string
    userId: string
    title: string
    summary: string
    dueDate: string
}

export type OutputTaskType = Omit<TaskType, "id" | "userId">
