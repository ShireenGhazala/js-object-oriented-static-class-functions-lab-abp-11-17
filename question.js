'use strict';

class Question{
     constructor(content){
      this.content = content;
      this.save()
     }

static Find(id){
return this.All() [id-1]
}



save(){
return this.constructor._All.push(this)
}
static All(){
return this._All;
}

}
Question._All=[]
