import { FaFlagCheckered, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import '@fontsource/orbitron'; // Racing-inspired font for headers
import '@fontsource/exo-2'; // Supporting font for body text
import { motion } from 'framer-motion';
import img1 from '../assets/teams/23-24.jpg';
import img2 from "../assets/teams/22-23.jpg";
import img3 from "../assets/teams/21-22.jpg";


const teamData = [
  {
    team: "2024",
    teamManager: "Siddharth Chaudhary",
    captain: "Siddharth Chaudhary",
    viceCaptain: "Shreyansh Chaurasia",
    driver : "xyz",
    codriver : "abc",
    image: img1, 
    mentors: [
      "Ashirwad Mishra",
      "Chaitanya Buwade",
      "Ashutosh Kushwah",
      "Muskan Gupta",
      "Prashi Tamrakar",
      "Alok Sengar",
      "Prateek Sagitra"
    ],
    subTeams: {
      Rollcage: [
        {name: "Siddharth Chaudhary", role: "HOD"},
        {name: "Priyanshu Masania"},
        {name: "Kapil Soni"}
      ],
      "Vehicle Dynamics": [
        {name: "Shreyansh Chaurasia", role: "HOD"},
        {name: "Arnav Shinde"},
        {name: "Aman Verma"},
        {name: "Prakhar Shrivastav"},
        {name: "Angel Sahu"},
        {name: "Shubham Pareek"}
      ],
      Brakes: [
        {name: "Kunal Atkare", role: "HOD"},
        {name: "Pranav Dhoke"},
        {name: "Shivansh Markam"}
      ],
      Transmission: [
        {name: "Ashutosh Kushwah", role: "HOD"},
        {name: "Shreyas Sinha"},
        {name: "Piyush Kushwah"},
        {name: "Ishan Sabnis"}
      ],
      Electronics: [
        {name: "Chaitanya Buwade", role: "HOD"},
        {name: "Akshat Pratap Singh Chauhan"},
        {name: "Arin Patel"},
        {name: "Urvija Pandey"}
      ],
      Management: [
        {name: "Siddharth Chaudhary", role: "Team Manager"},
        {name: "Shreyas Sinha"},
        {name: "Akshat Pratap Singh Chauhan"},
        {name: "Arin Patel"},
        {name: "Pranav Dhoke"},
        {name: "Shivansh Markam"}
      ],
      CAE: [
        {name: "Kunal Atkare", role: "HOD"},
        {name: "Piyush Kushwah"},
        {name: "Shubham Pareek"},
        {name: "Priyanshu Masania"},
        {name: "Kapil Soni"},
        {name: "Urvija Pandey"}
      ],
      MBD: [
        {name: "Shreyansh Chaurasia", role: "HOD"},
        {name: "Arnav Shinde"},
        {name: "Prakhar Shrivastav"},
        {name: "Angel Sahu"},
        {name: "Ishan Sabnis"}
      ]
    }
  },
  {
    team: "2023",
    captain: "Ashirwad Mishra",
    viceCaptain: "Chaitanya Buwade",
    teamManager: "Prateek Sagitra",
    image: img2,
    mentors: [
      "Sarthak Mehta",
      "Aakash Kumar Mishra",
      "Aaditya Khode",
      "Agasttya Dixit",
      "Rashi Singhai",
      "Dhananjay Srivastava",
      "Osheen Sharma",
      "Anugya Chaurasia"
    ],
    subTeams: {
      Transmission: [
        {name: "Chaitanya Buwade", role: "HOD & External Manufacturing Head"},
        {name: "Ashutosh Kushwah"},
        {name: "Chhavi Gupta"}
      ],
      "Roll Cage": [
        {name: "Aalim Khan", role: "HOD"},
        {name: "Siddharth Chaudhary"},
        {name: "Subham Kumar Jain"}
      ],
      Suspension: [
        {name: "Muskan Gupta", role: "HOD & MBD Head"},
        {name: "Shreyansh Tiwari"}
      ],
      Brakes: [
        {name: "Alok Sengar", role: "HOD & Internal Manufacturing Head"},
        {name: "Ashirwad Mishra"},
        {name: "Prashi Tamrakar"},
        {name: "Kunal Atkare"}
      ],
      Steering: [
        {name: "Aagam Ji Jain", role: "HOD"},
        {name: "Shreyansh Chaurasia"},
        {name: "Neetu Vishwakarma"}
      ],
      CAE: [
        {name: "Ashirwad Mishra", role: "HOD"},
        {name: "Chaitanya Buwade"},
        {name: "Ashutosh Kushwah"},
        {name: "Kunal Atkare"}
      ],
      Management: [
        {name: "Prateek Sagitra", role: "Team Manager"},
        {name: "Alok Sengar"},
        {name: "Aagam Ji Jain"},
        {name: "Siddharth Chaudhary"},
        {name: "Shreyansh Tiwari"},
        {name: "Chhavi Gupta"}
      ],
      MBD: [
        {name: "Muskan Gupta", role: "HOD"},
        {name: "Shreyansh Chourasia"},
        {name: "Neetu Vishwakarma"}
      ]
    }
  },
  {
    team: "2022",
    captain: "Varun Dutt Saxena",
    viceCaptain: "Samarth Jain",
    image: img3,
    subTeams: {
      Suspension: [
        {name: "Harsh Sharma", role: "HOD & Driver"},
        {name: "Varun Dutt Saxena"},
        {name: "Anindhya Verma"},
        {name: "Aakash Kumar Mishra"},
        {name: "Daaman Sharma"},
        {name: "Sarthak Mehta"}
      ],
      Brakes: [
        {name: "Divyansh Agrawal", role: "HOD"},
        {name: "Piyush Kushwah", role: "CAE Head"},
        {name: "Agasttya Dixit"},
        {name: "Rashi Singhai"},
        {name: "Divyansh Jain"}
      ],
      Rollcage: [
        {name: "Nikhil Jain", role: "HOD"},
        {name: "Vivek Kumar"},
        {name: "Aaditya Khode"},
        {name: "Aalim Khan"}
      ],
      Steering: [
        {name: "Samarth Jain", role: "HOD"},
        {name: "Dhananjay Srivastava"},
        {name: "Ankit Bhide"},
        {name: "Shaily Udiya"}
      ],
      Transmission: [
        {name: "Arohan Srivastava", role: "HOD"}
      ],
      Management: [
        {name: "Satvik Jain", role: "Management Head"},
        {name: "Ubaid Khan"},
        {name: "Kaneesh Jain"},
        {name: "Aditi Joshi"},
        {name: "Garvit Jain"},
        {name: "Jay Shinde"},
        {name: "Anugya Chaurasia"}
      ]
    }
  }
]

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const mentorVariant = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
};

const subTeamMemberVariant = {
  rest: { scale: 1 },
  tap: { scale: 0.95 },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-gray-100 roboto-regular">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold text-center text-blue-400 mb-12 font-proracing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaFlagCheckered className="inline mr-2 text-blue-400" />
          Our Racing Team
        </motion.h1>
        
        {teamData.map((team, index) => (
          <motion.div
            key={index}
            className="bg-blue-900/10 shadow-2xl rounded-lg overflow-hidden mb-12 p-6 border border-blue-700"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl font-bold text-center text-blue-300 mb-6 font-proracing">
              <FaTachometerAlt className="inline mr-2 text-blue-300" />
              TEAM {team.team}
            </h2>

            <div className="m -8 text-center">
              <motion.img
                src={team.image}
                alt={`Team ${team.team} Photo`}
                className="w-full h-auto rounded-lg border border-blue-700"
                whileHover={{ scale: 1}}
                transition={{ type: 'spring', stiffness: 200 }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8 text-center">
              <motion.div variants={itemVariant}>
                <h3 className="text-xl font-semibold text-blue-300 font-proracing">Captain</h3>
                <p className="text-lg text-gray-100">{team.captain}</p>
              </motion.div>
              <motion.div variants={itemVariant}>
                <h3 className="text-xl font-semibold text-blue-300 font-proracing">Vice Captain</h3>
                <p className="text-lg text-gray-100">{team.viceCaptain}</p>
              </motion.div>
            </div>
            {(team.driver && team.codriver) && (<div className="grid md:grid-cols-2 gap-8 mb-8 text-center">
              <motion.div variants={itemVariant}>
                <h3 className="text-xl font-semibold text-blue-300 font-proracing">Driver</h3>
                <p className="text-lg text-gray-100">{team?.driver}</p>
              </motion.div>
              <motion.div variants={itemVariant}>
                <h3 className="text-xl font-semibold text-blue-300 font-proracing">co-Driver</h3>
                <p className="text-lg text-gray-100">{team?.codriver}</p>
              </motion.div>
            </div>)}
            {team.mentors && (
              <motion.div variants={containerVariant} className="mb-8">
                <h3 className="text-2xl font-bold text-center text-blue-400 mb-4 font-proracing">
                  <FaUsers className="inline mr-2 text-blue-400" />
                  Mentors
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {team.mentors.map((mentor, mentorIndex) => (
                    <motion.div 
                      key={mentorIndex} 
                      className="bg-blue-800/25 p-3 rounded-lg text-center border border-blue-600"
                      variants={mentorVariant}
                      initial="rest"
                      whileHover="hover"
                    >
                      <p className="text-gray-100">{mentor}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(team.subTeams).map(([subTeamName, members], subTeamIndex) => (
                <motion.div 
                  key={subTeamIndex} 
                  className="bg-blu p-4 rounded-lg shadow-lg border border-blue-600"
                  variants={containerVariant}
                >
                  <h3 className="text-xl font-bold text-blue-300 mb-4 font-proracing">{subTeamName}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {members.map((member, memberIndex) => (
                      <motion.div 
                        key={memberIndex} 
                        className="bg-blue-800/25 p-2 rounded border border-blue-700"
                        variants={subTeamMemberVariant}
                        initial="rest"
                        whileTap="tap"
                      >
                        <p className="font-medium text-gray-100">{member.name}</p>
                        {member.role && <p className="text-sm text-blue-400">{member.role}</p>}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
