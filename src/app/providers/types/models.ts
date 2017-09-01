interface NumberPk {
  id?: number
}

export interface Fleet extends NumberPk {
  name?: string
  parent_id?: number
  users?: User[]
  devices?: Device[]
}

export interface Account {
  email?: string
  isActive?: boolean
  created?: Date
  password?: string
  lastLogin?: Date
}

export interface User extends NumberPk {
  username?: string
  account?: Account
  fleets?: Fleet[]
}

export interface Device extends NumberPk {
  serial?: string
  type?: string
  description?: string
  phone?: string
  plate?: string
  vin?: string
  imei?: string
  imsi?: string
  msisdn?: string
  account?: Account
  fleets?: Fleet[]
}

export interface Journey extends NumberPk {
  startLatitude?: number
  startLongitude?: number
  startTimestamp?: Date
  stopLatitude?: number
  stopLongitude?: number
  stopTimestamp?: Date
  distance?: number
  averageSpeed?: number
  maximumSpeed?: number
  duration?: number
  device_id?: number
}

export interface Position extends NumberPk {
  latitude?: number
  longitude?: number
  timestamp?: Date
  speed?: number
  journey_id?: number
  device_id?: number
}

export enum LogLevel {
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  DEBUG = 'DEBUG'
}

export interface Log extends NumberPk {
  timestamp?: Date
  level?: LogLevel
  message?: string
}
