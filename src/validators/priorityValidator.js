
export default class PriorityValidator{

  static validate(item){
    const startRange = 0.0;
    const endRange = 1.0;

    return ((startRange >= item.priority) && (item.priority <= endRange));
  }
}