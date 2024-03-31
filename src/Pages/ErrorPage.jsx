import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center  h-[100vh]">
            <h2 className="text-3xl font-bold text-secondary">404!</h2>
            <p>Page not Found</p>
            <Link to='/'><button className="btn mt-2 btn-sm btn-accent">Home</button></Link>

        </div>
    );
};

export default ErrorPage;