const TestimonialForm = () => {
  return (
    <>
      <div className='formContainer'>
        <h2>Share your amazing story!</h2>

        <form>
          <div className='form-row'>
            <div className='form-group col-md-12'>
              <label for='Name'>Upload your Picture</label>
              <input
                type='file'
                className='form-control'
                placeholder='Choose Image'
              />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group col-md-4'>
              <label for='Name'>First Name</label>
              <input type='text' className='form-control' />
            </div>

            <div className='form-group col-md-4'>
              <label for='Name'>Last Name</label>
              <input type='text' className='form-control' />
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group col-md-12'>
              <label for='textArea'>Share your story</label>
              <textarea className='form-control' rows='3'></textarea>
            </div>
          </div>
          <h5 className='col-md-8'>What did you interact with Vasiti as?</h5>
          <div className='form-check form-check-inline col-md-2'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio1'
              value='option1'
            />
            <label className='form-check-label' for='inlineRadio1'>
              Customer
            </label>
          </div>
          <div className='form-check form-check-inline col-md-2'>
            <input
              className='form-check-input'
              type='radio'
              name='inlineRadioOptions'
              id='inlineRadio2'
              value='option2'
            />
            <label className='form-check-label' for='inlineRadio2'>
              Vendor
            </label>
          </div>

          <div className='form-row'>
            <div className='form-group col-md-12'>
              <label for='textArea'>
                City or Higher Institution (for Students)
              </label>
              <textarea className='form-control' rows='3'></textarea>
            </div>
          </div>

          <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
            <button class='btn btn-primary col-md-6' type='button'>
              Button
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default TestimonialForm
