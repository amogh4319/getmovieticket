console.log("person 1:shows ticket");
console.log("person 2:shows ticket");

const preMovie=(async()=>{
    const wifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000);
    })
     const getPopcorn=new Promise((resolve,reject)=>{resolve('popcorn')});
     const getButter=new Promise((resolve,reject)=>{resolve('butter')});
     const getColdDrink=new Promise((resolve,reject)=>{resolve('cold drink')});

    let ticket=await wifeBringingTicks;

    // console.log(`wife:i have the ${ticket}` );
    // console.log("husband:lets go in");
    // console.log("wife: no iam hungry");

    let popcorn=await getPopcorn;

    // console.log(`husband:i got some ${popcorn}`);
    // console.log("husband: lets go in");
    // console.log("wife:i need butter on my popcorn");

    let butter=await getButter;

    // console.log(`husband:i got some ${butter}`);
    // console.log("husband:anything else?");
    // console.log("wife:i need some cold drink");

    let coldDrink=await getColdDrink;
    // console.log(`husband:here is your ${coldDrink}`);
    // console.log("wife:ok thank u");
    // console.log("husband can we go now ?");
    // console.log("wife : yeah ok sure!!!");
    let things=await Promise.all([getPopcorn,getButter,getColdDrink]);
    console.log(`${popcorn},${butter},${coldDrink}`);
    return ticket;
})
preMovie().then((m)=>{console.log(`person 3:shows ${m}`)});


console.log("person 4:shows ticket");
console.log("person 5:shows ticket");