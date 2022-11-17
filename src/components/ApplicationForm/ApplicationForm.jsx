import {React, useState} from 'react';
import Card from '../../UI/Card/Card';

const ApplicationForm = () => {
    const [showModal, setShowmodal] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();
        setShowmodal(true);
    }

    return ( 
        <div className='bg-gradient-to-r from-slate-900 to-sky-200 text-slate-900 p-20 text-center'>
        <div className='text-center bg-slate-200 rounded-md p-5 shadow drop-shadow-md max-h-xs max-w-xl m-auto'>
            <h2 className='text-2xl mb-10'>So you want to be a cool wolf huh?</h2>  
            <form action="">
                <div>
                    <label for="email" className='mr-2'></label>
                    <input type="email" id="email" placeholder='email? maybe' className='text-xl mb-3 drop-shadow border border-slate-300' />
                </div>
                <div>
                    <label for="name" className='mr-2'></label>
                    <input type="text" id="name" placeholder='name? maybe' className='text-xl mb-3 shadow border border-slate-300' />
                </div>
                <div>
                    <label for="LastName" className='mr-2'></label>
                    <input type="text" id="LastName" placeholder='Last name? maybe' className='text-xl mb-3 shadow border border-slate-300' />
                </div>
                <div>
                    <label for="message" className='mr-2'></label>
                    <textarea type="text" id="message" placeholder='tell us why you wolf' className='resize-y mb-3 text-xl shadow border border-slate-300' />
                </div>
                <div>
                    <button className='rounded-md text-3xl p-5 bg-sky-200 hover:bg-sky-900 text-sky-900 hover:text-sky-200' onClick={submitHandler}>KNEEL</button>
                </div>
                {showModal && <div>
                    <h1>You have bent the knee. Your submission will be reviewed by the council of wolves.<br/  > Place in queue: 512</h1>
                </div>}
            </form>
        </div>
        </div>
     );
}
 
export default ApplicationForm;