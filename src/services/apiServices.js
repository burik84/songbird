
const getResource= async (url) =>{
  const res=await fetch(url);
  
  console.log(res.status);
  if(!res.ok){
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }
  const body=await res.json();
  return body;
}


export default getResource;
