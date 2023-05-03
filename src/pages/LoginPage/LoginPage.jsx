import { loginThunk } from "Redux/Auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {selectUserLoading} from "../../Redux/selectors"

export const LoginPage = () => {
  const navigate = useNavigate()
	const dispatch = useDispatch()
	const isLoadingUser = useSelector(selectUserLoading)
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value
		dispatch(loginThunk({ email, password }))
			.then(() => navigate('/tasks'))
			.catch(() => alert('Try again'))
		form.reset()
	}
	if (isLoadingUser) {
		return (
			<div >
				<h1 >Loading...</h1>
			</div>
		)
	}
	return (
		<div >
      <h2>Login Form</h2>
			<form	onSubmit={handleSubmit}>
				<h1>Login Form</h1>
				<input
					name='email'
					placeholder='Email...'
					type='text'
				/>
				<input
					name='password'
					placeholder='Password...'
					type='password'
				/>
				<button>Login</button>
			</form>
		</div>
	)
  };