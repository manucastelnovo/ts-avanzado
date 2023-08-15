import axios from "axios";

(async ()=>{
  function delay(time:number) {
    const promise = new Promise((resolve) =>{
      setTimeout(()=>{
        resolve(true)
      },time)
    })
    return promise
  }


  async function getProduct() {
    const promise = await  axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }
  console.log('---'.repeat(10))
  const rta = await delay(3000);
  console.log(rta)

  const products = await getProduct();
  console.log(products)
})();
