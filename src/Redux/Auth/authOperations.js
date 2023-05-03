import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const setToken = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const clearToken = () => {
	axios.defaults.headers.common.Authorization = ``
}

export const registrationThunk = createAsyncThunk(
	'@@auth/registration',
	async (credentials, thunkAPI) => {
		try {
			const res = await axios.post('users/signup', credentials)
			setToken(res.data.token)
			console.log(res.data);
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)
export const loginThunk = createAsyncThunk(
	'@@auth/login',
	async (credentials, thunkAPI) => {
		try {
			const res = await axios.post('users/login', credentials)
			setToken(res.data.token)
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logoutThunk = createAsyncThunk(
	'@@auth/logout',
	async (_, thunkAPI) => {
		try {
			await axios.post('users/logout')
			clearToken()
		} catch (error) {
			return thunkAPI.rejectWithValue(error)
		}
	}
)