import { useState } from "react";

export default function AdminDashboard() {

    const userData = JSON.parse(localStorage.getItem('userData'))
    
    const { name, id, userType, rollNo } = userData
    const [message, setMessage] = useState("");
    const [scoreData, setScoreData] = useState({});

    const [formData, setFormData] = useState({
        firstname: "",
        lastName: "",
        myClass: "",
        rollNo: '',
        mathsScore: "",
        englishScore: '',
        hindiScore: '',
        scienceScore: '',
        socialScienceScore: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleLogout = async () => {

        let response = await fetch('http://localhost:8080/api/logout')
        // let json = await response.json()
        // console.log(response);
        navigate('/')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/profiles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        console.log(response.ok);

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            setMessage("Successfully Submitted the Scores!");
            setScoreData(result)
            document.querySelector('#scoreForm').reset()

            //   setFormData("")
            //   navigate('/Login')

        } else {
            const error = await response.text();
            console.log(error);
            console.log(`Roll number already exists: ${rollNo}`);
             if (error === `Roll number already exists: ${scoreData.rollNo}`) {
                setMessage("Roll number already exists");
            } else {
                setMessage("An error occurred during signup.");
            }
        }
    };

    console.log(scoreData);

    return (
        <div className="mt-96 md:mt-0 md:w-1/3 lg:w-1/3 mx-auto pt-32 mb-8 pb-8 px-6 bg-gray-200 rounded-lg">
            <div className="flex justify-between"><h1>Welcome Back, {name} </h1>
                <p>User Type: {userType} </p>
                <button onClick={handleLogout}>Log Out</button></div>
            <h2 className="text-red-500 text-2xl font-semibold text-center my-8">
                Add Score
            </h2>
            <form onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleChange(e)} id="scoreForm">
                <div className="grid grid-cols-1 gap-4 ">
                    <div>
                        <label className="block text-gray-700"> Name:</label>
                        <input
                            type="text"
                            name="firstname"
                            value={formData.name}
                            placeholder="Enter First Name"
                            className="px-4 py-2 w-full border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* <div>
                        <label className="block text-gray-700">Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            placeholder="Enter last Name"
                            className="px-4 py-2 w-full border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div> */}
                    {/* <div>
                        <label className="block text-gray-700">Class:</label>
                        <input
                            type="number"
                            name="myClass"
                            value={formData.myClass}
                            placeholder="Enter class"
                            className="px-4 py-2 w-full border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div> */}
                    <div>
                        <label className="block text-gray-700">Roll No:</label>
                        <input
                            type="number"
                            name="rollNo"
                            value={formData.rollNo}
                            placeholder="Enter Roll Number"
                            className="px-4 py-2 w-full border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Math Score:</label>
                        <input
                            type="number"
                            name="mathsScore"
                            value={formData.mathsScore}
                            placeholder="enter score"
                            className="px-4 py-2 w-full border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">English Score:</label>
                        <input
                            type="number"
                            name="englishScore"
                            value={formData.englishScore}
                            placeholder="enter score"
                            className="px-4 py-2 w-full border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Hindi Score:</label>
                        <input
                            type="number"
                            name="hindiScore"
                            value={formData.hindiScore}
                            placeholder="enter score"
                            className="px-4 py-2 w-full border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Science Score:</label>
                        <input
                            type="number"
                            name="scienceScore"
                            value={formData.scienceScore}
                            placeholder="enter score"
                            className="px-4 py-2 w-full border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Social Science Score:</label>
                        <input
                            type="number"
                            name="socialScienceScore"
                            value={formData.socialScienceScore}
                            placeholder="enter score"
                            className="px-4 py-2 w-full border rounded text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                </div>
                <div className="flex justify-center mt-6">
                    <button className="w-full bg-[#791b1bd3] text-white py-2 px-4 rounded hover:bg-[#5a1515] focus:outline-none focus:ring-2 focus:ring-red-500">
                        Submit
                    </button>
                </div>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </form>
        </div>
    )
}