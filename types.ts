import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
}

export interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  image: string;
}

export interface BusRoute {
  id: string;
  routeNumber: string;
  driver: string;
  phone: string;
  status: 'On Time' | 'Delayed' | 'Arrived';
  nextStop: string;
  eta: string;
  occupancy: 'Low' | 'Medium' | 'High';
  coordinates: { lat: number; lng: number };
}

export interface FeeType {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
}

export interface PlacementStat {
  year: number;
  highest: number;
  average: number;
  placedPercentage: number;
}

// --- NEW TYPES FOR BACKEND SIMULATION ---

export type UserRole = 'student' | 'parent' | 'faculty' | 'admin' | 'alumni';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  regNo?: string; // For students
  dept?: string;
}

export interface Ticket {
  id: string;
  userId: string;
  userName: string;
  type: 'Bonafide' | 'Complaint' | 'Grievance' | 'Transport' | 'Hostel' | 'IT Support';
  subject: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  date: string;
  priority: 'Low' | 'Medium' | 'High';
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'Workshop' | 'Seminar' | 'Cultural' | 'Sports';
  venue: string;
  description: string;
  image: string;
  registeredCount: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
}