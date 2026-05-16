import { useState } from 'react'

import '../styles/Todaydate.css'

function getLiveDate() {
    return new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

function Todaydate() {
    // "date" stores today's date string (updates every minute)
    const [date, setDate] = useState(getLiveDate())
    return (
        <>
            {/* ── Date Badge — top right ── */}
            <div className="hero__date-badge">
                <span className="hero__date-dot" aria-hidden="true" />
                <span className="hero__date-text">{date}</span>
            </div>
        </>
    );
}

export default Todaydate;