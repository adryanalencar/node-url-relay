// a simple express server
import express, {Request, Response} from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/relay', async (request : Request, response : Response) => {
    // get url parameter from query string
    const url = request.query.url as string;
    // get the content of the url
    const content = await axios(url)
    // send the content back to the client
    response.json({
        data: content.data
    });
})

app.listen(process.env.PORT || 3000 , () => {
    console.log('server started on port 3000');
})