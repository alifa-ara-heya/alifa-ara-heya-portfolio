import './aboutMe.css'
import profile from '../../assets/profile.jpg'
const AboutMe = () => {
    return (
        <section className=" py-16 px-6" id="about">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-6 ">About Me</h2>
                <div className="card shadow-lg rounded-lg md:p-16 p-10 gradientCard">
                    <div className="text-center">
                        <img
                            src={profile}// Replace with your image
                            alt="My Profile"
                            className="w-32 h-32 mx-auto rounded-full object-cover shadow-md mb-4"
                        />
                    </div>
                    <div className=" text-lg leading-7 space-y-4">
                        <p>
                            Hi, I&apos;m <span className="font-bold">Alifa Ara Heya</span>, a passionate junior frontend developer with a knack for crafting dynamic and user-friendly interfaces using React and Tailwind CSS. My journey into programming started with a curious mindset and a desire to build things that could make life easier and more exciting.
                        </p>
                        {/*   <p>
                            I love working on projects that challenge me to think creatively and solve problems efficiently. Designing responsive, clean, and modern user experiences is what excites me the most. I find immense joy in watching my code come to life and bring value to others.
                        </p> */}
                        <p>
                            Beyond coding, I&apos;m a person who loves <span className="italic">painting, reading, embroidering, and exploring nature</span>.
                        </p>
                        <p>
                            My work philosophy revolves around <span className="font-semibold">collaboration, continuous learning, and persistence</span>. I&apos;m always eager to learn new technologies and grow both as a developer and as a person.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
