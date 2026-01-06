import React from 'react';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Clock, Award, Star } from 'lucide-react';

const Dashboard = () => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        window.location.href = '/login'; // Fallback protection
        return null;
    }

    return (
        <div className="min-h-screen bg-slate-900 p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-white">Welcome back, Student!</h1>
                    <p className="text-slate-400 mt-2">Here's what's happening with your courses today.</p>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">Courses in Progress</p>
                                <p className="text-2xl font-bold text-white">4</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">Hours Spent</p>
                                <p className="text-2xl font-bold text-white">12.5</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">Certificates</p>
                                <p className="text-2xl font-bold text-white">2</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-amber-500/20 rounded-xl text-amber-400">
                                <Star className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">Points</p>
                                <p className="text-2xl font-bold text-white">1,250</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Continue Learning Section */}
                <h2 className="text-xl font-bold text-white mb-6">Continue Learning</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all group">
                            <div className="h-40 bg-slate-700 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">Web Development</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Complete React Guide 2024</h3>
                                <div className="w-full bg-slate-700 h-2 rounded-full mb-4 overflow-hidden">
                                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '65%' }}></div>
                                </div>
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span>65% Completed</span>
                                    <span>4h left</span>
                                </div>
                                <button className="w-full mt-4 py-2 bg-slate-700 hover:bg-indigo-600 text-white rounded-xl transition-colors">
                                    Resume
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
