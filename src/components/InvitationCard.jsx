import React from 'react'
import { format } from 'date-fns'
import styles from './InvitationCard.module.css'

function InvitationCard({ eventDetails }) {
  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    try {
      return format(new Date(dateStr), 'MMMM do, yyyy')
    } catch {
      return dateStr
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{eventDetails.title || 'Event Title'}</h2>
      </div>
      
      <div className={styles.content}>
        <p className={styles.host}>
          Hosted by: {eventDetails.host || 'Host Name'}
        </p>
        
        <div className={styles.details}>
          <p>
            <strong>When:</strong> {formatDate(eventDetails.date)}
            {eventDetails.time && ` at ${eventDetails.time}`}
          </p>
          
          <p>
            <strong>Where:</strong> {eventDetails.location || 'Location'}
          </p>
        </div>

        <div className={styles.description}>
          <p>{eventDetails.description || 'Event description will appear here'}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Please RSVP</p>
      </div>
    </div>
  )
}

export default InvitationCard
