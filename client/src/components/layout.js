import * as React from 'react';
import NavigationBar from './navbar';
import axios from 'axios';
import { 
    Box,
    Container,
    TextField,
    Button,
    Grid
 } from '@mui/material';

export default function Layout(){

    const [query, setQuery] = React.useState('');
    const [gpt3, setGpt3] = React.useState('');
    const [gpt4, setGpt4] = React.useState('');
    const [isLoading, setLoading] = React.useState(true);

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(query);
        setLoading(false);
        var data = JSON.stringify({
        "query": query
        });

        var configGpt4 = {
        method: 'post',
        url: 'http://127.0.0.1:5000/gpt-4',
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':  '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        },
        data : data
        };

        var configGpt35 = {
        method: 'post',
        url: 'http://127.0.0.1:5000/gpt-35',
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':  '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        },
        data : data
        };

        axios(configGpt4)
        .then(function (response) {
        setGpt4(response.data["answer"]);
        })
        .catch(function (error) {
        console.log(error);
        });

        axios(configGpt35)
        .then(function (response) {
        setGpt3(response.data["answer"]);
        })
        .catch(function (error) {
        console.log(error);
        });

        setLoading(true);
    }

    return(
        <div>
            <NavigationBar></NavigationBar>
            <Container maxWidth="false" style={{padding: "40px"}}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <TextField fullWidth
                        id="outlined-basic" 
                        label="Enter Your Query" 
                        variant="outlined" 
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value);
                        }}
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        sx={{ justifyContent: "flex", m: "10px" }}
                    >
                        Submit
                    </Button>
                </Box>
                {isLoading ?  
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box
                        alignItems="center"
                        my={4}
                        gap={4}
                        p={2}
                        sx={{ border: '2px solid rgb(25, 118, 210)' }}
                        >
                        <h2 style={{color: "#1976d2"}}>GPT 4 Turbo Answer</h2>
                        <div style={{whiteSpace: "pre-wrap", textAlign: "left", padding: "12px"}}>{gpt4}</div>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                        alignItems="center"
                        my={4}
                        gap={4}
                        p={2}
                        sx={{ border: '2px solid rgb(25, 118, 210)' }}
                        >
                        <h2 style={{color: "#1976d2"}}>GPT 3.5 Turbo Answer</h2>
                        <div style={{whiteSpace: "pre-wrap", textAlign: "left", padding: "12px"}}>{gpt3}</div>
                        </Box>
                    </Grid>
                </Grid> :
                <div><h2 style={{color: "#1976d2"}}>Loading...</h2></div>
                }
                
            </Container>

        </div>
    );
}