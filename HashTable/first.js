class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total =0;
        for(let i=0;i<key.length;i++){
            total+= key.charCodeAt(i)
        }

        return total%this.size
    }

    set(key,value){
        let index = this.hash(key)
        let bucket = this.table[index]

        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKey = this.table[index].find(item => item[0] === key)
            if(sameKey){
                sameKey[1] = value
            }else{
                this.table[index].push([key,value])
            }
        }
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.table[index]

        if(bucket){
            let sameKey = this.table[index].find(item => item[0] == key)

            if(sameKey){
                
                let removeIndex = this.table[index].indexOf(sameKey)
                this.table[index].splice(removeIndex,1)
            }
        }
    }

   get(key){
    let index = this.hash(key)
    let bucket = this.table[index]

    if(bucket){
        let sameKey = bucket.find(item => item[0] === key)
        if(sameKey){
            return sameKey[1]
        }
    }
   }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i] && this.table[i].length){
                console.log(this.table[i]);
            }
        }
    }

}


var hash = new HashTable(10)

hash.set('name','Abdul Rubb A')
hash.set('Age',24)
hash.set('professional','Mern Stack Developer')
hash.set('place','Cheleri')
hash.set('name','Aani')

hash.display()
console.log(hash.get('Age'));
hash.remove('professional')
console.log('After Remove The Item');
hash.display()
