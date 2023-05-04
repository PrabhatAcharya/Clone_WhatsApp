import User from "../model/User.js"

export const addUser=async (request,response)=>{
// console.log(request.body);
try {
  let exist= await User.findOne({sub:request.body.sub})
  if(exist){
    return response.status(201).json({msg:'user already exists'})
  }
  const newUser= new User(request.body) ;
  await newUser.save();
  return response.status(200).json({newUser});
} catch (error) {
    return response.status(500).json({msg:error.message});
}
}

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json(error.message);
  }
};