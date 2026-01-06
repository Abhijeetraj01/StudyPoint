import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-slate-800/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <BookOpen className="h-8 w-8 text-indigo-500" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            StudyPoint
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
                        <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
                        <Link to="/courses" className="text-slate-300 hover:text-white transition-colors">Courses</Link>
                        <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {!isLoggedIn ? (
                            <>
                                <Link to="/login">
                                    <button className="px-4 py-2 text-slate-300 hover:text-white transition-colors">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30">
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to="/dashboard">
                                    <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all shadow-lg shadow-emerald-500/30">
                                        Dashboard
                                    </button>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-slate-700 hover:bg-red-600 text-white rounded-lg transition-all"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
