
import styles from './Register.module.css'
import LayoutMain from '../Layouts/LayoutMain'


export default function Register() {

    const submit = async (event) => {
        event.preventDefault()

        // todo: validate

        const data = {
            title: event.target.title.value,
            description: event.target.description.value
        }

        console.log('data', data)

        /*
        const res = await fetch('/api/uploadVideo', {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()
        // result.user => 'Ada Lovelace'
        */
    }

    return (
        <LayoutMain>
            <form className={styles.form} onSubmit={submit}>
                <h3>Register for Mega!</h3>
                <div>
                    <input name="name" placeholder="name" />
                </div>
                <div>
                    <input name="" placeholder="" />
                </div>
                <button type="submit">Register!</button>
            </form>
        </LayoutMain>
    )
}
