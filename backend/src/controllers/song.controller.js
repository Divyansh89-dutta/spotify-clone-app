import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
    try {
        // using sort() method to display the newest song at the top, 
        // -1 is for descending order
        // 1 is for ascending order
        const songs = await Song.find().sort({ createdAt: -1 });
        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
};

export const getFeaturedSongs = async (req, res, next) => {
    try {
        // using mongodb's aggregation pipeline to get 6 random songs
        const songs = await Song.aggregate([
            { $sample: { size: 6 } },
            { $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 } }
        ]);

        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
};

export const getSongsMadeForYou = async (req, res, next) => {
    try {
        // using mongodb's aggregation pipeline to get 4 random songs
        const songs = await Song.aggregate([
            { $sample: { size: 4 } },
            { $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 } }
        ]);
        
        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
};

export const getTrendingSongs = async (req, res, next) => {
    try {
        // using mongodb's aggregation pipeline to get 4 random songs
        const songs = await Song.aggregate([
            { $sample: { size: 4 } },
            { $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 } }
        ]);
        
        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
};