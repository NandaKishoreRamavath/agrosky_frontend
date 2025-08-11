import "./About.css";

const About = () => {
    return (
        <>
            <section id="about">
                <h3>About Us</h3>
                <h2>AgroSky Drone Aspirant</h2>
                <p>
                    AgroSky pioneers next-generation agriculture drones and UAV solutions
                    in India, empowering precision farming across{" "}
                    <span className="about_highlight">Andhra Pradesh</span> and{" "}
                    <span className="about_highlight">Telangana</span>. Our drones deliver
                    smarter crop spraying, security, and emergency response, boosting
                    yields and cutting costs while protecting the environment. <br />
                    From{" "}
                    <span
                        className="about_highlight"
                        title="An eVTOL aircraft, or electric vertical take-off and landing aircraft, is a type of aircraft that uses electric power to hover, take off, and land vertically, similar to a helicopter"
                    >
                        eVTOL air taxis
                    </span>{" "}
                    to advanced surveillance drones, AgroSky is shaping a safer, greener,
                    and more connected future through innovative, data-driven, and
                    sustainable{" "}
                    <span
                        className="about_highlight"
                        title="UAV (Unmanned Aerial Vehicle) technology encompasses the systems, hardware, and software that enable the operation and functionality of drones."
                    >
                        UAV technologies
                    </span>
                    .
                </p>
            </section>
        </>
    );
};

export default About;
