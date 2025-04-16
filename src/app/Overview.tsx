export default function Overview () {
    return (
        <>
        <h1 className="text-4xl font-bold mb-6 ms-6 mt-4">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-10 text-white">
            <div className="p-4 bg-[#F4A261] shadow-md rounded-4xl text-center py-20 flex flex-col flex-wrap">
                <img src="/Survey.png" className="w-15 h-15 mx-auto mb-4"></img>
                <h1 className="text-3xl font-bold mb-4">Sign Up and Take The Survey</h1>
                <p>We ask you a few simple questions to understand your learning preferences.</p>
            </div>
            <div className="p-4 bg-[#2A9D8F] shadow-md rounded-4xl text-center py-20 flex flex-col flex-wrap">
                <img src="/Personalized.png" className="w-15 h-15 mx-auto mb-4"></img>
                <h1 className="text-3xl font-bold mb-4">Get Personalized Recommendations</h1>
                <p>Based on your answers, we recommend courses tailored to your needs.</p>
            </div>
            <div className="p-4 bg-[#BC4749] shadow-md rounded-4xl text-center py-20 flex flex-col flex-wrap">
                <img src="/Learning.png" className="w-15 h-15 mx-auto mb-4"></img>
                <h1 className="text-3xl font-bold mb-4">Enhance Your Learning Experience</h1>
                <p>As you interact with recommended courses, the app learns more and provides better suggestions over time.</p>
            </div>
        </div>
        </>
    );
}