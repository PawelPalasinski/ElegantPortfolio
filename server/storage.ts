import { users, type User, type InsertUser } from "@shared/schema";
import { contactMessages, type ContactMessage, type InsertMessage } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMessage(message: InsertMessage): Promise<ContactMessage>;
  uploadImage(filename: string, buffer: Buffer, mimetype: string): Promise<string>;
  getImage(filename: string): Promise<Buffer | null>;
  listImages(): Promise<string[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, ContactMessage>;
  private images: Map<string, {buffer: Buffer, mimetype: string}>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.images = new Map();
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createMessage(insertMessage: InsertMessage): Promise<ContactMessage> {
    const id = this.currentId++;
    const message: ContactMessage = { ...insertMessage, id };
    this.messages.set(id, message);
    return message;
  }

  async uploadImage(filename: string, buffer: Buffer, mimetype: string): Promise<string> {
    // Zapisz obraz w pamięci
    this.images.set(filename, {buffer, mimetype});
    return filename;
  }

  async getImage(filename: string): Promise<Buffer | null> {
    const image = this.images.get(filename);
    return image ? image.buffer : null;
  }

  async listImages(): Promise<string[]> {
    return Array.from(this.images.keys());
  }
}

export const storage = new MemStorage();