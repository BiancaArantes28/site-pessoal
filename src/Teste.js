import React from 'react';
import { getString } from 'firebase/remote-config';
import { remoteConfig } from './firebase';
import { Button } from '@mui/material';
import { UserGif } from './components/UserGif/UserGif';

export const Teste = () => {
    console.log("aqui = ", JSON.parse(getString(remoteConfig, "teste_teste")))
    let teste = JSON.parse(getString(remoteConfig, "teste_teste"))
    return (
        <>
            {/* <img src={`eu.gif`} style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
            }} /> */}
            <UserGif />
            <Button variant="contained" color="secondary">Teste</Button>
        </>
    );
};
