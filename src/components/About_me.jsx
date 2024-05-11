import React from 'react';

function About_me() {
    return (
        <>
            <div className='mt-40'>
                <h2 id="about" className="text-4xl md:text-6xl font-bold text-yellow-300 mb-4 my-5 text-center underline">
                    About <span className="text-red-500">Me</span>
                </h2>
                <div className='p-4 ml-16 mr-16'>
                    <div className="border border-white p-4 w-full h-full rounded-lg">
                        <h2 className='py-4 text-white text-2xl font-semibold'>Hey, Myself Ankit</h2>
                        <div className="text-lg md:text-xl text-gray-300 mb-8">
                            <p className="text-2xl font-serif"></p>
                            I am a PreFinal-year student at the prestigious Indian Institute of Information Technology, Ranchi - an Institute of National Importance under an act of govt & MoE. My major is Computer Science and Engineering with Specialization in Data Science and Artificical Intelligence.
                            <br />
                            <br />
                            Web development especially backend development is one thing that excites me a lot. Along with this I have a keen interest in problem solving. I have solved more than <span className='text-red-600 font-semibold'>1000</span> problems on various platforms like Leetcode, Codechef, GeeksForGeeks
                            <br />
                            <br />
                            I have made my projects like an E-commerce platform, a complete end to end chat application and a notes taking website.
                            <br />
                            <br />
                            My motto have been always trying to do better than yesterday.
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default About_me;
