import { promises as fs } from 'fs';
let activations=[]
export const allAvailablePacks=async (req,res)=>{
    console.log('trigger')
    try{
        let plans = JSON.parse(await fs.readFile('internetPlans.json', 'utf-8'));
       if( plans){
        res.status(200).json({
            message:'success',
            data: plans
        })
        }
     }catch(e){
        res.status(404).json({message:"Something went wrong"})
     }
}
export const getPackDetails=async (req,res)=>{
 let {packageName}=req.params
 console.log(packageName)
 try{
    let plans = JSON.parse(await fs.readFile('internetPlans.json', 'utf-8'));
    let plan = plans.find(p => p.name.toLowerCase() === packageName.toLowerCase());
    if(plan){
    res.status(200).json(plan)
    }
 }catch(e){
    res.status(404).json({message:"Something went wrong"})
 }
}
export const activatePack=async ()=>{
    const { planId} = req.body;
    const plan = plans.find(p => p.id === planId);
    try{
        const activation = {
            planId,
            startTime: new Date(),
            endTime: null,
            dataUsage: 0,
            remainingData: plan.data
          };
          activations.push(activation);
          fs.writeFileSync('activations.json', JSON.stringify(activations, null, 2));
          res.json({ message: 'Plan activated', activation });
     }catch(e){
        res.status(404).json({message:"Something went wrong"})
     }
}