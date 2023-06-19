export const notFalsy = (value: any) => {
  
  if (value == '') {
    return false;
  }
  if (value == 0) {
    return false;
  }
  if (value == null) {
    return false;
  }
  if (value == undefined) {
    return false;
  }
  if (value == -0) {
    return false;
  }
  if (value == false) {
    return false;
  } 
  if (value.toLowerCase() == 'non' || 'no') {
    return false;
  }
  if (value.toLowerCase() == 'false') {
    return false;
  }
  else {
    return true;
  } 
};
