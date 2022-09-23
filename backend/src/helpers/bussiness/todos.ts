import { TodosAccess } from '../dataAccess/todosAccess'
import { TodoItem } from '../../models/TodoItem'
import { CreateTodoRequest } from '../../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../../requests/UpdateTodoRequest'
import { createLogger } from '../../utils/logger'
import * as uuid from 'uuid'
import { AttachmentUtils } from '../attachment/attachmentUtils'

// TODO: Implement businessLogic
const logger = createLogger('bussiness-todo')
const todosAccess = new TodosAccess()
const attachmentUtils = new AttachmentUtils()

export const getTodos = async (userId: string): Promise<TodoItem[]> => {
    return await todosAccess.getTodos(userId);
}

export const createTodo = async (userId: string, todo: CreateTodoRequest): Promise<TodoItem> => {
    logger.log('info', 'Payload: '.concat(JSON.stringify(todo)))
    const todoId = uuid.v4();
    const newTodo: TodoItem = {
        ...todo,
        userId,
        todoId,
        createdAt: new Date().toISOString(),
        done: false
    }
    await todosAccess.createTodo(newTodo);
    return newTodo;
}

export const updateTodo = async (userId: string, todoId: string, updatedTodo: UpdateTodoRequest): Promise<void> => {
    await todosAccess.updateTodo(userId, todoId, updatedTodo)
}

export const deleteTodo = async (userId: string, todoId: string): Promise<void> => {
    await todosAccess.deleteTodo(userId, todoId)
}

export const createAttachmentPresignedUrl = async (userId: string, todoId: string): Promise<string> => {
    const url = await attachmentUtils.generateUploadURL(userId, todoId)
    return url 
}