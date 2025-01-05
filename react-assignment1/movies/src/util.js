import truncate from "lodash/truncate";

export function excerpt(string) {
  return truncate(string, {    
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}

export function idAndNameToPersonId(id, name){
	name = name.toLowerCase();
	name = name.split(" ").join("-");
	name = name.split("'").join("-");
	return id + "-" + name 
}
