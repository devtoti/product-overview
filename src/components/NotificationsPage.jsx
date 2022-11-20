import React, { useEffect, useState, useRef } from 'react'
import NewEntry, { users } from './NotificationsPage-fns'
import '../notifications.css'

function NotificationsPage() {
    const [entries, setEntries] = useState(0)
    const [notifications, setNotifications] = useState(0)
    const [allRead, setAllRead] = useState(false)


    const addNewEntry = () => {
        setEntries(prev => ++prev)
    }
    function handleNotifications(num) {
        setNotifications(num)
    }
    function markAllRead() {
        setAllRead(prev => !prev)
        if (!allRead) {
            document.querySelectorAll(".user-notification").forEach(elem => {
                elem.classList.remove('not-read')
            })
        }
        else {
            document.querySelectorAll(".user-notification").forEach(elem => {
                elem.classList.add('not-read')

            })
        }
    }

    return (
        <div className='notifications'>
            <section className='notifications_header'>
                <h1>Notifications</h1>
                <article>{notifications}</article>
                <h6 onClick={markAllRead}>
                    {allRead ? "Mark all as unread" : "Mark all as read"}
                </h6>
            </section>
            <section className='notifications_body'>

                <NewEntry />
                {Array(entries).fill(0).map((entry, ix) => {
                    return <NewEntry key={ix} entries={entries}
                    // handleNotifications={num => handleNotifications(num)}
                    />
                })}
            </section>
            <section className='notifications_footer'>

                <button onClick={addNewEntry}>+ New Entry</button>

            </section>
        </div>
    )
}

export default NotificationsPage

