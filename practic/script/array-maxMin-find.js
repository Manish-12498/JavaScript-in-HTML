
const nums=[];
const output=minMax(nums);
console.log(output);

function minMax(nums){

    if(nums.length===0){
        return{
            minimum:null,
            maximum:null
        };
    }

    if (nums.length===1) {
        return{
            minimum:nums[0],
            maximum:nums[0]
        };
                    
    }

    let min=nums[0];
    let max=nums[0];
    for(let i=1;i<nums.length;i++){
        if(min>nums[i]){
            min=nums[i];
        }
        if(max<nums[i]){
            max=nums[i];
        }

    }
    const result={
        minimum:min,
        maximum:max
    };
    return result;
}
