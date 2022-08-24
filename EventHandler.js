function EventHandler(events){
	this.events = events;
	
	this.getEventsBetweenDates = function(start, end){
		result = events.filter(events => (events.dateStart >= start && events.dateEnd <= end));
		
		return result;
	}
	
	this.getByMonth = function(month){
		result = events.find(events => events.dateStart.substring(5,7) == month);
		
		return result;
	}
	
	this.getUniqueDateAndSort = function(){
		let unique = events.slice();
		
		unique = unique.filter((value, index, self) =>
			index === self.findIndex((t) => (
				t.dateStart === value.dateStart && t.dateEnd === value.dateEnd
			))
		)
		
		
		let result = unique.slice();
		
		result.sort((a,b) => {
			if(a.dateStart > b.dateStart){
				return 1;
			}
			if(a.dateStart < b.dateStart){
				return -1;
			}
			
			return 0;
		});
		
		return result;
	}
	
	
	
	this.getSummary = function() {
		result = Array.from(arguments);
		
		function summarise(item){
			if(item.dateStart == item.dateEnd){
				return "On " + item.dateStart + ": " + item.name + " (" + item.description + ")";
			}
			else{
				return "From " + item.dateStart + " to " + item.dateEnd + ": " + item.name + " (" + item.description + ")";
			}
		}
		
		if(result.length === 0){
			let result = events.slice();
			result = result.map(summarise);
			return result;
		}
		else{
			result = result.map(summarise);
			return result;
		}
	}
	
}
