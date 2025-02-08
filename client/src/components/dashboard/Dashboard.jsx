import React from "react";
import Sidebar from "../../utils/Sidebar";

const Dashboard = () => {
  const player = {
    name: "John Doe",
    level: 5,
    experience: 1200,
    highScore: 95,
    quizzesTaken: 20,
    categoryPerformance: [
      { category: "Animals", bestScore: 90, accuracy: "85%" },
      { category: "Plants", bestScore: 88, accuracy: "80%" },
      { category: "Fish", bestScore: 78, accuracy: "75%" },
    ],
    leaderboard: [
      { rank: 1, name: "Alice", score: 98 },
      { rank: 2, name: "Bob", score: 96 },
      { rank: 3, name: "John Doe", score: 95 },
    ],
    recentActivity: [
      { quiz: "Animal Kingdom", score: 85, date: "Feb 6, 2025" },
      { quiz: "Plant Biology", score: 78, date: "Feb 5, 2025" },
      { quiz: "Marine Life", score: 92, date: "Feb 3, 2025" },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6 pl-[calc(250px+1rem)]">
        {/* Game Overview Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center mb-8">
          <h1 className="text-5xl font-bold text-indigo-600">Nature Explorer</h1>
          <p className="text-lg text-gray-700 mt-4">
            Embark on an adventure to learn about plants, animals, and ecosystems. Challenge yourself with quizzes and climb the leaderboard!
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition"
          >
            Download Now
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{ label: "Level", value: player.level, color: "indigo-500" },
            { label: "Experience", value: `${player.experience} XP`, color: "green-500" },
            { label: "High Score", value: player.highScore, color: "yellow-500" },
            { label: "Quizzes Taken", value: player.quizzesTaken, color: "blue-500" },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h2 className="text-xl font-semibold text-gray-700">{stat.label}</h2>
              <p className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Category Performance */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Category Performance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {player.categoryPerformance.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-lg font-semibold text-gray-700">{category.category}</h3>
                <p className="text-xl font-bold text-indigo-500">Best Score: {category.bestScore}</p>
                <p className="text-md text-gray-600">Accuracy: {category.accuracy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Leaderboard</h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-3 px-4 text-left">Rank</th>
                  <th className="py-3 px-4 text-left">Player</th>
                  <th className="py-3 px-4 text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                {player.leaderboard.map((entry, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="py-2 px-4">{entry.rank}</td>
                    <td className="py-2 px-4">{entry.name}</td>
                    <td className="py-2 px-4">{entry.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <ul>
              {player.recentActivity.map((activity, index) => (
                <li key={index} className="py-4 border-b last:border-b-0 hover:bg-gray-50">
                  <span className="font-semibold">{activity.quiz}</span> - Score:
                  <span className="text-green-500 font-bold"> {activity.score}</span>
                  <span className="text-gray-500"> ({activity.date})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
