import { useState } from 'react'


interface Task {
    id: number,
    text: string,
    completed: boolean;
}

export const useTask = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all')

    const addTask = (taskText: string) => {
        const newTask: Task = {
            id: Date.now(),
            text: taskText,
            completed: false,
        }

        setTasks((prevTasks) => [...prevTasks, newTask])
    }



}