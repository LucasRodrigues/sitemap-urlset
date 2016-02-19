
export default class PriorityValidator{

  static validate(priority){
    const startRange = 0.0;
    const endRange = 1.0;

    return ((startRange >= priority) && (priority <= endRange));
  }
}