const Login = () => {
  return (
    <>
      <section className='flex items-center justify-center flex-col mx-auto max-w-full bg-gray-100 px-6 lg:px-20 pt-32'>
        <div className='max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md'>
          <h3 className='text-4xl font-bold leading-[120%]'>Sign Up</h3>
          <div className='flex flex-col gap-4 mt-7'>
            <input
              type='text'
              placeholder='Your Name'
              className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'
            />
            <input
              type='password'
              placeholder='Your Password'
              className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'
            />
          </div>
          <button
            type='button'
            className='text-sm font-semibold border border-[#292C27] bg-[#292C27] px-7 py-3 text-white transition-all hover:bg-black my-5 w-full rounded-md'
          >
            Continue
          </button>
          <p className='text-black font-bold'>
            Already have an account?{' '}
            <span className='text-secondary underline cursor-pointer'>
              Login
            </span>
          </p>
          <div className='flex items-center justify-center mt-6 gap-3'>
            <input type='checkbox' id='' name='Agree' />
            <p className=''>
              By continuing, I agree to the terms of user & privacy policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
