export interface Booking {
  checkIn: Date;
  checkOut: Date;
  userId?: string;
  rooms: number;
  children: number;
  adults: number;
  price: number;
  email: string;
  phone: number;
}
