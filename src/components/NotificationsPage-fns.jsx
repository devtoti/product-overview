import React, { useEffect, useState, useRef} from 'react'

export default function NewEntry({entries, handleNotifications}) {
    const [entry, setEntry] = useState(users.generateEntry())
    const [isRead, setIsRead] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const notifCount = document.querySelectorAll(".not-read").length
        console.log(notifCount)
        // handleNotifications(notifCount)
        // handleNotifications(2)
        console.log(typeof handleNotifications)
    },[entries, isRead])

    function markAsRead() {
        setIsRead(a => !a)
       }
   
    useEffect(() => {
        console.log(entry)
    }, [])
    return (
        <div ref={ref} className={isRead ? 'user-notification' : 'user-notification not-read'} onClick={markAsRead}>
            <img src={entry.user.avatar} alt="" />
            <div>
                <h3>{entry.user.name}</h3>
                <h4>{entry.action}</h4>
                <h5></h5>
                {/* <p><cite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure exercitationem dolore beatae soluta nisi blanditiis fugiat amet veniam odio?</cite></p> */}
            </div>
        </div>
    )
}



export const users = {
    names: [
        {
            name:'Kimberly Smith',
            avatar:"notifications/assets/images/avatar-kimberly-smith.webp"
        },
        {
            name: 'Nathan Peterson',
            avatar:"notifications/assets/images/avatar-nathan-peterson.webp",

        },
        {
            name:'Jacob Thompson',
            avatar:"notifications/assets/images/avatar-jacob-thompson.webp"
        },
        {
            name:'Angela Gray',
            avatar:"notifications/assets/images/avatar-angela-gray.webp"
        },
        {
            name:'Mark Webber',
            avatar:"notifications/assets/images/avatar-mark-webber.webp"
        },
        {
            name:'Mark Webber',
            avatar:"notifications/assets/images/avatar-mark-webber.webp"
        },
        {
            name:'El Patrón',
            avatar:"notifications/assets/images/avatar-rizky-hasanuddin.webp"
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
 
    generateEntry: function() {
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
          avatar
        })
    }

}