export default function Home() {
    const name = localStorage.getItem("name");
    console.log(localStorage);
    return <h1>Welcome {name} to Bird Cards</h1>;
}
