const validate = values => {
  const errors = {}
  if (!values.summary) {
    errors.summary = 'Required'
  }
  if (values.summary && values.summary.length > 150) {
    errors.summary = "Can't be longer than 150 characters!"
  }
  if (!values.bio) {
    errors.bio = 'Required'
  }
  if (!values.city) {
    errors.city = 'Required'
  }
  return errors
}

export default validate
