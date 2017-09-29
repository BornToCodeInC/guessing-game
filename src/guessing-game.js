class GuessingGame {
    constructor() {
        this.min=null;
        this.max=null;
        this.mid=null;
        this.arr=[];
    }

    setRange(min, max) {
        var arrLength=(max - min)+1;
        for(var i=0;i<arrLength;i++){
            this.arr.push(min+i);
        }
        this.min = 1;
        this.max = this.arr.length-2;
    }

    guess() {
        this.mid = Math.round((this.min + (this.max - this.min) / 2));
        return this.mid;
    }

    lower() {
        this.max=this.mid-1;
    }

    greater() {
        this.min=this.mid+1;
    }
}
module.exports = GuessingGame;
