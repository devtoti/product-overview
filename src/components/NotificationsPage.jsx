import React, {useEffect, useState} from 'react'
import NewEntry, {addNewEntry, users} from './NotificationsPage-fns'
import '../notifications.css'

function NotificationsPage() {
    const [entries, setEntries] = useState(3)
    const [notifications, setNotifications] = useState(0)
    const [isRead, setIsRead] = useState(false)
    useEffect(() => {
        const notifCount = document.querySelectorAll(".user-notification").length
        console.log(entries)
        console.table([users])
        setNotifications(notifCount)
    },[entries])

    const markAsRead = elem => {
     
    }

    console.log(Array(entries).fill(0))
  return (
    <div className='notifications'>
        <section className='notifications_header'>
            <h1>Notifications</h1>
            <article>{notifications}</article>
            <h6>Mark all as read</h6>
        </section>
        <section className='notifications_body'>
        <div className={isRead ? 'user-notification' : 'user-notification not-read'} onClick={(e) => markAsRead(e)}>
            <img src="notifications/assets/images/avatar-jacob-thompson.webp" alt="" />
            <div>
            <h3>El Patrón</h3>
            <h4>has joined your group</h4>
            <h5>2 days ago</h5>
            </div>
        </div>
        <button onClick={addNewEntry}>generate</button>
        <NewEntry/>
        <p>{Array(entries).fill('aa')}</p>
        {Array(entries).fill(0).map((entry, ix) => {
            return <NewEntry key={ix}/>
        })}
        {/* <div className='user-notification' >
            <img src="notifications\assets\images\avatar-kimberly-smith.webp" alt="" />
            <div>
            <h3>Kimberly Smith</h3>
            <h4>commented on your picture</h4>
            <h5>10 days ago</h5>
            <p><cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure exercitationem dolore beatae soluta nisi blanditiis fugiat amet veniam odio?</cite></p>
            </div>
        </div>
        <div className='user-notification'>
            <img src="notifications\assets\images\avatar-anna-kim.webp" alt="" />
            <div>

            <h3>Anna Kim</h3>
            <h4>left the group</h4>
            <h5>2 weeks ago</h5>
            </div>
        </div> */}
        </section>
    </div>
  )
}

export default NotificationsPage

