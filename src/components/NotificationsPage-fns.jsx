import React, { useEffect, useState, useRef, useContext } from 'react'
import { useDispatch } from './NotificationsPage'

export default function NewEntry({ entry, children }) {
    const [isRead, setIsRead] = useState(false)
    const ref = useRef()
    const dispatch = useDispatch()
    function markAsRead() {
        dispatch({
            type: 'read',
            id: entry.id,
            entry: entry
        })
       
    }


    return (
        <div ref={ref} className={entry.read ? 'user-notification' : 'user-notification not-read'} onClick={markAsRead}>

            <img src={entry.user.avatar} alt="" />
            <div>
                <h3>{entry.user.name}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 close-icon"
                onClick={() => {
                    dispatch({
                        type: 'delete',
                        id: entry.id
                    })
                }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h4>{entry.action}</h4>
                <h5></h5>
            </div>
        </div>
    )
}
{/* <p><cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure exercitationem dolore beatae soluta nisi blanditiis fugiat amet veniam odio?</cite></p> */ }



export const users = {
    names: [
        {
            name: 'Kimberly Smith',
            avatar: "notifications/assets/images/avatar-kimberly-smith.webp"
        },
        {
            name: 'Nathan Peterson',
            avatar: "notifications/assets/images/avatar-nathan-peterson.webp",

        },
        {
            name: 'Jacob Thompson',
            avatar: "notifications/assets/images/avatar-jacob-thompson.webp"
        },
        {
            name: 'Angela Gray',
            avatar: "notifications/assets/images/avatar-angela-gray.webp"
        },
        {
            name: 'Mark Webber',
            avatar: "notifications/assets/images/avatar-mark-webber.webp"
        },
        {
            name: 'Mark Webber',
            avatar: "notifications/assets/images/avatar-mark-webber.webp"
        },
        {
            name: 'El Patrón',
            avatar: "notifications/assets/images/avatar-rizky-hasanuddin.webp"
        }
    ],
    actions: [
        'reacted to your recent post',
        'followed you',
        'has joined the group',
        'sent you a private message',
        'commented on your picture',
        'left the group'
    ],

    generateEntry: function () {
        function random(key) {
            const ix = Math.floor(Math.random() * key.length)
            return key[ix]
        };

        const user = random(this.names)
        const action = random(this.actions)
        const avatar = random(this.names)

        return ({
            user,
            action,
            read: false

        })
    }

}