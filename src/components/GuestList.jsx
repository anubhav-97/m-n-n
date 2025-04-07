import React, { useState } from 'react'
import styles from './GuestList.module.css'

function GuestList({ guests, onGuestAdd, onGuestRemove }) {
  const [newGuest, setNewGuest] = useState({ name: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newGuest.name && newGuest.email) {
      onGuestAdd(newGuest)
      setNewGuest({ name: '', email: '' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewGuest(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className={styles.guestList}>
      <h3>Guest List</h3>
      
      <form onSubmit={handleSubmit} className={styles.addGuestForm}>
        <input
          type="text"
          name="name"
          value={newGuest.name}
          onChange={handleChange}
          placeholder="Guest Name"
          required
        />
        <input
          type="email"
          name="email"
          value={newGuest.email}
          onChange={handleChange}
          placeholder="Guest Email"
          required
        />
        <button type="submit">Add Guest</button>
      </form>

      <ul className={styles.list}>
        {guests.map((guest, index) => (
          <li key={index} className={styles.guestItem}>
            <div>
              <span className={styles.guestName}>{guest.name}</span>
              <span className={styles.guestEmail}>{guest.email}</span>
            </div>
            <button
              onClick={() => onGuestRemove(guest.email)}
              className={styles.removeButton}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GuestList
