exports.log = data => {
  if (process.env.NODE_ENV === 'development') {
    console.log(data)
  }
}
