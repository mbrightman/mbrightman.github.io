import React from 'react'
import '../App.css'
import './WorkMain.css'

function WorkMain() {
    return(
        <>
            <div className='work-details'>
                <h3>Experience</h3>
                    <div className='experience-table'>
                        <table>
                            <tr>
                                <td width="85%">
                                    <h4>Advanced Application Engineering Analyst, <i>Accenture</i></h4>
                                    <ul style={{marginLeft:30}}>
                                        <li>Identified and collected raw Mainframe IAM Security data for migration, including 50,000 Users, 
                                            5,000 Groups, and their Entitlements, totaling greater than 1 million data records.</li>
                                        <li>Developed a Python ETL automation script to extract data from four different client systems and aggregate and
                                            transform the data into a migration-ready format. Collaborated with other workstreams to load the Users, Groups, and Entitlements into the Target State.</li>
                                        <li>Owned the Security Workstream Jira, Weekly Status Reports, and daily status updates, including developing
                                            deliverable timelines, providing status updates, and collaborating with other workstreams to meet or exceed deadlines.</li>
                                        <li>Conducted field mapping of over 500 fields in critical tables from the source to the target state.</li>
                                        <li>Developed SQL ETL queries to extract and transfer 2 million data records from the source environment to the interim environment.</li>
                                        <li>Operated as the Data Defects Lead, employing SQL scripts to identify over 30 defects in the data and develop complex solutions to correct it.</li>
                                        <li>Principal author of the Foreword, User Stories, Product Description, Economics, and Conclusion sections of a 
                                            whitepaper for a potential industry-changing web application to be provided to the Insurance Client C-Suite.</li>
                                    </ul>

                                </td>
                                <td width="15%" style={{verticalAlign:"top"}}><h5>Aug 2022 - Current</h5></td>
                            </tr>
                            <tr>
                                <td width="85%">
                                    <h4>Cybersecurity Intern, <i>TIAA</i></h4>
                                    <ul style={{marginLeft:30}}>
                                        <li>Collaborated with cross-functional security teams and used Python, SQL, and Nexpose to proactively identify
                                        and remediate security vulnerabilities within the company’s network and applications.</li>
                                        <li>Designed and implemented a Splunk dashboard that performed comprehensive scans of workstations within the company’s 
                                            network, identified potentially vulnerable software and linked the vulnerabilities to that software, and provided critical
                                             insights into the prevalence of vulnerabilities and their risk levels. This initiative significantly increased visibility 
                                             and informed strategic decision-making regarding vulnerability mitigation efforts.</li>
                                    </ul>
                                </td>
                                <td width="15%" style={{verticalAlign:"top"}}><h5>June 2021 - Aug 2021</h5></td>
                            </tr>
                            <tr>
                                <td width="85%">
                                    <h4>Web Development Intern, <i>TIAA</i></h4>
                                    <ul style={{marginLeft:30}}>
                                        <li>Developed and integrated Java and Angular features for an internal web application, including a search feature
                                        with filters and keyword functionality, while also enhancing User Experience and User Interface (UX and UI).</li>
                                        <li>Conducted a comprehensive technical demonstration of the web application to an audience of internal stakeholders 
                                            and end-users. The presentation encompassed a detailed walkthrough of the application’s architecture, functionality, 
                                            and key features.</li>
                                        <li>Devised a data-driven quantitative methodology for measuring associate training progress. Implemented a gamification 
                                            element within the training framework, resulting in an increase in training completion rates, fostering a more engaging and 
                                            productive learning environment.</li>
                                    </ul>
                                </td>
                                <td width="15%" style={{verticalAlign:"top"}}><h5>June 2020 - Aug 2020</h5></td>
                            </tr>
                        </table>
                    </div>
            </div>

        </>
    )
}

export default WorkMain