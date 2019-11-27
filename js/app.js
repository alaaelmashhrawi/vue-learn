new Vue({
    el:"#vue-app",
    data :{
        name :'alaa elmashhrawi' ,
        age :'30' ,
        job :'front end developer',
        website:'www.google.com',
        template: '<a href="google.com">this html link</a>'


    },
    methods:{
        greet : function(time){
        return 'good ' + time +' '+ this.name;
    }
}
});