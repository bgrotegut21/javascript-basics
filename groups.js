class Group {
	constructor() {
		this.groupMembers = []
	}
	static form (value){
		this.groupMembers = value;
		let newGroup = new Group;
		newGroup.groupMembers = this.groupMembers;
		return newGroup;
	}
	add (value){
		this.groupMembers.push(value);
	}

}

group = Group.form([1,2,4])
group.add(3);