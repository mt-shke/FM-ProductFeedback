const HomeSpinner: React.FC = () => {
    return (
        <div className="w-screen h-screen gridc flex flex-col gap-6 items-center justify-center">
            <div className="h-20 aspect-square rounded-full border-t-4 border-blue animate-spinning"></div>
            <p>Please wait a moment:</p>
            <div className="flex flex-col items-center px-4">
                <p>Fetching data from MongoDB...</p>
            </div>
        </div>
    );
};
export default HomeSpinner;
