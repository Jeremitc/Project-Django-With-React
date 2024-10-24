// context/MetadataContext.js

import React, { createContext, useContext, useState } from 'react';

const MetadataContext = createContext();

export const MetadataProvider = ({ children }) => {
    const [metadata, setMetadata] = useState({
        title: "Default Title",
        description: "Default description"
    });

    // Aquí podrías actualizar los datos basándote en lógica de aplicación o rutas
    const updateMetadata = (newMetadata) => {
        setMetadata(newMetadata);
    };

    return (
        <MetadataContext.Provider value={{ metadata, updateMetadata }}>
            {children}
        </MetadataContext.Provider>
    );
};

export const useMetadata = () => useContext(MetadataContext);
