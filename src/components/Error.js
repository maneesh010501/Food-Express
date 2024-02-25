import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="m-5">
            <h1 className="text-2xl font-semibold">OOPS!</h1>
            <h3 className="text-xl">We're sorry. The Web address you entered is not a functioning page on our site.</h3>
            <h3 className="text-xl">Go to Food Express's <Link to="/" className="font-extrabold text-blue-900 underline">Home</Link> Page</h3>
            <h3 className="text-xl font-semibold">{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error;