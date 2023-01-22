const app=Vue.createApp({
    data(){
        return{
            name:'',
            email:'',
            job:'',
            users:[
                {id:'1',name:'Salim',email:'salim@gmail.com',job:'teacher'}
            ],
            errorHandler:'',
            error:false,
            user_id:null
        }
    },
    methods:{
        addUser(){
            if(this.user_id!=null){
                let finduserById=this.users.find((user)=>user.id==this.user_id)
                finduserById.name=this.name
                finduserById.email=this.email
                finduserById.job=this.job
                this.user_id=null


                this.name=''
                this.email=''
                this.job=''

            }else if(this.name &&  this.email && this.job){
                let NewArr={
                    id:this.users.length+1,
                    name:this.name,
                    email:this.email,
                    job:this.job
                }
                this.users.push(NewArr),
                this.name='',
                this.email='',
                this.job=''
                this.error=false    
            }else{
                this.error=true,
                this.errorHandler='Input is empty'
            }
        },
        deleteUser(id){
             this.users=this.users.filter((user)=>user.id!=id)
        },
        updateUser(id){
            let finduserById=this.users.find((user)=>user.id==id)
            this.name=finduserById.name
            this.email=finduserById.email
            this.job=finduserById.job 
            this.user_id=id
         


        }
    },
    computed:{
        reverseUser(){
            return this.users.reverse()
        }
    }
}).mount("#main")