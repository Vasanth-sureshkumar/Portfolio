import React, { useEffect } from 'react'
export default function ContactPage() {

    const [userData, setUserData] = React.useState({firstName: '',lastName: '', email: '', message: ''})
    const [errorData, setErrorData] = React.useState({});
    const [isSubmit, setIsSubmit] = React.useState(false);
    const [isSubmi, setIsSubmi] = React.useState(false);
    const handleChange = (e)=>{
        setUserData(
            (prevData)=>({...prevData, [e.target.name]: e.target.value})
        )
    }
    const submit = (e)=>{
        e.preventDefault();
        setErrorData(validate(userData));
        setIsSubmit(true)
    }
    const validate = (data)=>{
        const errorObj = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        if(!data.firstName){
            errorObj.firstName = 'firstname is required!'
        }
        if(!data.email){
            errorObj.email = 'email is required!'
        }else if(!regex.test(data.email)){
            errorObj.email = 'Please enter a valid email'
        }
        if(!data.message){
            errorObj.message = 'message field is required! '
        }
        return errorObj;
    }

    // useEffect(()=>{
    //     console.log("useEffect called")
    //     if(Object.keys(errorData).length === 0 && isSubmit)
    //     console.log(errorData);
    //     setIsSubmit(false)

    // },[isSubmi])
    return (
        <section className=' contact-container contact-section' id='contact'>
            <div className=''>
                <form className='contact-inner-container'>
                    <h2 className='get-in-touch-header'>GET IN TOUCH</h2>
                    <span className='my-phone'>📞Phone: (+91)9566178125</span>
                    <span className='my-email'>📧Email: vasanthsureshkumar23@gmail.com</span>
                    <div className='form-elements-parent'>
                        <div className='form-elements-child-1'>
                            <div className='form-elements m20'>
                                <label htmlFor='firstName'>First Name</label>
                                <input type="text" name="firstName" placeholder='First Name' value={userData.firstName} onChange={handleChange} required/>
                                <p>{errorData.firstName}</p>
                            </div>
                            <div className='form-elements'>
                                <label htmlFor='firstName'>Last Name</label>
                                <input type="text" name="lastName" placeholder='Last Name' value={userData.lastName} onChange={handleChange} />
                            </div>
                            <div className='form-elements'>
                                <label htmlFor='firstName'>Email</label>
                                <input type="email" name="email" placeholder='Email' value={userData.email} onChange={handleChange}/>
                                <p>{errorData.email}</p>
                            </div>
                        </div>
                        <div className='form-elements-child-2'>
                        <div className='form-elements'>
                            <label htmlFor='firstName'>Message</label>
                            <textarea rows="6" cols="40" name="message" placeholder='Message' value={userData.message} onChange={handleChange} ></textarea>
                            <p>{errorData.message}</p>
                        </div>
                        </div>
                        
                    </div>


                    <button className='send-btn btn' onClick={submit}>Send Message</button>

                </form>
            </div>
        </section>
    )
}