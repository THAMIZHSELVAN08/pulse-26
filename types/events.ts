export interface EventContact {
  name: string
  phone?: string
}

export interface EventRound {
  name: string
  description: string
}

export interface Event {
  slug: string
  name: string
  description: string
  fullDescription: string
  rounds?: EventRound[]
  rules?: string[]
  date: string
  time: string
  contacts?: EventContact[]
  poster: string
}

export interface EventsData {
  events: Event[]
}
