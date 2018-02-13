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
  if (!values.bioName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.sex) {
    errors.sex = 'Required'
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required'
  }
  return errors
}

export default validate
