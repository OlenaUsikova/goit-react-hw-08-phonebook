import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state=> state.contacts.contacts.isLoading;
export const selectFilter = state => state.contacts.filter;
export const selectUser = state => state.auth.user
export const selectIsOnline = state => state.auth.online
export const selectUserLoading = state => state.auth.loading

export const selectFilterdData = state => {
	const contacts = selectContacts(state)
	const filter = selectFilter(state)
	return contacts.filter(contact => contact.name.toLowerCase().includes(filter))
}

// export const selectUncompletedReselect = createSelector(
// 	[state => state.tasks.items],
// 	todos => {
// 		return todos.reduce(
// 			(total, todo) => (todo.completed ? total : total + 1),
// 			0
// 		)
// 	}
// )

// export const selectFilteredDataReselect = createSelector(
// 	[selectContacts, selectFilter],
// 	(contacts, filter) => {
// 		switch (filter) {
// 			case 'all':
// 				return todos
// 			case 'active':
// 				return todos.filter(todo => !todo.completed)
// 			case 'completed':
// 				return todos.filter(todo => todo.completed)
// 			default:
// 				return todos
// 		}
// 	}
// )