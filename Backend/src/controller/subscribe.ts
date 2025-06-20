import subscriberDB from '../model/subscribe.model';
import { Request, Response } from 'express'

const addSubscriber = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const subscriber = await subscriberDB.findOne({email})
        if (subscriber) {
            res.status(400).json({ message: "Email already exists" })
        } else {
            const newSubscriber = await subscriberDB.create({email})
            res.status(201).json({ message: "Subscriber added successfully", newSubscriber })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

const getSubscribers = async (req, res) => {
    try {
        const subscribers = await subscriberDB.find()
        if (subscribers && subscribers.length > 0) {
            return res.status(200).json({
                message: "Subscribers fetched successfully",
                subscribers
            });
        } else {
            return res.status(404).json({ message: "No subscribers found" });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

export default { addSubscriber, getSubscribers }