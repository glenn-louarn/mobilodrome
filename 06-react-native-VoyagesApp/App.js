import {useState} from 'react';

import {MenuPrincipal} from "./src/MenuPrincipal";


export default function App() {

    const [voyages, setVoyage] = useState([]); 
    const addVoyage = (voyage) =>  {
        setVoyage([
            ...voyages,
            voyage
        ])
        console.log("VOYAGES : ", voyages)
    }
    return (
        <MenuPrincipal voyages = {voyages} addVoyage = {addVoyage}/>
    );
}
