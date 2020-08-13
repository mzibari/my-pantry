import React from 'react'

export default React.createContext ({
    items: [],
    users: [],
    addItem: () => {},
    removeItem: () => {},
    useItem: () => {},
    addUser: () => {},
    toRedirect: () => {},
})