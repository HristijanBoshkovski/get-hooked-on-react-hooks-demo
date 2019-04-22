import React, {useState, useEffect} from 'react';

export default function useName(name, familyName) {
    const [firstName, setFirstName] = useState({firstName: ''});
    const [lastName, setLastName] = useState({lastName: ''});

    useEffect(() => {
        setFirstName(name);
        setLastName(familyName);

        return(() => {
            setFirstName('');
            setLastName('');
        });

    }, []);

    return [firstName, lastName, setFirstName, setLastName];
}