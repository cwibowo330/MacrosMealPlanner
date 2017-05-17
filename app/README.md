Your application code should go here.  I tend to use a structure like this:

app/
  scenes/ <- "ie, pages", so main views for all your different screens
  components/ <- reusable React components
  services/ <- non-component code (API communication, etc)
  sagas/ <- we'll get to this
  reducers/ <- ditto
  actions/ <- ditto
