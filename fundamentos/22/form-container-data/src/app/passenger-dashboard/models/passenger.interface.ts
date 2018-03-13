export interface Child {
  name: string,
  age: number
}

export interface Baggage {
  key: string,
  value: string
}

export interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null,
  baggage: string
}