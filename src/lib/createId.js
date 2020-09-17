let id = 0;
const createId = () => {
  id += 1;
  return id;
};

//let value = 0;
class createId1 {
  constructor() {
    //value += 1;
    id += 1;
    this.id = id;
  }
  addten() {
    this.id += 100;
    console.log(this.id);
    return this.id;
  } //使用类就可以添加多个方法，使用的时候，就调用对应方法就可以了
}

export { createId, createId1 };
