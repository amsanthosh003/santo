const studentSchema = require('./../model/student');
const errorHandler = require('./../utils/error.handler');


class studentController {


    async register(newGender){
        try{
            await studentSchema.create(newGender);
   return {
                status: 'success',
                msg: 'User created'
            }
        } catch(err){
            return {
                status: 'error',
                msg: 'User creation failed'
            }
        }
    }

    async login(responce){
        let name =responce.name;
        let password=responce.password;

        try{
            let student = await studentSchema.findOne({
                name: name,
                password: password,
            });

            if(!student){
                throw new Error('invalid creds');
            }

            return {
                status: "1",
                msg: "Login Sucessfully",
                user
            };

        } catch(error){
            return {
                status: '0',
                msg: 'username or password invalid'
            }
        }
    }

	

    async login1(name,password){
       
        try{
            let student = await studentSchema.findOne({
                name: name,
                password: password,
            });

            if(!student){
                throw new Error('invalid creds');
            }

            return {
                status: "1",
                msg: "Login Sucessfully",
                user
            };

        } catch(error){
            return {
                status: '0',
                msg: 'username or password invalid'
            }
        }
    }




    async add(farm){
		try{
			let response = await studentSchema.create(farm);
			return { status: "success",   msg:" Added successfully", result: response, message: "Added Successfully" };
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}
	
	async fetch(){
        try {
            let responce=await studentSchema.aggregate([
              {$lookup:
                {
                  from: "classes",
                  localField: "Class",
                  foreignField: "_id",
                  as: "classDetails"
                }
               }		 
             ]);
                    return {
                        response: responce
                    };
            } catch (error) {
                return {
                    status: "error",
                    error: errorHandler.parseMongoError(error)
                };
            }
	}

	async fetchdata(id){
		try{
			let response = await studentSchema.find({_id: id});
			return response;
			
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async delete(id){
		try{
			let response = await studentSchema.deleteOne({_id: id});
			return {
				status: "success",
				response: response
			};
		} catch(error){
			return {
				status: "error",
				error: errorHandler.parseMongoError(error)
			};
		}
	}

	async update(id, body) {

        try {
            let response = await studentSchema.update({_id: id}, body);
            return { status: "success", msg:" Updated successfully",result: response, message: "Updated Successfully" };

        } catch (error) {
            return { status: "error", error: error };
        }
}
//match 

async match(){
    try {
        let responce=await studentSchema.aggregate([
          {$match:{ name:"santhosh" } },
          		
          { $group: { _id: {email:"$email",mobile:"$mobile" }} }
         ]);
                return {
                    response: responce
                };
        } catch (error) {
            return {
                status: "error",
                error: errorHandler.parseMongoError(error)
            };
        }
} 

async sort(){
    try {
        let responce=await studentSchema.aggregate([
          		
          { $sort: { name :1} }
         ]);
                return {
                    response: responce
                };
        } catch (error) {
            return {
                status: "error",
                error: errorHandler.parseMongoError(error)
            };
        }
} 

/*
async search(name){
    try{
        let responce = await studentSchema.findOne({name:name}); 
        if(!responce){
            throw new Error('invalid creds'); }
        return { response: responce  }
         } catch(error){
          return {
            status: "error",
                error: errorHandler.parseMongoError(error) }}
  }
*/
     async search(name){
                    try{
                        let responce = await studentSchema.find({name:{$regex:name,$options:"$i"}}); 
                        if(!responce){
                            throw new Error('invalid creds'); }
                        return { response: responce  }
                         } catch(error){
                          return {
                            status: "error",
                                error: errorHandler.parseMongoError(error) }}}

}  


module.exports=new studentController();