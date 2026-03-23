'use client'

import { useState } from 'react'
import { Footer } from '@/components/sections/Footer'

interface Guest {
  id: number
  name: string
  party: string
  rsvpStatus: 'accepted' | 'declined' | 'pending'
  guests: number
}

const guestData: Guest[] = [
  { id: 1, name: 'Emma Johnson', party: 'Johnson Family', rsvpStatus: 'accepted', guests: 2 },
  { id: 2, name: 'James Williams', party: 'Williams Family', rsvpStatus: 'accepted', guests: 3 },
  { id: 3, name: 'Olivia Brown', party: 'Brown Family', rsvpStatus: 'pending', guests: 1 },
  { id: 4, name: 'Sophia Davis', party: 'Davis Family', rsvpStatus: 'accepted', guests: 2 },
  { id: 5, name: 'Alexander Miller', party: 'Miller Family', rsvpStatus: 'declined', guests: 2 },
  { id: 6, name: 'Isabella Wilson', party: 'Wilson Family', rsvpStatus: 'accepted', guests: 4 },
  { id: 7, name: 'Benjamin Moore', party: 'Moore Family', rsvpStatus: 'accepted', guests: 1 },
  { id: 8, name: 'Charlotte Taylor', party: 'Taylor Family', rsvpStatus: 'pending', guests: 2 },
  { id: 9, name: 'Michael Anderson', party: 'Anderson Family', rsvpStatus: 'accepted', guests: 3 },
  { id: 10, name: 'Amelia Thomas', party: 'Thomas Family', rsvpStatus: 'accepted', guests: 2 },
  { id: 11, name: 'Daniel Jackson', party: 'Jackson Family', rsvpStatus: 'accepted', guests: 2 },
  { id: 12, name: 'Mia White', party: 'White Family', rsvpStatus: 'accepted', guests: 1 },
]

export default function GuestsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'accepted' | 'pending' | 'declined'>('all')

  const filteredGuests = guestData.filter(guest => {
    const matchesSearch = guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guest.party.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || guest.rsvpStatus === filterStatus
    return matchesSearch && matchesFilter
  })

  const stats = {
    total: guestData.length,
    accepted: guestData.filter(g => g.rsvpStatus === 'accepted').length,
    pending: guestData.filter(g => g.rsvpStatus === 'pending').length,
    declined: guestData.filter(g => g.rsvpStatus === 'declined').length,
    totalGuests: guestData.reduce((sum, g) => sum + g.guests, 0),
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'declined':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return ''
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-widest uppercase font-lora">Guest Management</p>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mt-4">
            Wedding Guest List
          </h1>
          <p className="text-foreground/70 text-lg font-lora mt-4">
            Track our invited guests and their RSVP status
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          <div className="bg-secondary p-6 rounded-lg border border-primary/20 text-center">
            <p className="text-primary text-3xl font-bold">{stats.total}</p>
            <p className="text-foreground/70 text-sm mt-2 font-lora">Total Invitations</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg border border-primary/20 text-center">
            <p className="text-green-400 text-3xl font-bold">{stats.accepted}</p>
            <p className="text-foreground/70 text-sm mt-2 font-lora">Accepted</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg border border-primary/20 text-center">
            <p className="text-yellow-400 text-3xl font-bold">{stats.pending}</p>
            <p className="text-foreground/70 text-sm mt-2 font-lora">Pending</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg border border-primary/20 text-center">
            <p className="text-red-400 text-3xl font-bold">{stats.declined}</p>
            <p className="text-foreground/70 text-sm mt-2 font-lora">Declined</p>
          </div>
          <div className="bg-secondary p-6 rounded-lg border border-primary/20 text-center">
            <p className="text-primary text-3xl font-bold">{stats.totalGuests}</p>
            <p className="text-foreground/70 text-sm mt-2 font-lora">Total Guests</p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by name or party..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-secondary border border-primary/30 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary font-lora"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="bg-secondary border border-primary/30 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary font-lora"
          >
            <option value="all">All Guests</option>
            <option value="accepted">Accepted</option>
            <option value="pending">Pending</option>
            <option value="declined">Declined</option>
          </select>
        </div>

        {/* Guest Table */}
        <div className="overflow-x-auto rounded-lg border border-primary/20">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary border-b border-primary/20">
                <th className="text-left px-6 py-4 text-sm uppercase tracking-wide text-primary font-playfair">Name</th>
                <th className="text-left px-6 py-4 text-sm uppercase tracking-wide text-primary font-playfair">Party</th>
                <th className="text-left px-6 py-4 text-sm uppercase tracking-wide text-primary font-playfair">Guests</th>
                <th className="text-left px-6 py-4 text-sm uppercase tracking-wide text-primary font-playfair">RSVP Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredGuests.map((guest, index) => (
                <tr
                  key={guest.id}
                  className={`border-b border-primary/10 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/30'} hover:bg-secondary/50 transition-colors`}
                >
                  <td className="px-6 py-4 text-foreground font-lora">{guest.name}</td>
                  <td className="px-6 py-4 text-foreground/70 font-lora">{guest.party}</td>
                  <td className="px-6 py-4 text-foreground font-lora">{guest.guests}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(guest.rsvpStatus)}`}>
                      {guest.rsvpStatus.charAt(0).toUpperCase() + guest.rsvpStatus.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredGuests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60 font-lora text-lg">No guests found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
