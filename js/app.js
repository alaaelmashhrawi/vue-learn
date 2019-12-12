new Vue({
    el: "#vue-app",
    data: {
        name: 'alaa elmashhrawi',
        age: '30',
        job: 'front end developer',
        website: 'www.google.com',
        websitetag: '<a href="www.google.com">this html link</a>',
        y:0,
        x:0


    },
    methods: {
        greet: function (time) {
            return 'good ' + time + ' ' + this.name;
        },
        add: function (inec) {
            this.age +=inec;

        },
        subtract: function(dec) {
            this.age -=dec;

        },
        postion: function(event) {
           console.log(event);
           this.x= event.offsetX;
           this.y= event.offsetY;


        }
    }
});