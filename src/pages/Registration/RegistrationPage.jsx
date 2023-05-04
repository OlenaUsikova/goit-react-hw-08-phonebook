import { registrationThunk } from 'Redux/Auth/authOperations';
import { useDispatch } from 'react-redux'

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const name = form.name.value
		const email = form.email.value
		const password = form.password.value
		dispatch(registrationThunk ({ name, email, password }))
	}
    return <div>RegisterPage
      <h2 >Registration form </h2>
      <form	onSubmit={handleSubmit}>
					<input
					name='name'
					type='text'
					placeholder='Name...'
				/>
				<input
					name='email'
					autoComplete='off'
					type='text'
					placeholder='Email...'
				/>
				<input
					name='password'
					type='password'
					placeholder='Password...'
				/>
				<button>SignUP</button>

			</form>
    </div>;
  };