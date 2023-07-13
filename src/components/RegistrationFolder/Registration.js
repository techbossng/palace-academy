import React, { useState } from 'react';
import './RgtStyle.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store registration data locally (e.g., in local storage or state management)
    // You can choose the appropriate method based on your project requirements
    // For simplicity, let's store the data in local storage
    const registrationData = {
      name,
      age,
      email,
      program,
    };
    localStorage.setItem('registrationData', JSON.stringify(registrationData));

    setIsSubmitted(true);
  };

  return (
    <div className="registration">
      <h1>Player Registration</h1>
      {isSubmitted ? (
        <div className="success-message">Registration Successful! &nbsp;
        <h3>We will contact you shortly via registered email.</h3></div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="program">Program</label>
            <select
              className="form-control"
              id="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              required
            >
              <option value="">Select a program</option>
              <option value="Youth Training">Youth Training</option>
              <option value="Skill Development">Skill Development</option>
              <option value="Summer Camps">Summer Camps</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
             Submit
           </button>
        </form>
      )}
    </div>
  );
};

export default Registration;


// import React, { useState } from 'react';
// import './RgtStyle.css';

// const Registration = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');
//   const [program, setProgram] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted!');
//   };

//   return (
//     <div className="registration">
//       <h2>Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="age">Age</label>
//           <input
//             type="number"
//             className="form-control"
//             id="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="program">Program</label>
//           <select
//             className="form-control"
//             id="program"
//             value={program}
//             onChange={(e) => setProgram(e.target.value)}
//             required
//           >
//             <option value="">Select a program</option>
//             <option value="Youth Training">Youth Training</option>
//             <option value="Skill Development">Skill Development</option>
//             <option value="Summer Camps">Summer Camps</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Registration;
