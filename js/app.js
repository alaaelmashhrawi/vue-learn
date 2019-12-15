new Vue({
    el: "#vue-app",
    data: {

        name: 'alaa elmashhrawi',
        age: 5,
        job: 'front end developer',
        website: 'www.google.com',
        websitetag: '<a href="www.google.com">this html link</a>',
        y: 0,
        x: 0,
        name2: '',
        age2: '',
        a: '0',
        b: '0',
        available: 'true',
        available2: 'false',
        success: 'false',
        error:'false',
        colors :['red' ,'blue' ,'black' , 'wight'],
        students :[
            {name:'alaa' , age :27},
            {name:'reyad' , age :1},
            {name:'aya' , age :20},
        ]


    },
    methods: {
        greet: function (time) {
            return 'good ' + time + ' ' + this.name;
        },
        add: function (inec) {
            this.age += inec;

        },
        subtract: function (dec) {
            this.age -= dec;

        },
        postion: function (event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;


        }

    },
    computed:
        {
            AddAToAge: function () {
                return this.age + this.a;
            },
            AddBToAge: function () {
                return this.age + this.b;
            },

            comClass: function () {
                return {available2:this.available2}
            }
        }

})
;