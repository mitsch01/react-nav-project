import React from 'react';
import project1Image from '../images/project1image.webp';
import project2Image from '../images/project2image.jpg';
import project3Image from '../images/project3image.webp';
import project4Image from '../images/project4image.jpg';
import project5Image from '../images/project5image.webp';
import project6Image from '../images/project6image.webp';
import project7Image from '../images/project7image.webp';
import project8Image from '../images/project8image.webp';
import project9Image from '../images/project9image.webp';
import project10Image from '../images/project10image.webp';
import project11Image from '../images/project11image.webp';
import project12Image from '../images/project12image.webp';

const Projects = () => {
    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-12 bg-black text-primary">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project1Image} alt="Project 1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Neon City VR</h2>
                            <p>A virtual reality experience set in a futuristic neon-lit cityscape.</p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project2Image} alt="Project 2" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Pixel Art Studio</h2>
                            <p>An online platform to create and share pixel art with a global community.</p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project3Image} alt="Project 3" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Retro Arcade Hub</h2>
                            <p>A collection of classic arcade games with a modern twist, available on web and mobile.</p>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project4Image} alt="Project 4" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">AI Art Generator</h2>
                            <p>A machine learning tool that generates unique artwork based on user inputs.</p>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project5Image} alt="Project 5" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Solar System Explorer</h2>
                            <p>An interactive 3D model of the solar system with educational content for all ages.</p>
                        </div>
                    </div>

                    {/* Project 6 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project6Image} alt="Project 6" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Foodie Finder</h2>
                            <p>A web app that helps users discover new recipes and restaurants based on their preferences.</p>
                        </div>
                    </div>

                    {/* Project 7 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project7Image} alt="Project 7" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Fitness Tracker Pro</h2>
                            <p>A comprehensive fitness app that tracks workouts, nutrition, and progress over time.</p>
                        </div>
                    </div>

                    {/* Project 8 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project8Image} alt="Project 8" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Crypto Dashboard</h2>
                            <p>A real-time dashboard for tracking cryptocurrency prices, news, and portfolio performance.</p>
                        </div>
                    </div>

                    {/* Project 9 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project9Image} alt="Project 9" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Music Mixer Online</h2>
                            <p>An online platform for creating and sharing music mixes with a global audience.</p>
                        </div>
                    </div>

                    {/* Project 10 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project10Image} alt="Project 10" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">EcoTravel Guide</h2>
                            <p>A travel guide focused on eco-friendly destinations and sustainable travel practices.</p>
                        </div>
                    </div>

                    {/* Project 11 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project11Image} alt="Project 11" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Virtual Event Platform</h2>
                            <p>A platform for hosting and attending virtual events, conferences, and meetups.</p>
                        </div>
                    </div>

                    {/* Project 12 */}
                    <div className="card bg-black text-white shadow-xl">
                        <figure>
                            <img src={project12Image} alt="Project 12" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Smart Home Controller</h2>
                            <p>A web app to control and monitor smart home devices from anywhere in the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
