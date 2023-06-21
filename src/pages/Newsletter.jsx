import { Form,redirect,useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({request}) =>
{
    const formData = await request.formData();
    const data=Object.fromEntries(formData);

    try
    {
        const response = await axios.post(newsletterUrl,data);
        toast.success(response.data.msg);
    
        return redirect('/');
    }
    catch(err)
    {
        toast.error(err?.response?.data?.msg);
        return err;
    }
}

const Newsletter = () =>
{
    const navigation=useNavigation();
    const isSubmitting = navigation.state==='submitting';

    return (
        <Form className="form" method="POST">
            <h4 style={{textAlign:'center',marginBottom:'2rem'}}>Our Newsletter</h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">name</label>
                <input type="text" required className="form-input" name="name" id="name" />
            </div>

            <div className="form-row">
                <label htmlFor="lastName" className="form-label">last name</label>
                <input type="text" required className="form-input" name="lastName" id="lastName"/>
            </div>

            <div className="form-row">
                <label htmlFor="email" className="form-label">email</label>
                <input type="email" className="form-input" name="email" id="email" defaultValue="test@test.com" required/>
            </div>

            <button className="btn btn-block" type="submit" style={{marginTop:'0.5rem',padding:'10px 0'}} disabled={isSubmitting}>
                {isSubmitting? 'Submitting ...':'Submit'}
            </button>
        </Form>
    );
};

export default Newsletter;