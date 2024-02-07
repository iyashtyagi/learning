async function getAnimalData(){
    const resp = await (await fetch("https://fakerapi.it/api/v1/persons")).json();
    console.log(resp);
}