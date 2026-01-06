import React from 'react';
import { ArrowRight, Book, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-slate-900 z-0" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 mb-6 animate-fade-in-up">
                            Master Your Future with StudyPoint
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Unlock your potential with our immersive learning courses.
                            Join a community of millions of learners and instructors in the world's leading online learning platform.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link to="/signup">
                                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-indigo-500/30 flex items-center gap-2">
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <Link to="/courses">
                                <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg transition-all border border-slate-700 hover:border-slate-500">
                                    Explore Courses
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all hover:-translate-y-2 group">
                        <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
                            <Book className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Expert Textbooks</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Access thousands of digital textbooks and resources curated by top professors from universities worldwide.
                        </p>
                    </div>
                    <div className="p-8 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:-translate-y-2 group">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500 transition-colors">
                            <Users className="w-6 h-6 text-cyan-400 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Community Learning</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Study together in groups, share notes, and collaborate on projects with students from across the globe.
                        </p>
                    </div>
                    <div className="p-8 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all hover:-translate-y-2 group">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                            <Trophy className="w-6 h-6 text-purple-400 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">Certified Success</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Earn recognized certificates upon completion. Boost your career and showcase your skills to employers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-slate-800/30 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Why Choose StudyPoint?</h2>
                    <div className="space-y-6 text-lg text-slate-300">
                        <p>
                            In today's fast-paced world, continuous learning is the key to staying ahead. StudyPoint provides a flexible, accessible, and high-quality learning environment tailored to your needs. Whether you are looking to upskill for a promotion, pivot to a new career, or simply satisfying your curiosity, we have the right path for you.
                        </p>
                        <p>
                            Our platform utilizes state-of-the-art technology to deliver seamless video streaming, interactive quizzes, and real-time feedback. We believe that education should be engaging, effectively, and fun. That's why we've gamified the learning experience to keep you motivated every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
