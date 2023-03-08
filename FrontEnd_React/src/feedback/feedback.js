import emailjs from 'emailjs-com'
import { useState,useRef } from 'react'
import AfterLogNavibar from '../Components/Navbar/AfterLogNavibar'
import validation from './validation'

const Feedback = () => {
    const form =useRef();

    const [senderName, setName] = useState('')
    const [email, setEmail] = useState('')
    const [ratingScore, setRatinScore] = useState('')
    const [Comments, setComments] = useState('')
    const [errors, setErrors] = useState({});

    const feedback = { senderName, email, ratingScore, Comments }


    const sendEmail = (event) => {

        event.preventDefault();
        setErrors(validation(feedback))
        emailjs.sendForm(
            "service_8xxedg7", 
            "template_u11ws6g", 
            event.target, 
            "NeeQm0fuqQ_qBWrUW")
            .then((response) => {
                console.log('Message sent successsfully', response.status, response.text)
            })
            .catch((err) => {
                console.log('failed', err)
            }
            );
        event.target.reset()
    };

    return (
        <div>
            <form  onSubmit={sendEmail}>
                <AfterLogNavibar />
                {/* {dataAdded && <h3 class="alert alartbox alert-primary" role="alert">{dataAdded}</h3>} */}

                <div className="wrapper">
                    <div className="app-wrapper">
                        <div>
                            <h2 className="title">Give FeedBack</h2>
                        </div>
                        <br />
                        <form className="form-wrapper">
                            <div className="row">
                                <div className="col">
                                    <div className="name">
                                        <label className="label">Student Name</label>
                                        <input
                                            className="input"
                                            type="text"
                                            name='name'
                                            value={senderName}
                                            placeholder="Student Name"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        {errors.senderName && <p className="error">{errors.senderName}</p>}
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="name">
                                        <label className="label">Rating Score </label>
                                        <input
                                            className="input"
                                            type="number"
                                            name='ratingScore'
                                            value={ratingScore}
                                            placeholder="out of 10"
                                            onChange={(e) => setRatinScore(e.target.value)}
                                        />
                                        {errors.ratingScore && <p className="error">{errors.ratingScore}</p>}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="name">
                                            <label className="label">Email</label>
                                            <input
                                                className="input"
                                                type="email"
                                                name='email'
                                                value={email}
                                                placeholder="Enter Email Id"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {errors.email && <p className="error">{errors.email}</p>}
                                        </div>
                                    </div>

                                </div>

                                <div className="col">
                                    <div className="name">
                                        <label className="label">Comments</label>
                                        <textarea
                                            className="input"
                                            type="text"
                                            rows={5}
                                            cols={5}
                                            name='comments'
                                            value={Comments}
                                            placeholder="Comments"
                                            onChange={(e) => setComments(e.target.value)}
                                        />
                                        {errors.Comments && <p className="error">{errors.Comments}</p>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Send"
                                    className='form-Control btn btn-primary'
                                    style={{ marginTop: "30px" }}
                                />
                                {/* <button className='submit' onClick={emailFeedback}>Give FeedBack</button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Feedback

{/* <AfterLogNavibar /> */ }
{/* <h1>FeedBack</h1>
            <form>
                <div className="col-md-12">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        required name="senderName"></input>
                </div>
                <div className="col-md-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"
                        onChange={(e) => setRatinScore(e.target.value)}
                        required name="User_email"></input>
                </div>
                <div className="col-md-12">
                    <label className="form-label">ratingScore</label>
                    <input type="number" className="form-control"
                        onChange={(e) => setRatinScore(e.target.value)}
                        required name="ratingScore"></input>
                </div>

                <div className="col-12">
                    <label className="form-label">Comments</label>
                    <textarea type="text" className="form-control"
                        onChange={(e) => setComments(e.target.value)}
                        required name="Comments" ></textarea>
                </div>
                <div>
                    <input type='submit'
                        value='send'
                        className='form-control btn btn-primary' />
                </div>


            </form> */}