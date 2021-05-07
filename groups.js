

  class Group {
      static form(items){
		  this.values = this.items;
      }
  }

  s = Group.form([1]);
  console.log(s);