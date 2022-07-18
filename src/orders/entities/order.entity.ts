export class Order {
  id: string;
  createdAt: Date;
  bagNumber: number;
  userId: string;
  games?: string[];
}
