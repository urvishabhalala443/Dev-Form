import { Form ,Field, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'


const Form1 = () => {
    const valueintit = {
        name:"",
        age:"",
        gender:"male",
        hobbies:[""]

    }
    const validation ={
        name:yup.string().required(),
        age:yup.number().required(),
        gender:yup.string().required(),
        hobbies:yup.array().required()
    }
    const abc =(value) =>{
        console.log(value);
        
    }
    return (
        <>
          <Formik initialValues={valueintit} validationSchema={validation} onSubmit={abc}>
            <Form>
               <div className="name-part">
                <label htmlFor="">
                <Field type="text" name="name" placeholder="Enter Your Name" />
                Name
                </label>
                
               </div>
               <div className="age">
                <p>Age</p>
                   
                <Field type="number" name="age" placeholder="Enter your Age">Age</Field>
                

               
               </div>
            <div className="gender-part">
                <label>
                    <Field type="radio" name="gender" value="male" />
                    Male
                </label>
                <label>
                    <Field type="radio" name="gender" value="female" />
                    Female
                </label>
                <label>
                    <Field type="radio" name="gender" value="other" />
                    Other
                </label>
            </div>
            <div className="hobbies-part">
                <label>
                    <Field type="checkbox" name="hobbies" value="cricket" />
                    Cricket
                </label>
                <label>
                    <Field type="checkbox" name="hobbies" value="reading" />
                    Reading
                </label>
                <label>
                    <Field type="checkbox" name="hobbies" value="adventure" />
                    Adventure
                </label>
            </div>
<button type='submit'>Save</button>
            </Form>
            </Formik>  
        </>
    )
}

export default Form1
