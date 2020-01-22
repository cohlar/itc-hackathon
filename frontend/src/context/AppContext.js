import { createContext } from 'react';

const AppContext = createContext({
    currentLocation: {},
    setCurrentLocation: () => { },

    selectedRequest: {},
    setSelectedRequest: () => { },
});

export default AppContext;