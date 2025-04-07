import React, { useState } from 'react'
import EventForm from './components/EventForm'
import InvitationCard from './components/InvitationCard'
import GuestList from './components/GuestList'
import styles from './App.module.css'

function App() {
  const [eventDetails, setEventDetails] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    host: ''
  })

  const [guests, setGuests] = useState([])

  const handleEventUpdate = (details) => {
    setEventDetails(details)
  }

  const handleGuestAdd = (guest) => {
    setGuests([...guests, guest])
  }

  const handleGuestRemove = (email) => {
    setGuests(guests.filter(guest => guest.email !== email))
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Event Invitation Creator</h1>
      <div className={styles.layout}>
        <div className={styles.formSection}>
          <EventForm onEventUpdate={handleEventUpdate} />
          <GuestList 
            guests={guests} 
            onGuestAdd={handleGuestAdd}
            onGuestRemove={handleGuestRemove}
          />
        </div>
        <div className={styles.previewSection}>
          <h2>Invitation Preview</h2>
          <InvitationCard eventDetails={eventDetails} />
        </div>
      </div>
    </div>
  )
}

export default App
