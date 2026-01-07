import React, { useState, useEffect } from 'react';

const IdentityForm = () => {
    const [name, setName] = useState('');
    const [documentId, setDocumentId] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage('');

        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, document_id: documentId }),
            });

            if (response.ok) {
                setMessage('Registration successful! Welcome to the Galaxy.');
                setName('');
                setDocumentId('');
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setMessage('Failed to connect to the server.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white relative z-10 p-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md animate-nebula">
                <h1 className="text-4xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-star-blue to-galaxy-pink drop-shadow-md">
                    Galaxy Identity
                </h1>
                <p className="text-center text-gray-300 mb-6 font-mono text-lg">{currentTime}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-galaxy-pink text-white placeholder-gray-500 transition-all duration-300 hover:bg-black/40"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="documentId" className="block text-sm font-medium text-gray-200 mb-1">Document ID</label>
                        <input
                            type="text"
                            id="documentId"
                            value={documentId}
                            onChange={(e) => setDocumentId(e.target.value)}
                            className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-star-blue text-white placeholder-gray-500 transition-all duration-300 hover:bg-black/40"
                            placeholder="Enter ID number"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className={`w-full py-3 rounded-lg font-bold text-lg tracking-wide shadow-lg transition-transform transform active:scale-95 ${submitting
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-gradient-to-r from-nebula-purple to-galaxy-pink hover:from-purple-700 hover:to-pink-600 hover:shadow-galaxy-pink/50'
                            }`}
                    >
                        {submitting ? 'Transmitting...' : 'Register Identity'}
                    </button>
                </form>

                {message && (
                    <div className={`mt-4 p-3 rounded text-center text-sm font-semibold ${message.includes('Error') || message.includes('Failed') ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'}`}>
                        {message}
                    </div>
                )}
            </div>

            <div className="absolute bottom-4 text-xs text-gray-500">
                Connected to Sector MySQL-80
            </div>
        </div>
    );
};

export default IdentityForm;
