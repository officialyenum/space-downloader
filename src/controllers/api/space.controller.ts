import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { downloadFile } from '../../library/DownloadFile';
import SpaceRequest from '../../library/SpaceRequest';

class SpaceController {
    public static index = async (req: Request, res: Response, next: NextFunction) => {
        const key = process.env.TWITTER_KEY
        const headers = {
            'Content-Type': 'application/json',
            'X-Guest-Token': '',
            Authorization: `Bearer ${key}`
        };
        // Get Guest Token
        const resp: any = await axios.post('https://api.twitter.com/1.1/guest/activate.json', {}, { headers });

        headers['X-Guest-Token'] = resp.data.guest_token;

        const spaceRequest: SpaceRequest = new SpaceRequest('1BRJjZzWVWWJw');
        const encodedData = encodeURIComponent(JSON.stringify(spaceRequest));
        const query = '?variables=' + encodedData;
        const endpoint = `https://twitter.com/i/api/graphql/lFpix9BgFDhAMjn9CrW6jQ/AudioSpaceById${query}`;

        const response: any = await axios.get(endpoint, { headers });
        const media_key: string = response.data.data.audioSpace.metadata.media_key;

        const streamEndpoint = `https://twitter.com/i/api/1.1/live_video_stream/status/${media_key}`;
        const streamResponse: any = await axios.get(streamEndpoint, { headers });
        console.log(streamResponse.data.source);

        const file = downloadFile(streamResponse.data.source.location, 'download.m3u8');

        // Get Space Data
        res.json({
            query: streamEndpoint,
            message: file
        });
    };
}

export default SpaceController;
