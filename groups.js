class Group {
	constructor() {
		this.groupMembers = []
	}
	static form (value){
		this.memberGroups = value;
		let newGroup = new Group;
		for (let item of value){
			newGroup.add(item);
		}
		return newGroup;
	}
	add (value){
		let canAdd = true;
		for (let item of this.groupMembers){
			if(item == value){
				canAdd = false;
				break
			}
		}
		if (canAdd){
			this.groupMembers.push(value);
		}
	}
	delete(value) {
		let swapMembers = this.groupMembers;
		this.groupMembers = [];
		for (let item of swapMembers){
			if (value != item){
				this.groupMembers.push(item)
			}
		}
	}

	has (value){
		let isTrue = false;
		for (let item of this.groupMembers){
			if (value == item){
				isTrue = true;
				break;
			}
		}
		return isTrue;
	}

}


class GroupIterator {
	constructor(group){
		this.group = group;
		this.counter = 0;
		this.iterateOnce = false

		
	}
	next(){
		if (this.counter  == this.group.groupMembers.length){
			return {done: true}
		} else {
			console.log(this.counter, "counter")
			if (this.iterateOnce){
				this.counter ++;
			}
			this.iterateOnce ++;
			return {value: this.group.groupMembers[this.counter], done: false};
		}
	}
}


Group.prototype[Symbol.iterator] = function () {
	return new GroupIterator(this);
}

group = Group.form(["a","b","c","d","e","f","g"]);
console.log(Group.memberGroups)
console.log(Group.memberGroups)
for (let item of group){
	console.log(item);
}