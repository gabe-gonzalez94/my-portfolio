import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import SkillBar from 'react-skillbars'

const skills = [
    {type: "Java", level: 80},
    {type: "SpringBoot", level: 70},
    {type: "SQL", level: 75},
    {type: "Python", level:50},
    {type: "Unix", level:65}

]

class Resume extends Component {

    render() {
        return (
            <div style={{paddingTop: '30px', paddingLeft: '20px', paddingRight: '20px'}}>
                <Grid container spacing={2}>
                    <Grid className="left-resume" item xl={4} style={{textAlign: 'center'}}>
                        <img src={require('../images/profile_picture.JPG')} className="profile-picture"/>
                        <h2>Gabriel Gonzalez</h2>
                        <h4>Software Developer</h4>
                        <hr style={{borderTop: '3px solid'}}></hr>
                        <p>I’m an energetic and curious
                            individual, who enjoys being
                            challenged mentally. I enjoy learning
                            new things every day, not only in the
                            computer science domain, but in any
                            topic be it psychology, business
                            administration, or entertainment.

                            Currently looking for a software
                            developer position in which I can both
                            bring my analytical and deductive
                            skills to the table, and grow myself as
                            a person.
                        </p>
                        <hr style={{borderTop: '3px solid'}}></hr>
                        <h3>Contact Information</h3>
                        <p>Phone: (973)-342-0246</p>
                        <p>Email Address: gegb1994@gmail.com</p>
                        <a href="https://www.linkedin.com/in/gabriel-gonzalez-b3162ab3/">LinkedIn Page</a>
                        <hr style={{borderTop: '3px solid'}}></hr>
                        <h3>Hobbies</h3>
                        <p>Going to the movies</p>
                        <p>Playing videogames</p>
                        <p>Cooking</p>
                    </Grid>
                    <Grid item xl={8} className="resume-right">
                        <div className="work-experience">
                            <h2>Tech Stack</h2>
                            <hr style={{borderTop: '3px solid'}}></hr>
                            <SkillBar skills={skills}/>
                        </div>
                        <div className="work-experience">
                            <h2>Work Experience</h2>
                            <hr style={{borderTop: '3px solid'}}></hr>
                            <h3>Express Scripts - Associate Software Engineer</h3>
                            <h4>August 2017 - Present</h4>
                            <p>
                                • Worked on an agile team, adhering to regular scrum
                                ceremonies and meetings.
                            </p>
                            <p>• Worked on a high transaction application, responsible for
                                delivering communications to patients about their coverage
                                through letters and faxes.
                            </p>
                            <p>
                                • Application was developed in Java Spring Framework and
                                deployed in the cloud (Pivotal Cloud Foundry).
                            </p>
                            <p>
                                • Implemented new features based on business requirements,
                                ranging from end-to-end design and implementation, such as
                                implementing a new letter tracking system based on RESTful
                                calls, to fixing any newly discovered bugs.
                            </p>
                            <p>
                                • Migrated services from legacy technologies to Spring Boot,
                                while keeping core functionality intact.
                            </p>
                            • Performed production support by responding to critical issues
                            and quick turnaround on an on-call schedule basis.
                            <p>
                                • Performed technical validation due to patches or
                                deployments.
                            </p>
                            <p>
                                • Developed new shell scripts to automate manual intervention
                                ranging from periodic database querying to scheduled
                                emailing based on requirements.
                            </p>
                            <hr style={{borderTop: '3px solid'}}></hr>
                        </div>
                        <div className="work-experience">
                            <h2>Education</h2>
                            <hr style={{borderTop: '3px solid'}}></hr>
                            <h3>New Jersey Institute of Technology - MS in Data Science</h3>
                            <h4>September 2018 - May 2020(Expected)</h4>
                            <p>
                                • Coursework: Big Data, R Programming, Applied Statistics, Machine
                                Learning
                            </p>
                            <p>
                                • Worked on a project which involved developing a MapReduce
                                solution deployed in AWS, from instance creation, to application
                                development.
                            </p>
                            <p>
                                • Worked on a project which involved developing a MapReduce
                                solution deployed in AWS, from instance creation, to application
                                development.
                            </p>
                            <hr style={{borderTop: '3px solid'}}></hr>
                            <h3>Rutgers University Newark – BS in Computer Science</h3>
                            <h4>September 2014 - May 2017</h4>
                            <p>
                                • Coursework: Database Design, Data Structures and Algorithms,
                                Computer Architecture, Operating Systems. Web Development.
                            </p>
                            <p>
                                • Final Project: Alumni Yearbook, Web application which allowed
                                alumni to explore legacy yearbooks and share in their social
                                media account.
                            </p>
                            <p>
                                • Online Quiz System: Developed an application which allowed
                                professors and students to create and take quizzes, adding
                                questions and grading system.

                            </p>

                        </div>


                    </Grid>

                </Grid>
                </div>

                    )
                    }

                    }

                    export default Resume;