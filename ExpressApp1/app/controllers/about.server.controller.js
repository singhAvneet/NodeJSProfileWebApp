exports.render = function (req, res) {
    var objective = " OBJECTIVE: ";
    var objectiveDesp = " To obtain position as IT System Analyst, where I can display my knowledge, experience and skills to ensure profitability and growth for your company.";

    var summary = "SUMMARY OF QUALIFICATIONS:";

    var summaryDesp = " Currently enrolled in the Software Engineering Technology Advanced Diploma at Centennial College." +
" University graduated, Bachelor of Engineering in Electronics and Communication." +
" Strong written and oral customer service communication skills.Possess good leadership and teamwork qualities, interpersonal skills, quick learner and ability to takes initiative.";


    var tech = "TECHNICAL SKILLS: ";

    var techDesp = " Programming Languages: Java, C / C++, C#, XML OS: Windows, UNIX, LINUX" +
    "	Web Technology: HTML, ASP.NET, VB, ADO.NET Microsoft Office(Word, Excel, PowerPoint)" +
    "	Computer Networking Technologies Database skills: SQL, PL / SQL, JDBC" +
    "	Maintenance of software and hardware components.";


    var exp = "WORK EXPERIENCE:";


    var exp1 = "Jr.System IT Analyst(Co - op Full Time) Jan 2015 - Aug 2015" +
    "Ontario Ministry(MCSS), Toronto, Canada." +
"	Automation Developer and Tester.";

    var exp2 = "Senior Executive(Full Time) Aug 2010 - April 2014" +
    "Viom Networks Limited, Gurgaon, India." +
"	Maintained mobile network in Delhi International Airport & Mumbai Airport." +
"	Tested and inspected attenuators, amplifiers, hubs, interpreted schematic drawing during project implementation and operated multi - meters, spectrum analyzer and oscilloscopes." +
"	Experienced with Telecomtesting equipment to determine the nature, root cause and location of mobile network failures." +
"	Raised Purchase Request(PR) for all vendors in MM module of SAP-ERP system for various opex & capex material required at tower site and provided necessary MIS reports / Dashboards on daily basis to Senior Management to ensure that issues are escalated appropriately.";


    var exp3 = "Technical Support Associate(Full Time) Nov 2009 - Aug 2010" +
 "   Wipro BPO, New Delhi, India." +
"	Provided first level support to customer via phone by guiding them to re - configure the Wi - Fi access router and supported them to optimize browser and other application software." +
"	Interacted with U.Kclients via phone to offer new Internetplans introduced by AOL Broadband while testingand troubleshooting issues associated with DSLand broadband connection.";

    var edu = "EDUCATION:";

    var eduDesp = " Software Engineering Technology Co - op Advance Diploma May 2014 - Present" +
"Centennial College, Toronto, ON, Canada." +

"Major Courses:" +
    "C#, Java Programming Advanced Web Applications Development" +
"Business Information Communication Technology Relational Database Management" +

	"Electronics and Communication Bachelor Degree Jun 2005 - Jun 2009" +
"University Of Technology Of Madhya Pradesh, India.";

    var course = "Major Courses:";
    var courseDesp = "Wireless communications and RF systems Digital and Analog Electronic Circuits" +
"Internet or Telecommunications Networking Protocols Embedded, C / C++ and assembly code" +
"TCP / IP Networking and WLAN technology Information Security" +
"Digital Signal Processing Electromagnetic, Physics & Mathematics";

    var proj = "ACADEMIC PROJECTS:";

    var projDesp = "Prepared project thesis to capture and manage electrocardiographic(ECG) data electronically for Toronto East General Hospital" +
"	Designed an online purchase website in ASP.NET and provided connectivity with the database." +
"	Merged MySQL and JDBC driver to build flight information help desk. " +
"	Used Software Engineering Methodologies to design E-Purchase Consultant & Management System." +
"	Used C language to code in microcontroller to perform room light automation upon visitor entry.";   

    var dep = "PROFESSIONAL DEVELOPMENT:";

    var depDesp = "	4 weeks on-the-job training from ADC telecommunication at Viom Networks Ltd., India, on wireless technologies. Training also covered on active and passive materials like amplifiers, main hubs, attenuator, splitter, optical cable, RF and Optical cable testing by using OTDR meter." +
"	6 weeks on-site training at CMC Ltd., India where worked on Computer Control Stepper Motor Using Device Drive on Embedded Programming Technology.  ";

    var volun = "VOLUNTEER EXPERIENCE:";

    var volunDesp = "	Shown actively involvement in organizing various events held in school and college." +
"	Participated in Hackathon event and built mobile application at windows platform.";

    var interest = "INTERESTS AND HOBBIES:";

    var interestDesp = "	Greatly enjoy travelling." +
"	Enjoy playing video games, watching animation and fantasy movies." +
"	Enjoy discussing movies and games. " +
"	Ongoing learning on a variety of topics via friends/family members and other sources.";
    var ref = "REFERENCES AVAILABLE UPON REQUEST";

    res.render('about.ejs',  {
        obj: objective,        objDesp: objectiveDesp,
        summary: summary, summaryDesp: summaryDesp,
        tech: tech,    techDesp: techDesp,
        exp: exp,        exp1: exp1,        exp2: exp2,        exp3: exp3,
        edu: edu,    eduDesp: eduDesp,
        course: course, courseDesp: courseDesp,
        proj: proj, projDesp: projDesp,
        dep: dep, depDesp: depDesp,
        volun: volun, volunDesp: volunDesp,
        interest: interest, interestDesp: interestDesp,
        ref:ref


    });
}