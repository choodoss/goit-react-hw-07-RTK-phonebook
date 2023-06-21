

export const selectFilter = state => {
    const dataState = 'getAllContacts(undefined)'
    return {
        filter: state.filter.filter,
        contacts: (state.contacts.queries[dataState]?.data || []).filter(contact =>
            contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
        )
    };
};


// export const selectAllState = state => {
//     console.log(state)
//     return ({
//         contacts: state.contacts.contacts.items.filter(contact =>
//             contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())),
//         filter: state.filter.filter,
//         isLoading: state.contacts.contacts.isLoading,
//         error: state.contacts.contacts.error,
//     })
// };
//}
