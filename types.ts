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