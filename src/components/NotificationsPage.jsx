import React, { useEffect, useState, useRef, useReducer, useContext } from 'react'
import NewEntry, { users } from './NotificationsPage-fns'
import '../notifications.css'
import { createContext } from 'react'
const TasksDispatchContext = createContext(null)

function NotificationsPage() {
    const [entryId, setEntryID] = useState(1)
    const [notifications, setNotifications] = useState(0)
    const [allRead, setAllRead] = useState(false)
    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                setAllRead(false)
                setEntryID(prev => ++prev)
                const newParam = users.generateEntry()
                return [...state, { ...newParam, id: entryId }];

            case 'delete':
                if (action.deleteAll) {
                    setAllRead(false)   
                    return []
                }
                return state.filter(st => st.id !== action.id);

            case 'read':
                setAllRead(false)
                const newState = state.map((post, ix) => {
                    if (post.id === action.id) {
                        if (post.read) return ({ ...post, read: false })
                        else return ({ ...post, read: true })
                    }
                    return post
                })
                return newState;
            case 'readAll':
                if (action.readAll)
                    return state.map(post => {
                        post.read = true
                        return post
                    })
                return state.map(post => {
                    post.read = false
                    return post
                })

            default:
                return state;
        }
    }

    const [tasks, dispatch] = useReducer(reducer, [users.generateEntry()])

    useEffect(() => {
        if (allRead) {
            setNotifications(0)
            return
        }
        let count = tasks.reduce((total, notification) => {
            if (!notification.read) return total + 1
            return total
        }, 0)
        setNotifications(count)
    }, [tasks, allRead])

    const addNewEntry = () => {
        dispatch({
            type: 'add',
            extra: 'extra-param'
        })
    }

    function markAllRead() {
        setAllRead(prev => !prev)
        if (!allRead) {
            return dispatch({
                type: 'readAll',
                readAll: true
            })
        }
        else {
            return dispatch({
                type: 'readAll',
                readAll: false
            })
        }
    }


    return (
        <TasksDispatchContext.Provider value={dispatch}>
            <div className='notifications'>
                <section className='notifications_header'>
                    <h1>Notifications</h1>
                    <article>{notifications}</article>
                        {allRead ? 
                        <>
                        <h5 onClick={() => dispatch({type: 'delete', deleteAll: true})}>Clear</h5>
                         <h6 onClick={markAllRead}>
                         Mark all as unread 
                         </h6>
                        </>
                         : 
                         <h6 onClick={markAllRead}>
                         Mark all as read 
                         </h6>
                         }
                   
                </section>
                <section className='notifications_body'>

                    {tasks.map((post, id) => {
                        return <NewEntry
                            key={id}
                            entry={post} />
                    })}
                </section>
                <section className='notifications_footer'>

                    <button onClick={addNewEntry}>+ New Entry</button>

                </section>
            </div>
        </TasksDispatchContext.Provider>
    )

}

export default NotificationsPage

export function useDispatch() {
    return useContext(TasksDispatchContext)
}