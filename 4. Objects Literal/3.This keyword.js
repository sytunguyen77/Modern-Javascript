let user = {
   name: "crystal",
   age: 30,
   email: "crystal@thenetninja.co.uk",
   location: "berlin",
   blogs: ["why mac & cheese rules", "10 things to make with marmite"],
   login: function () {
      console.log("the user logged in");
   },
   logout: function () {
      console.log("the user logged out");
   },
   logBlogs() {
      //   this.blogs;
      //   console.log(this.blogs);
      console.log("this user has written the following blogs:");
      this.blogs.forEach((blog) => {
         console.log(blog);
      });
   },
};

user.logBlogs();
console.log(this);
