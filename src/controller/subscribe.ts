import subscriberDB from '../model/subscribe.model';
import { Request, Response } from 'express';

export const addSubscriber = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const subscriber = await subscriberDB.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const newSubscriber = await subscriberDB.create({ email });
    return res.status(201).json({ message: "Subscriber added successfully", newSubscriber });
  } catch (error: any) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
};

export const getSubscribers = async (req: Request, res: Response) => {
  try {
    const subscribers = await subscriberDB.find();
    if (subscribers && subscribers.length > 0) {
      return res.status(200).json({ message: "Subscribers fetched successfully", subscribers });
    } else {
      return res.status(404).json({ message: "No subscribers found" });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message, stack: error.stack });
  }
}; 