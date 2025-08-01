import subscriberDB from '../model/subscribe.model';
import { Request, Response } from 'express';

export const addSubscriber = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ message: "Email is required" });
      return;
    }
    const subscriber = await subscriberDB.findOne({ email });
    if (subscriber) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }
    const newSubscriber = await subscriberDB.create({ email });
    res.status(201).json({ message: "Subscriber added successfully", newSubscriber });
  } catch (error: any) {
    res.status(500).json({ message: error.message, stack: error.stack });
  }
};

export const getSubscribers = async (req: Request, res: Response) => {
  try {
    const subscribers = await subscriberDB.find();
    if (subscribers && subscribers.length > 0) {
      res.status(200).json({ message: "Subscribers fetched successfully", subscribers });
    } else {
      res.status(404).json({ message: "No subscribers found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message, stack: error.stack });
  }
};