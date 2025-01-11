import React, { useState } from 'react'
import math, { cos } from 'math'
function Home() {

    const [kg, setKg] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [bmi, setBmi] = useState("Your BMI:");
    const [message, setMessage] = useState('');
    const [suggestion, setSuggestion] = useState('');



    const calculateBMI = () => {
        // convert feet to meter 
        const totalInches = feet * 12 + Number(inches);
        const meters = totalInches * 0.0254;
        let totalBmi = kg / (meters * meters);
        const factor = math.pow(10, 2);
        totalBmi = math.round(totalBmi * factor) / factor;
        console.log(totalBmi)
        let index = 0.1;
        const increament = setInterval(() => {
            if (index <= totalBmi) {
                setBmi(index)
                index++;
            }
            else {
                clearTimeout(increament);
            }
        }, 20);
        if (totalBmi < 18.5) {
            setMessage("Under Weight")
            setSuggestion("Eat more frequently, including healthy snacks between meals.")
        }
        else if (totalBmi <= 24.9) {
            setMessage("Normal Weight")
            setSuggestion("Maintain your weight through a balanced diet.")
        }
        else {
            setMessage("Over Weight")
            setSuggestion("Reduce calorie and avoid sugary or high-fat foods.")
        }
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 flex items-center justify-center p-6">
                {/* Card Container */}
                <div className="bg-gray-950 text-white p-8 rounded-xl shadow-xl w-full max-w-md">
                    <h2 className="text-4xl font-extrabold text-center mb-6">BMI Calculator</h2>
                    <p className='text-center mb-3'>@muhammadsheraz</p>
                    {/* BMI Input Form */}
                    <form className="space-y-6">
                        {/* Weight Input */}
                        <div>
                            <label htmlFor="weight" className="block text-lg font-medium ">Weight (kg)</label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                className="w-full p-3 border text-gray-600 border-gray-300 rounded-xl mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                                placeholder="Enter weight in kg"
                                onChange={(e) => { setKg(e.target.value) }}
                                value={kg}
                            />
                        </div>

                        {/* Height Input */}
                        <div>
                            <label htmlFor="height" className="block text-lg font-medium">Height (Feet)</label>
                            <input
                                type="number"
                                id="height"
                                name="height"
                                className="w-full p-3 text-gray-600 border border-gray-300 rounded-xl mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                                placeholder="Enter Feets"
                                onChange={(e) => { setFeet(e.target.value) }}
                                value={feet}
                            />
                        </div>
                        <div>
                            <label htmlFor="height" className="block text-lg font-medium">Height (Inches)</label>
                            <input
                                type="number"
                                id="height"
                                name="height"
                                className="w-full p-3  text-gray-600 border border-gray-300 rounded-xl mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                                placeholder="Enter Inches"
                                onChange={(e) => { setInches(e.target.value) }}
                                value={inches}
                            />
                        </div>

                        {/* Calculate Button */}
                        <div className="text-center">
                            <button
                                type="button"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl mt-6 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                onClick={calculateBMI}
                            >
                                Calculate BMI
                            </button>
                        </div>
                        <div className='flex justify-evenly items-center flex-col w-full'>
                            <div className='flex justify-between items-center w-full'>
                                <p> {message} </p>
                                <p> {bmi} kg/m <sup>2</sup> </p>
                            </div>
                            <p className='text-gray-600'> {suggestion} </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home