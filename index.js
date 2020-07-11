import fetch from 'node-fetch';
import terminalImage from 'terminal-image';
import got from 'got';

fetch("https://dog.ceo/api/breeds/image/random")
    .then(result => result.json() )
    .then(result => {
        (async () => {
            const body = await got(result.message).buffer();
            console.log(await terminalImage.buffer(body));
        })()
    })
    .catch(err => console.log(err));
