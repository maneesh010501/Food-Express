import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPS!</h1>
            <h3>The Web address you entered is not a functioning page on our site.</h3>
            <h3>Go to Food Express's Home Page : <Link to="/">Home</Link></h3>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error;