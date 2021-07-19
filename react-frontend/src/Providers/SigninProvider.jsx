
const signIn = () => {}

export default function Nav(props) {

    return (
        <div key={props.provider.name}>
            <button onClick={() => signIn(props.provider.id)}>
                Sign in with {props.provider.name}
            </button>
        </div>
    )
}
