import React from 'react'
import Express from 'express'
import {Server} from 'http'
import path from 'path'
import {match, RouterContext} from  'react-router'
import {renderToString} from 'react-dom/server'
import routes from './routes'


const app = new Express();
const server = new Server(app);

app.set('views engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(Express.static(path.join(__dirname,'static')));


app.get('*', (req,res)=>{
    match({routes, location:req.url},
    (err, redirectLocation, renderProps)=>{
        if(err){
            return res.status(500).send(err.message);
        }

        if(redirectLocation){
            console.log(redirectLocation);
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        let content;
        if(renderProps)
        {

            content = renderToString(<RouterContext  {...renderProps}/>);
        }
        else{
            return res.status(404).send('Page not found');
        }

        return res.render('index.ejs', {content:content});
    });
});

server.listen(5000, err=>{
    if(err){
        console.log(err);
    }

    else{
        console.log('Server listening on port 5000');
    }
});