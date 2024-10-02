import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    tel: '',
    gender: '',
    level: '',
    dept: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='lg:grid lg:grid-cols-2'>
      <div className='hidden lg:block lg:w-5/6 xl:w-11/12 relative h-full bg-gradient-to-tl from-[#92B76D] to-[#ffca0d]'>
        <div className='absolute w-full opacity-50 h-full bg-green-100 backdrop-blur-3xl'></div>
        <div className='relative text-black top-1/4 left-5'>
          <div className='flex flex-col items-center justify-between gap-10 px-8'>
            <a href='/' className="text-4xl text-left font-bold">EkoStudy</a>
            <div className="flex flex-col gap-2 items-start px-6 ">
              <blockquote className="text-left text-4xl">&ldquo;The secret of getting ahead is getting started.&rdquo;</blockquote>
              <em className='text-right text-xl'>— Mark Twain</em>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-16 lg:px-10 xl:px-28 py-12 lg:py-8">
        <h1 className='text-4xl lg:text-6xl font-bold text-center'>Create Account</h1>
        <p>Already have an account? <a href="/signin" className='text-[#92B76D] hover:text-[#ffca0d] transition duration-300 ease-in-out'>Sign in</a></p>
        
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 lg:gap-6'>
          <div className="flex flex-row items-center justify-between">
            <fieldset className="flex flex-col items-start justify-center gap-1">
              <label className='text-[#222831c6]' htmlFor="firstname">First Name</label>
              <input 
                className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D] text-[#6c8b4c]" 
                type="text" 
                name="firstname" 
                id="firstname" 
                placeholder='Kia' 
                value={formData.firstname}
                onChange={handleChange}
                required 
              />
            </fieldset>
            <fieldset className="flex flex-col items-start justify-center gap-1">
              <label className='text-[#222831c6]' htmlFor="lastname">Last Name</label>
              <input 
                className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D] text-[#6c8b4c]" 
                type="text" 
                name="lastname" 
                id="lastname" 
                placeholder='Smith' 
                value={formData.lastname}
                onChange={handleChange}
                required 
              />
            </fieldset>
          </div>

          <fieldset className="flex flex-col items-start justify-center gap-1">
            <label className='text-[#222831c6]' htmlFor="email">Email Address</label>
            <input 
              className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D] text-[#6c8b4c]" 
              type="email" 
              name="email" 
              id="email" 
              placeholder='kiasmith@mail.com' 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </fieldset>

          <div className="flex flex-row items-center justify-start gap-12">
            <fieldset className="flex flex-col items-start justify-center gap-1">
              <label className='text-[#222831c6]' htmlFor="tel">Phone number</label>
              <input 
                className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D] text-[#6c8b4c]" 
                type="tel" 
                name="tel" 
                id="tel" 
                placeholder='+234 80 123 45 678' 
                value={formData.tel}
                onChange={handleChange}
                required 
              />
            </fieldset>

            <fieldset>
              <legend className='text-[#222831c6]'>Gender</legend>
              <div className="flex flex-row mt-2">
                <div className="flex flex-row items-center mr-4">
                  <input 
                    type="radio" 
                    name="gender" 
                    id="male" 
                    value="male" 
                    checked={formData.gender === 'male'}
                    onChange={handleChange} 
                  />
                  <label className="text-[#222831c6] ml-2" htmlFor="male">M</label>
                </div>
                <div className="flex flex-row items-center">
                  <input 
                    type="radio" 
                    name="gender" 
                    id="female" 
                    value="female" 
                    checked={formData.gender === 'female'}
                    onChange={handleChange} 
                  />
                  <label className="text-[#222831c6] ml-2" htmlFor="female">F</label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="flex flex-row items-center justify-start gap-12">
            <fieldset className="flex flex-col items-start justify-center gap-1">
              <label className='text-[#222831c6]' htmlFor="level">Level</label>
              <select 
                className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D] text-[#6c8b4c]" 
                name="level" 
                id="level" 
                value={formData.level}
                onChange={handleChange}
                required
              >
                <option value=''></option>
                <option value='predegree'>Predegree</option>
                <option value='100'>Freshman (100L)</option>
                <option value='200'>Classman (200L)</option>
                <option value='300'>Senior (300L)</option>
                <option value='400'>Upper Classman (400L)</option>
                <option value='500'>Final Year (500L)</option>
              </select>
            </fieldset>

            <fieldset>
              <label className='text-[#222831c6]' htmlFor="dept">Department</label>
              <select 
                className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D] text-[#6c8b4c]" 
                name="dept" 
                id="dept" 
                value={formData.dept}
                onChange={handleChange}
                required
              >
                <option value=''></option>
                <option value='art&design'>Art & Design</option>
                <option value='engineering'>Engineering</option>
                <option value='Humanities'>Humanities</option>
                <option value='Mass Comm'>Mass Communication</option>
                <option value='science'>Sciences</option>
                <option value='others'>Others</option>
              </select>
            </fieldset>
          </div>

          <fieldset className="flex flex-col items-start justify-center gap-1">
            <label className='text-[#222831c6]' htmlFor="password">Password</label>
            <input 
              className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D] text-[#6c8b4c]" 
              type="password" 
              name="password" 
              id="password" 
              placeholder='Enter password' 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center gap-1">
            <label className='text-[#222831c6]' htmlFor="confirmPassword">Confirm Password</label>
            <input 
              className="w-full border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D] text-[#6c8b4c]" 
              type="password" 
              name="confirmPassword" 
              id="confirmPassword" 
              placeholder='Re-enter password' 
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </fieldset>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <input 
                className="form-checkbox text-[#92B76D] border border-solid py-3 px-3 rounded border-[#22283170] outline-none focus:ring-1 focus:ring-[#92B76D]" 
                type="checkbox" 
                name="agree" 
                id="agree" 
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree" className="text-[#222831c6]">By checking this box, you agree to comply with our <a className="text-[#92B76D] hover:text-[#ffca0d] transition duration-300 ease-in-out">terms and conditions</a>.</label>
            </div>
          </div>

          <button className='mt-6 w-full bg-[#92B76D] hover:bg-[#ffca0d] transition duration-300 ease-in-out text-white py-3 rounded' type="submit">
            Create Account
          </button>
        </form>
        <div className='mt-4'>
                <div className='flex flex-row gap-5 items-center justify-center mb-2'>
                    <span className='w-full h-[1px] bg-[#22283184]'></span>
                    <span className='text-lg font-semibold text-[#222831a1]'>Or</span>
                    <span className='w-full h-[1px] bg-[#22283170]'></span>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <a href="#" className="w-full flex flex-row items-center justify-center gap-2 hover:bg-blue-100 px-2 py-3 rounded-full bg-transparent border border-solid border-blue-500">
                        <img src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Google-icon.png" alt="Google Icon" width={20} height={20} />
                        <span>Continue with Google</span>
                    </a>
                    <a href="#" className="w-full flex flex-row items-center justify-center gap-2 hover:bg-gray-100 px-2 py-3 rounded-full bg-transparent border border-solid border-gray-500">
                    <img src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Apple_logo_grey.svg.png?updatedAt=1727884280423" alt="Apple Icon"  width={20} height={20} />
                        <span>Continue with Apple</span>
                    </a>
                </div>
            </div>
      </div>
    </div>
  );
};

export default App;